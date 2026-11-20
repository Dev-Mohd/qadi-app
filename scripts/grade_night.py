#!/usr/bin/env python3
"""Night-photo grade for the Lakes Park set.

Lifts shadows and mid-tones locally (true blacks such as the sky stay black),
adds local contrast, tames lamp glare, unifies a warm tone, denoises and sharpens.

Usage: python3 scripts/grade_night.py   (run from the repo root)
Requires: pip install opencv-python-headless numpy
"""
import os

import cv2
import numpy as np

SRC = "photos/lakes-park/original"
DST = "photos/lakes-park/edited"


def smooth(x, lo, hi):
    t = np.clip((x - lo) / (hi - lo), 0, 1)
    return t * t * (3 - 2 * t)


def luma(img):
    return img[..., 0] * 0.114 + img[..., 1] * 0.587 + img[..., 2] * 0.299  # BGR


def grade(img8, *, lift=0.6, black=0.012, knee=0.06, clarity=0.35, highlights=0.25,
          warmth=0.0, sat=1.08, denoise=4, sharpen=0.6, contrast=0.08, blue_boost=0.0, bottom_dim=0.0):
    # 1. Denoise first so the shadow lift does not amplify sensor noise.
    if denoise:
        img8 = cv2.fastNlMeansDenoisingColored(img8, None, denoise, denoise + 2, 5, 15)
    img = img8.astype(np.float32) / 255.0
    L = luma(img)
    Lb = cv2.GaussianBlur(L, (0, 0), 12)

    # 2. Shadow lift: gain applied to dark-but-not-black areas. Anything under
    #    `black` (the night sky) is left untouched so the mood stays.
    presence = smooth(Lb, black, knee)             # 0 in true black, 1 where there is detail
    shadow = 1 - smooth(Lb, 0.10, 0.45)            # 1 in shadows, 0 in mid-tones and up
    gain = 1 + lift * 2.2 * presence * shadow
    img = img * gain[..., None]

    # 2b. Balance an over-lit foreground: darken progressively towards the bottom edge.
    if bottom_dim:
        h = img.shape[0]
        ramp = smooth(np.linspace(0, 1, h, dtype=np.float32), 0.45, 1.0)
        img = img * (1 - bottom_dim * ramp)[:, None, None]

    # 3. Highlight roll-off to calm lamp glare and bright panels.
    if highlights:
        t = 1 - highlights * 0.6
        img = np.where(img > t, t + (1 - t) * np.tanh((img - t) / (1 - t)) * (1 - highlights * 0.25), img)

    # 4. Clarity: large-radius local contrast, limited to where there is detail.
    if clarity:
        base = cv2.GaussianBlur(img, (0, 0), 25)
        img = img + clarity * (img - base) * presence[..., None]

    # 5. Gentle S-curve.
    if contrast:
        img = np.clip(img, 0, 1)
        img = img + contrast * (img - 0.5) * 4 * img * (1 - img)

    # 6. Warmth and saturation.
    img = np.clip(img, 0, 1)
    img[..., 2] *= 1 + warmth          # R
    img[..., 0] *= 1 - warmth * 1.2    # B
    hsv = cv2.cvtColor(np.clip(img, 0, 1), cv2.COLOR_BGR2HSV)
    s = hsv[..., 1] * sat
    if blue_boost:
        blue = np.exp(-((hsv[..., 0] - 235) / 30) ** 2) * smooth(hsv[..., 1], 0.45, 0.75)
        s = s * (1 + blue_boost * blue)
        hsv[..., 2] = np.clip(hsv[..., 2] * (1 + blue_boost * 0.6 * blue), 0, 1)
    hsv[..., 1] = np.clip(s, 0, 1)
    img = cv2.cvtColor(hsv, cv2.COLOR_HSV2BGR)

    # 7. Sharpen fine detail (only where there is detail, not in the black sky).
    if sharpen:
        fine = cv2.GaussianBlur(img, (0, 0), 1.4)
        img = img + sharpen * (img - fine) * presence[..., None]

    return (np.clip(img, 0, 1) * 255 + 0.5).astype(np.uint8)


def heal(img, spots):
    """Remove small litter: spots are (x, y, radius)."""
    if not spots:
        return img
    mask = np.zeros(img.shape[:2], np.uint8)
    for x, y, r in spots:
        cv2.circle(mask, (x, y), r, 255, -1)
    return cv2.inpaint(img, mask, 5, cv2.INPAINT_TELEA)


def rotate_crop(img, angle=0.0, crop=None):
    """Rotate about the centre, then crop to (x0, y0, x1, y1) fractions."""
    h, w = img.shape[:2]
    if angle:
        M = cv2.getRotationMatrix2D((w / 2, h / 2), angle, 1.0)
        img = cv2.warpAffine(img, M, (w, h), flags=cv2.INTER_LANCZOS4, borderMode=cv2.BORDER_REFLECT)
    if crop:
        x0, y0, x1, y1 = crop
        img = img[int(y0 * h):int(y1 * h), int(x0 * w):int(x1 * w)]
    return img


PHOTOS = {
    "IMG_4111": dict(grade=dict(lift=0.3, clarity=0.25, highlights=0.3, warmth=0.0, sat=0.95, contrast=0.04)),
    "IMG_4109": dict(grade=dict(lift=0.85, black=0.006, knee=0.035, clarity=0.2, highlights=0.4,
                                warmth=0.0, sat=0.95, denoise=6, sharpen=0.6, contrast=0.0)),
    "IMG_4096": dict(heal=[(178, 2175, 24), (757, 2198, 24), (1215, 2018, 24)],
                     grade=dict(lift=0.45, clarity=0.25, highlights=0.2, sat=1.0, blue_boost=0.3, contrast=0.04)),
    "IMG_4094": dict(heal=[(64, 1612, 50), (1301, 1474, 28)], crop=(0.0, 0.015, 1.0, 0.718),
                     grade=dict(lift=0.3, clarity=0.3, highlights=0.25, sat=1.0, bottom_dim=0.3, contrast=0.04)),
    "IMG_4093": dict(heal=[(425, 1880, 24)],
                     grade=dict(lift=0.2, clarity=0.3, highlights=0.22, sat=0.98, sharpen=0.7, contrast=0.04)),
}

if __name__ == "__main__":
    os.makedirs(DST, exist_ok=True)
    for name, cfg in PHOTOS.items():
        img = cv2.imread(f"{SRC}/{name}.jpg")
        img = heal(img, cfg.get("heal"))
        img = rotate_crop(img, cfg.get("angle", 0.0), cfg.get("crop"))
        out = grade(img, **cfg["grade"])
        cv2.imwrite(f"{DST}/{name}.jpg", out, [cv2.IMWRITE_JPEG_QUALITY, 95])
        print("ok", name, out.shape[1], "x", out.shape[0])

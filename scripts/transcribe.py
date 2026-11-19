#!/usr/bin/env python3
"""Transcribe audio/video to word-level captions JSON (for @remotion/captions).

Usage: python3 scripts/transcribe.py <media file> [out.json] [--model small] [--lang ar]
Requires: pip install faster-whisper, and ffmpeg on PATH
"""
import argparse
import json
import subprocess

import numpy as np

from faster_whisper import WhisperModel

p = argparse.ArgumentParser()
p.add_argument("media")
p.add_argument("out", nargs="?", default="captions.json")
p.add_argument("--model", default="small")
p.add_argument("--lang", default="ar")
a = p.parse_args()

model = WhisperModel(a.model, device="cpu", compute_type="int8")
# Decode with ffmpeg to 16 kHz mono float32 (avoids PyAV version issues).
raw = subprocess.run(
    ["ffmpeg", "-v", "error", "-i", a.media, "-f", "f32le", "-ac", "1", "-ar", "16000", "-"],
    check=True, capture_output=True,
).stdout
audio = np.frombuffer(raw, dtype=np.float32)
segments, _ = model.transcribe(audio, language=a.lang, word_timestamps=True)
captions = []
for seg in segments:
    for w in seg.words or []:
        captions.append({
            "text": w.word,
            "startMs": round(w.start * 1000),
            "endMs": round(w.end * 1000),
            "timestampMs": round((w.start + w.end) * 500),
            "confidence": w.probability,
        })
with open(a.out, "w", encoding="utf-8") as f:
    json.dump(captions, f, ensure_ascii=False, indent=1)
print(f"{len(captions)} words -> {a.out}")

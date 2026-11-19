# استوديو المقاطع

مشروع تصميم مقاطع الفيديو بالكود، مبني على [Remotion](https://github.com/remotion-dev/remotion) و FFmpeg.

## التشغيل

```bash
npm install
npm run studio                      # معاينة حية في المتصفح
npm run render -- Sample out/sample.mp4   # تصدير MP4
npm run still -- Sample out/frame.png --frame=30
```

## الهيكل

| المسار | المحتوى |
|---|---|
| `public/assets/images` | الصور والشعارات |
| `public/assets/videos` | المقاطع الخام |
| `public/assets/audio` | الموسيقى والتعليق الصوتي |
| `public/assets/refs` | المراجع (ستايل، لقطات شاشة) |
| `src/compositions` | كل مقطع في ملف |
| `src/Root.tsx` | تسجيل المقاطع |
| `src/fonts.ts` | الخطوط العربية (Tajawal, Cairo, IBM Plex Sans Arabic, Almarai) |
| `src/formats.ts` | المقاسات: عمودي 1080×1920، أفقي 1920×1080، مربع 1080×1080 |
| `scripts/transcribe.py` | تفريغ الصوت إلى كابشن بتوقيت الكلمات (`pip install -r scripts/requirements.txt`) |
| `out/` | المقاطع المصدّرة (غير مرفوعة على git) |

## الأدوات المثبتة

- `remotion` + `@remotion/cli` — المحرك والتصدير
- `@remotion/transitions` — الانتقالات
- `@remotion/captions` — الكابشن المتحرك
- `@remotion/media-utils`, `@remotion/gif`, `@remotion/lottie` — صوت، GIF، Lottie
- `@remotion/shapes`, `@remotion/paths`, `@remotion/noise`, `@remotion/motion-blur`, `@remotion/layout-utils`, `@remotion/animation-utils` — أشكال وحركة

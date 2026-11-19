// Standard output sizes.
export const formats = {
  vertical: {width: 1080, height: 1920}, // Reels / TikTok / Shorts
  horizontal: {width: 1920, height: 1080}, // YouTube
  square: {width: 1080, height: 1080}, // Feed posts
} as const;

export const FPS = 30;

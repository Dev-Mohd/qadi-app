// Arabic fonts bundled locally (no network needed at render time).
import '@fontsource/tajawal/arabic-400.css';
import '@fontsource/tajawal/arabic-700.css';
import '@fontsource/tajawal/arabic-900.css';
import '@fontsource/cairo/arabic-400.css';
import '@fontsource/cairo/arabic-700.css';
import '@fontsource/cairo/arabic-900.css';
import '@fontsource/ibm-plex-sans-arabic/arabic-400.css';
import '@fontsource/ibm-plex-sans-arabic/arabic-700.css';
import '@fontsource/almarai/arabic-400.css';
import '@fontsource/almarai/arabic-800.css';

export const fonts = {
  tajawal: 'Tajawal',
  cairo: 'Cairo',
  plex: 'IBM Plex Sans Arabic',
  almarai: 'Almarai',
} as const;

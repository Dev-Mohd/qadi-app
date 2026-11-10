import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';
import { I18nManager, Platform, useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';
import { CollectionProvider } from '@/store/collection';

// The app is Arabic-only for now, so lay everything out right-to-left.
// On native this takes effect from the next launch after first install.
if (Platform.OS === 'web') {
  if (typeof document !== 'undefined') {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }
} else if (!I18nManager.isRTL) {
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);
}

export default function RootLayout() {
  const dark = useColorScheme() === 'dark';
  const base = dark ? DarkTheme : DefaultTheme;
  const c = Colors[dark ? 'dark' : 'light'];
  const theme = {
    ...base,
    colors: {
      ...base.colors,
      primary: c.accent,
      background: c.background,
      card: c.card,
      text: c.text,
      border: c.border,
    },
  };

  return (
    <ThemeProvider value={theme}>
      <CollectionProvider>
        <Stack screenOptions={{ headerBackButtonDisplayMode: 'minimal' }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="perfume/[id]" options={{ title: '' }} />
        </Stack>
        <StatusBar style="auto" />
      </CollectionProvider>
    </ThemeProvider>
  );
}

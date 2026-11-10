import { useColorScheme } from 'react-native';

export const Colors = {
  light: {
    text: '#1F1A14',
    textSecondary: '#6F665B',
    background: '#FBF8F3',
    card: '#FFFFFF',
    border: '#E9E1D5',
    accent: '#A8742A',
    onAccent: '#FFFFFF',
  },
  dark: {
    text: '#F5EFE6',
    textSecondary: '#A99F92',
    background: '#14110D',
    card: '#1F1B16',
    border: '#332C23',
    accent: '#D9A24E',
    onAccent: '#14110D',
  },
} as const;

export type Theme = (typeof Colors)['light' | 'dark'];

export const Spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 } as const;

export function useTheme(): Theme {
  return Colors[useColorScheme() === 'dark' ? 'dark' : 'light'];
}

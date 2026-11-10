import { Tabs } from 'expo-router/js-tabs';
import { Text, type ColorValue } from 'react-native';

const icon = (glyph: string) =>
  function TabIcon({ color, size }: { color: ColorValue; size: number }) {
    return <Text style={{ color, fontSize: size - 4 }}>{glyph}</Text>;
  };

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'استكشف', tabBarIcon: icon('⌕') }} />
      <Tabs.Screen name="collection" options={{ title: 'مجموعتي', tabBarIcon: icon('♥') }} />
    </Tabs>
  );
}

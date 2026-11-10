import { useMemo, useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { PerfumeCard } from '@/components/perfume-card';
import { Spacing, useTheme } from '@/constants/theme';
import { FAMILIES, PERFUMES, type Family } from '@/data/perfumes';

export default function ExploreScreen() {
  const t = useTheme();
  const [query, setQuery] = useState('');
  const [family, setFamily] = useState<Family | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PERFUMES.filter((p) => {
      if (family && p.family !== family) return false;
      if (!q) return true;
      const notes = [...p.notes.top, ...p.notes.heart, ...p.notes.base];
      return [p.name, p.nameAr, p.brand, ...notes].some((s) => s.toLowerCase().includes(q));
    });
  }, [query, family]);

  return (
    <View style={[styles.screen, { backgroundColor: t.background }]}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="ابحث باسم العطر، الماركة، أو نوتة مثل «عود»"
        placeholderTextColor={t.textSecondary}
        style={[styles.search, { backgroundColor: t.card, borderColor: t.border, color: t.text }]}
        clearButtonMode="while-editing"
      />
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chips}>
          {[null, ...FAMILIES].map((f) => {
            const active = f === family;
            return (
              <Pressable
                key={f ?? 'all'}
                onPress={() => setFamily(f)}
                style={[
                  styles.chip,
                  {
                    borderColor: active ? t.accent : t.border,
                    backgroundColor: active ? t.accent : t.card,
                  },
                ]}>
                <Text style={{ color: active ? t.onAccent : t.text }}>{f ?? 'الكل'}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
      <FlatList
        data={results}
        keyExtractor={(p) => p.id}
        renderItem={({ item }) => <PerfumeCard perfume={item} />}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <Text style={[styles.empty, { color: t.textSecondary }]}>ما لقينا عطر يطابق بحثك</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  search: {
    margin: Spacing.md,
    marginBottom: Spacing.sm,
    paddingHorizontal: Spacing.md,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    fontSize: 15,
    textAlign: 'right',
  },
  chips: { paddingHorizontal: Spacing.md, gap: Spacing.sm, paddingBottom: Spacing.sm },
  chip: { paddingHorizontal: 14, paddingVertical: 7, borderRadius: 999, borderWidth: 1 },
  list: { padding: Spacing.md, paddingTop: Spacing.sm, gap: Spacing.sm },
  empty: { textAlign: 'center', marginTop: Spacing.xl },
});

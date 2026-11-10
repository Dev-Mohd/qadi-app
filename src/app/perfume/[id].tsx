import { useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Spacing, useTheme } from '@/constants/theme';
import { getPerfume } from '@/data/perfumes';
import { useCollection, type Shelf } from '@/store/collection';

const SHELVES: { key: Shelf; label: string }[] = [
  { key: 'owned', label: 'عندي' },
  { key: 'wishlist', label: 'أتمناه' },
];

export default function PerfumeScreen() {
  const t = useTheme();
  const { id } = useLocalSearchParams<{ id: string }>();
  const perfume = getPerfume(id);
  const { entries, setShelf, setRating } = useCollection();

  if (!perfume) {
    return (
      <View style={[styles.missing, { backgroundColor: t.background }]}>
        <Text style={{ color: t.textSecondary }}>العطر غير موجود</Text>
      </View>
    );
  }

  const entry = entries[perfume.id] ?? {};
  const layers = [
    { label: 'النوتات العليا', notes: perfume.notes.top },
    { label: 'نوتات القلب', notes: perfume.notes.heart },
    { label: 'نوتات القاعدة', notes: perfume.notes.base },
  ];

  return (
    <ScrollView style={{ backgroundColor: t.background }} contentContainerStyle={styles.content}>
      <View style={styles.block}>
        <Text style={[styles.title, { color: t.text }]}>{perfume.nameAr}</Text>
        <Text style={[styles.sub, { color: t.textSecondary }]}>
          {perfume.name} · {perfume.brand} · {perfume.year}
        </Text>
        <Text style={[styles.sub, { color: t.textSecondary }]}>
          {perfume.family} · {perfume.gender}
        </Text>
      </View>

      <View style={styles.row}>
        {SHELVES.map(({ key, label }) => {
          const active = entry.shelf === key;
          return (
            <Pressable
              key={key}
              onPress={() => setShelf(perfume.id, active ? undefined : key)}
              style={[
                styles.button,
                { borderColor: t.accent, backgroundColor: active ? t.accent : 'transparent' },
              ]}>
              <Text style={[styles.buttonText, { color: active ? t.onAccent : t.accent }]}>
                {active ? `✓ ${label}` : label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={[styles.card, { backgroundColor: t.card, borderColor: t.border }]}>
        <Text style={[styles.section, { color: t.text }]}>تقييمك</Text>
        <View style={styles.row}>
          {[1, 2, 3, 4, 5].map((n) => (
            <Pressable
              key={n}
              hitSlop={6}
              accessibilityLabel={`${n} من 5`}
              onPress={() => setRating(perfume.id, entry.rating === n ? undefined : n)}>
              <Text
                style={[styles.star, { color: n <= (entry.rating ?? 0) ? t.accent : t.border }]}>
                ★
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: t.card, borderColor: t.border }]}>
        <Text style={[styles.section, { color: t.text }]}>الهرم العطري</Text>
        {layers.map((layer) => (
          <View key={layer.label} style={styles.block}>
            <Text style={[styles.sub, { color: t.textSecondary }]}>{layer.label}</Text>
            <View style={styles.notes}>
              {layer.notes.map((note) => (
                <Text key={note} style={[styles.note, { color: t.text, borderColor: t.border }]}>
                  {note}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  missing: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  content: { padding: Spacing.md, gap: Spacing.md },
  block: { gap: Spacing.xs, alignItems: 'flex-start' },
  title: { fontSize: 28, fontWeight: '800' },
  sub: { fontSize: 14 },
  row: { flexDirection: 'row', gap: Spacing.sm },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1.5,
  },
  buttonText: { fontSize: 15, fontWeight: '700' },
  card: {
    padding: Spacing.md,
    gap: Spacing.md,
    borderRadius: 14,
    borderWidth: StyleSheet.hairlineWidth,
  },
  section: { fontSize: 17, fontWeight: '700' },
  star: { fontSize: 34 },
  notes: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  note: {
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 5,
    overflow: 'hidden',
  },
});

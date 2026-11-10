import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Spacing, useTheme } from '@/constants/theme';
import type { Perfume } from '@/data/perfumes';
import { useCollection } from '@/store/collection';

export function PerfumeCard({ perfume }: { perfume: Perfume }) {
  const t = useTheme();
  const entry = useCollection().entries[perfume.id];

  return (
    <Link href={{ pathname: '/perfume/[id]', params: { id: perfume.id } }} asChild>
      <Pressable>
        {/* Styles live on the inner View: Link's asChild slot doesn't forward array styles on web. */}
        <View style={[styles.card, { backgroundColor: t.card, borderColor: t.border }]}>
          <View style={styles.main}>
            <Text style={[styles.name, { color: t.text }]}>{perfume.nameAr}</Text>
            <Text style={[styles.sub, { color: t.textSecondary }]}>
              {perfume.name} · {perfume.brand}
            </Text>
            <Text style={[styles.sub, { color: t.textSecondary }]}>
              {perfume.family} · {perfume.gender}
            </Text>
          </View>
          <View style={styles.side}>
            {entry?.rating ? <Text style={{ color: t.accent }}>★ {entry.rating}</Text> : null}
            {entry?.shelf ? (
              <Text style={[styles.badge, { color: t.accent, borderColor: t.accent }]}>
                {entry.shelf === 'owned' ? 'عندي' : 'أتمناه'}
              </Text>
            ) : null}
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    padding: Spacing.md,
    borderRadius: 14,
    borderWidth: StyleSheet.hairlineWidth,
  },
  main: { flex: 1, gap: Spacing.xs, alignItems: 'flex-start' },
  side: { alignItems: 'flex-end', gap: Spacing.xs },
  name: { fontSize: 17, fontWeight: '700' },
  sub: { fontSize: 13 },
  badge: {
    fontSize: 12,
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    overflow: 'hidden',
  },
});

import { SectionList, StyleSheet, Text, View } from 'react-native';

import { PerfumeCard } from '@/components/perfume-card';
import { Spacing, useTheme } from '@/constants/theme';
import { PERFUMES } from '@/data/perfumes';
import { useCollection } from '@/store/collection';

export default function CollectionScreen() {
  const t = useTheme();
  const { entries } = useCollection();

  const sections = [
    { title: 'عندي', data: PERFUMES.filter((p) => entries[p.id]?.shelf === 'owned') },
    { title: 'أتمناه', data: PERFUMES.filter((p) => entries[p.id]?.shelf === 'wishlist') },
  ].filter((s) => s.data.length > 0);

  return (
    <View style={[styles.screen, { backgroundColor: t.background }]}>
      <SectionList
        sections={sections}
        keyExtractor={(p) => p.id}
        renderItem={({ item }) => <PerfumeCard perfume={item} />}
        renderSectionHeader={({ section }) => (
          <Text style={[styles.header, { color: t.text }]}>
            {section.title} ({section.data.length})
          </Text>
        )}
        contentContainerStyle={styles.list}
        stickySectionHeadersEnabled={false}
        ListEmptyComponent={
          <Text style={[styles.empty, { color: t.textSecondary }]}>
            مجموعتك فاضية. افتح أي عطر من «استكشف» وأضفه لمجموعتك أو لقائمة أمنياتك.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  list: { padding: Spacing.md, gap: Spacing.sm },
  header: { fontSize: 18, fontWeight: '700', marginTop: Spacing.sm },
  empty: { textAlign: 'center', marginTop: Spacing.xl, lineHeight: 24 },
});

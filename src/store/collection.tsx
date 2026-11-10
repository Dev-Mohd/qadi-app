import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type Shelf = 'owned' | 'wishlist';
export type Entry = { shelf?: Shelf; rating?: number };
type State = Record<string, Entry>;

type Store = {
  entries: State;
  setShelf: (id: string, shelf: Shelf | undefined) => void;
  setRating: (id: string, rating: number | undefined) => void;
};

const KEY = 'collection:v1';
const Ctx = createContext<Store | null>(null);

export function CollectionProvider({ children }: { children: ReactNode }) {
  const [entries, setEntries] = useState<State>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((raw) => raw && setEntries(JSON.parse(raw)))
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    // Don't write until the saved state is read, or we'd overwrite it with {}.
    if (loaded) AsyncStorage.setItem(KEY, JSON.stringify(entries)).catch(() => {});
  }, [entries, loaded]);

  const patch = useCallback((id: string, change: Entry) => {
    setEntries((prev) => {
      const next = { ...prev[id], ...change };
      const rest = { ...prev };
      if (next.shelf === undefined && next.rating === undefined) delete rest[id];
      else rest[id] = next;
      return rest;
    });
  }, []);

  const store = useMemo<Store>(
    () => ({
      entries,
      setShelf: (id, shelf) => patch(id, { shelf }),
      setRating: (id, rating) => patch(id, { rating }),
    }),
    [entries, patch],
  );

  return <Ctx value={store}>{children}</Ctx>;
}

export function useCollection() {
  const store = use(Ctx);
  if (!store) throw new Error('useCollection must be used inside CollectionProvider');
  return store;
}

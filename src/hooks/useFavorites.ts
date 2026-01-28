import { useEffect, useState } from 'react';
import { getFavorites, saveFavorites } from '../utils/storage';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  function toggleFavorite(name: string) {
    setFavorites((prev) => {
      const updated = prev.includes(name)
        ? prev.filter((n) => n !== name)
        : [...prev, name];

      saveFavorites(updated);
      return updated;
    });
  }

  function isFavorite(name: string) {
    return favorites.includes(name);
  }

  return { favorites, toggleFavorite, isFavorite };
}

const KEY = 'favorite-pokemon';

export function getFavorites(): string[] {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveFavorites(favs: string[]) {
  localStorage.setItem(KEY, JSON.stringify(favs));
}

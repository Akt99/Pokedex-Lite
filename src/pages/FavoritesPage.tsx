import { useFavorites } from '../hooks/useFavorites';

export default function FavouritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="container">
      <h2>⭐ Favorites</h2>

      {favorites.length === 0 && <p>No favorites yet.</p>}

      <ul>
        {favorites.map((name) => (
          <li key={name} style={{ textTransform: 'capitalize' }}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

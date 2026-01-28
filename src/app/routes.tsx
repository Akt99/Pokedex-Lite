import { createBrowserRouter, Outlet } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import FavouritesPage from '../pages/FavoritesPage';
import PokemonDetailPage from '../pages/PokemonDetailPage';

function RootLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'favorites', element: <FavouritesPage /> },
      { path: 'pokemon/:name', element: <PokemonDetailPage /> },
    ],
  },
]);

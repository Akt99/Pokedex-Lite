import {useNavigate} from 'react-router-dom';
import {useFavorites} from '../../hooks/useFavorites';
import FavoriteButton from './FavoriteButton';
type Props = {
  name: string;
  url: string;
};

function getIdFromUrl(url: string) {
  const parts = url.split('/').filter(Boolean);
  return parts[parts.length - 1];
}

export default function PokemonCard({ name, url }: Props) {
  const {toggleFavorite, isFavorite} = useFavorites();
  const navigate = useNavigate();
  const id = getIdFromUrl(url);
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <div
  className="pokemon-card"
  onClick={() => navigate(`/pokemon/${name}`)}
  style={{ cursor: 'pointer', position: 'relative' }}
>
  <FavoriteButton
    active={isFavorite(name)}
    onClick={() => toggleFavorite(name)}
  />

  <img src={image} alt={name} />
  <p>{name}</p>
</div>
  );
}

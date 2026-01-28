import { useParams, useNavigate } from 'react-router-dom';
import { usePokemonDetail } from '../hooks/usePokemonDetail';

export default function PokemonDetailPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const { pokemon, loading, error } = usePokemonDetail(name!);

  if (loading) return <p>Loading…</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!pokemon) return null;

  return (
    <div className="container">
      <button onClick={() => navigate(-1)}>← Back</button>

      <h2 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h2>

      <img
        src={pokemon.image}
        alt={pokemon.name}
        width={150}
        height={150}
      />

      <h3>Stats</h3>
      <ul>
        {pokemon.stats.map((s) => (
          <li key={s.name}>
            {s.name}: {s.value}
          </li>
        ))}
      </ul>

      <h3>Abilities</h3>
      <ul>
        {pokemon.abilities.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </div>
  );
}

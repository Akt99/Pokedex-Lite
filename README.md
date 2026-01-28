# Pokédex Lite

Pokédex Lite is a modern, responsive web application built using React and TypeScript that allows users to explore Pokémon data fetched from the public PokéAPI.  
Users can browse Pokémon with pagination, search and filter them by type, mark favorites, and view detailed Pokémon information.

---





## Features

- Fetches Pokémon data from PokéAPI
- Paginated Pokémon listing
- Search Pokémon by name (debounced)
- Filter Pokémon by type
- Mark Pokémon as favorites
- Persist favorites using localStorage
- Dedicated Favorites page
- Pokémon detail view including:
  - Official artwork
  - Base stats
  - Abilities
- Global loading indicator
- Fully responsive UI (mobile, tablet, desktop)

---

## Tech Stack & Libraries

### Frontend
- **React 18** – Component-based UI with hooks
- **TypeScript** – Type safety and better developer experience
- **Vite** – Fast development server and optimized production builds

### Routing
- **react-router-dom** – Client-side routing for page navigation

### State & Utilities
- **Custom React Hooks**
  - `usePokemonList`
  - `usePokemonDetail`
  - `useFavorites`
  - `useDebounce`
- **localStorage** – Persist favorite Pokémon across sessions

### UI & Styling
- **CSS (Global styles)** – Lightweight styling without external frameworks
- **Lucide React** – Icon set for UI elements
- **JetBrains Mono** – Monospace font for a niche, developer-centric look

### API
- **PokéAPI** – Public REST API for Pokémon data

---

## Installation & Running Locally

### 1. Clone the repository
```bash
git clone https://github.com/Akt99/Pokedex-Lite.git
cd Pokedex-Lite

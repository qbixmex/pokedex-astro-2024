export interface PokemonList {
  count: number;
  next: string;
  previous: Result[] | null,
  results: Result[];
}

interface Result {
  name: string;
  url: string;
}

export interface FavoritePokemon {
  id: number | string;
  name: string;
}
import type { PokemonList } from "../types/pokemon";
import pokemonList from "../data/pokemon-list.json";

export const getPokemonList = async (): Promise<PokemonList> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(pokemonList);
    }, 500);
  });
};

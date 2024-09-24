import type { PokemonList } from "../types/pokemon";
import pokemonList from "../data/pokemon-list.json";
import pokemons151 from "../data/151-pokemons.json";

export const getPokemonList = async (): Promise<PokemonList> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(pokemonList);
    }, 500);
  });
};

export const get151Pokemons = async (): Promise<PokemonList> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(pokemons151);
    }, 500);
  });
};

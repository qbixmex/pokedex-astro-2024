import { createSignal, For, type Component } from "solid-js";
import type { FavoritePokemon } from "@interfaces/pokemon";
import styles from "./FavoritePokemons.module.css";
import FavoritePokemonCard from "./FavoritePokemon";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
  return JSON.parse(localStorage.getItem("favorite-pokemons") ?? "[]");
};

const FavoritePokemons: Component = () => {
  const [ pokemons ] = createSignal(getLocalStoragePokemons());

  return (
    <div class={styles.mainWrapper}>
      <For each={pokemons()}>
        { (pokemon) => <FavoritePokemonCard pokemon={pokemon} /> }
      </For>
    </div>
  );
};

export default FavoritePokemons;
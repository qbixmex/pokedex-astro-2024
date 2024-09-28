import { createSignal, Show, type Component } from "solid-js";
import type { FavoritePokemon } from "@interfaces/pokemon";
import styles from "./FavoritePokemon.module.css";

type Props = {
  pokemon: FavoritePokemon;
};

const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
  const pokemonId = (pokemon.id as number).toString();
  const [ isVisible, setIsVisible ] = createSignal<Boolean>(true);
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const handleDelete = () => {
    const favoritePokemons: FavoritePokemon[] = JSON.parse(
      localStorage.getItem("favorite-pokemons") ?? "[]"
    );

    const newFavorites = favoritePokemons.filter(p => p.id !== pokemon.id);

    localStorage.setItem("favorite-pokemons", JSON.stringify(newFavorites));

    setIsVisible(false);
  };

  return (
    <Show when={isVisible()}>
      <div class={styles.card}>
        <a href={`/pokemons/${pokemon.name}`}>
          <img
            src={imageSrc}
            class={styles.cardImage} alt={`${pokemon.name} pokemon`}
            style={{ "view-transition-name": `${pokemon.name}-pokemon` }}
          />

          <h3 class={styles.cardHeading}>
            #{pokemon.id} - {pokemon.name}
          </h3>
        </a>

        <button
          class={styles.cardRemoveBtn}
          onClick={handleDelete}
        >
          <svg width="0.93em" height="1em" viewBox="0 0 1216 1312"><path fill="currentColor" d="M1202 1066q0 40-28 68l-136 136q-28 28-68 28t-68-28L608 976l-294 294q-28 28-68 28t-68-28L42 1134q-28-28-28-68t28-68l294-294L42 410q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294l294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68L880 704l294 294q28 28 28 68"/></svg>
        </button>
      </div>
    </Show>
  );
};

export default FavoritePokemonCard;

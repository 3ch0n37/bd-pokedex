import {State} from "../types/state";

export async function commandCatch(state: State, pokemonName: string) {
    console.log(`Throwing a Pokeball at ${pokemonName}...`);
    const pokemon = await state.pokeApi.fetchPokemon(pokemonName);

    const res = Math.floor(Math.random() * pokemon.base_experience);
    if (res > 40) {
        console.log(`${pokemon.name} escaped!`);
        return;
    }

    console.log(`${pokemon.name} was caught!`);
    state.caughtPokemon[pokemon.name] = pokemon;
}

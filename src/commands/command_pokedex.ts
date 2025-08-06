import {State} from "../types/state";

export async function commandPokedex(state: State) {
    if (Object.keys(state.caughtPokemon).length === 0) {
        throw new Error("You have not caught any Pokemon.");
    }
    console.log("Your Pokedex:")
    for (const pokemon of Object.values(state.caughtPokemon)) {
        console.log(`\t - ${pokemon.name}`);
    }
}
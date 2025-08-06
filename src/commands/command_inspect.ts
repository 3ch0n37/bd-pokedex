import type {State} from "../types/state";

export async function commandInspect(state: State, pokemonName: string) {
    if (!(pokemonName in state.caughtPokemon)) {
        throw new Error("You have not caught that Pokemon.")
    }

    const pokemon = state.caughtPokemon[pokemonName];
    console.log(
        `Name: ${pokemon.name}\n` +
        `Height: ${pokemon.height}\n` +
        `Weight: ${pokemon.weight}\n` +
        `Stats:\n` +
        `${pokemon.stats.map(s => `\t - ${s.stat.name}: ${s.base_stat}`).join("\n")}\n` +
        `Types:\n` +
        `${pokemon.types.map(t => `\t - ${t.type.name}`).join("\n")}\n`
    )
}
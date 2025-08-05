import {State} from "../types/state";

export async function commandExplore(state: State, locationName: string) {
    const location = await state.pokeapi.fetchLocation(locationName);
    console.log(`Exploring ${location.name}`);
    if(location.pokemon_encounters.length > 0) {
        console.log("Found Pokemon:")
        for (const encounter of location.pokemon_encounters) {
            console.log(' - ', encounter.pokemon.name)
        }
    } else {
        console.log("No Pokemon found")
    }
    console.log()
}
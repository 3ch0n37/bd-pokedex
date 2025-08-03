import type {State} from "src/types/state.js";
import type { Location } from "src/types/pokeapi";

function printLocations(locations: Location[]) {
    const output = locations.map(location => location.name).join('\n');
    console.log(output + "\n");
}

export async function commandMap(state: State): Promise<void> {
    const locations = await state.pokeapi.fetchLocations(state.nextURL);
    state.nextURL = locations.next;
    state.prevURL = locations.previous;
    printLocations(locations.results);
}

export async function commandMapb(state: State): Promise<void> {
    if (!state.prevURL) {
        console.log("You are on the first page");
        return;
    }
    const locations = await state.pokeapi.fetchLocations(state.prevURL);
    state.nextURL = locations.next;
    state.prevURL = locations.previous;
    printLocations(locations.results);
}
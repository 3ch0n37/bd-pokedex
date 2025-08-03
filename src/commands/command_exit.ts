import * as process from "node:process";
import type { State } from "src/types/state.js";

export function commandExit(commands: State) {
    console.log("Closing the Pokedex... Goodbye!");
    process.exit(0);
}

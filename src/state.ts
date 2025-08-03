import { createInterface, type Interface} from "readline";
import {getCommands} from "./commands/index.js";
import { PokeAPI } from "./pokeapi.js";
import { pageSize } from "./config.js";

export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    return {
        readline: rl,
        commands: getCommands(),
        pokeapi: new PokeAPI(),
        offset: 0,
        pageSize: pageSize,
    }
}
import {createInterface} from "readline";
import {getCommands} from "./commands/index.js";
import {pageSize} from "./config.js";
import {Cache} from "./pokecache.js";
import {PokeAPI} from "./pokeapi.js";

export function initState(cache: Cache) {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    return {
        readline: rl,
        commands: getCommands(),
        pokeApi: new PokeAPI(cache),
        offset: 0,
        pageSize: pageSize,
        caughtPokemon: {},
    };
}

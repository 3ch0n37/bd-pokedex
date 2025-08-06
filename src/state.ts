import {createInterface} from "readline";
import {getCommands} from "./commands/index";
import {pageSize} from "./config";
import {Cache} from "./pokecache";
import {PokeAPI} from "./pokeapi";

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

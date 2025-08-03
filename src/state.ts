import { createInterface, type Interface} from "readline";
import {getCommands} from "./commands/registry.js";

export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    return {
        readline: rl,
        commands: getCommands()
    }
}
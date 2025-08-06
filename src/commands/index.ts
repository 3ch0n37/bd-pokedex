import {CLICommand} from "../types/command";
import {commandExit} from "./command_exit";
import {commandHelp} from "./command_help";
import {commandMapForward, commandMapBack} from "./command_map";
import {commandExplore} from "./command_explore";
import {commandCatch} from "./command_catch";
import {commandInspect} from "./command_inspect";
import {commandPokedex} from "./command_pokedex";

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Fetches a list of locations - next page",
            callback: commandMapForward,
        },
        mapb: {
            name: "mapb",
            description: "Fetches a list of locations - previous page",
            callback: commandMapBack,
        },
        explore: {
            name: "explore",
            description: "Lists all Pokemon that can be found in a location",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Throws a ball at a Pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Inspects a caught Pokemon",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Lists all caught Pokemon",
            callback: commandPokedex,
        },
    };
}

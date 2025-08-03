import {CLICommand} from "../types/command";
import {commandExit} from "./command_exit.js";
import {commandHelp} from "./command_help.js";
import { commandMap, commandMapb } from "./command_map.js";


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
            callback: commandMap
        },
        mapb: {
            name: "mapb",
            description: "Fetches a list of locations - previous page",
            callback: commandMapb
        }
    }
}
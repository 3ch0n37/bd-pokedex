import type {CLICommand} from "../types/command.js";

export function commandHelp(commands: Record<string, CLICommand>) {
    console.log(
        'Welcome to the Pokedex!\n',
        'Usage:\n\n'
    )

    for (const command of Object.values(commands)) {
        console.log(`${command.name}: ${command.description}`);
    }
}
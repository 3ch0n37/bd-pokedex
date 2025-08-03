import * as readline from "node:readline";
import * as process from "node:process";
import {getCommands} from "./commands/registry.js";

export function cleanInput(input: string): string[] {
    const result: Array<string> = [];
    const split = input.trim().toLowerCase().split(" ");
    split.forEach(part => {
        if (part.length) {
            result.push(part.trim());
        }
    });
    return result;
}

export function startREPL() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    rl.prompt();
    rl.on("line", (input) => {
        const words = cleanInput(input);
        if (!words.length) {
            rl.prompt();
            return;
        }

        const commandName = words[0];
        const commands = getCommands();

        if (commandName in commands) {
            const cmd = commands[commandName];

            try {
                cmd.callback(commands);
            } catch (e) {
                console.log(e);
            }
        } else {
            console.log(`Unknown command: "${commandName}". Type "help" for a list of commands.`);
        }

        rl.prompt();
    })
}

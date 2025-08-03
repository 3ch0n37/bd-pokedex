import * as readline from "node:readline";
import * as process from "node:process";

export function cleanInput(input: string): string[] {
    const result: Array<string> = [];
    const split = input.trim().toLowerCase().split(" ");
    split.forEach(part => {
        if(part.length) {
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
        if (words.length) {
            const commandName = words[0];
            console.log(`Your command was: ${commandName}`);
        }
        rl.prompt();
    })
}

import type { State } from "src/types/state";

export function commandHelp(state: State) {
    console.log(
        'Welcome to the Pokedex!\n',
        'Usage:\n\n'
    )

    for (const command of Object.values(state.commands)) {
        console.log(`${command.name}: ${command.description}`);
    }
}
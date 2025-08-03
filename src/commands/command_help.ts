import type { State } from "src/types/state";

export async function commandHelp(state: State): Promise<void> {
    console.log(
        'Welcome to the Pokedex!\n',
        'Usage:\n\n'
    )

    for (const command of Object.values(state.commands)) {
        console.log(`${command.name}: ${command.description}`);
    }
}
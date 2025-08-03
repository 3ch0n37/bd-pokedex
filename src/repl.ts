import { State } from "./types/state";

export function cleanInput(input: string): string[] {
  const result: Array<string> = [];
  const split = input.trim().toLowerCase().split(" ");
  split.forEach((part) => {
    if (part.length) {
      result.push(part.trim());
    }
  });
  return result;
}

export async function startREPL(state: State) {
  state.readline.prompt();
  state.readline.on("line", async (input) => {
    const words = cleanInput(input);
    if (!words.length) {
      state.readline.prompt();
      return;
    }

    const commandName = words[0];

    if (commandName in state.commands) {
      const cmd = state.commands[commandName];

      try {
        await cmd.callback(state);
      } catch (e) {
        console.log((e as Error).message);
      }
    } else {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`
      );
    }

    state.readline.prompt();
  });
}

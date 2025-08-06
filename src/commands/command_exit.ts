import * as process from "node:process";
import type { State } from "src/types/state";

export async function commandExit(commands: State): Promise<void> {
  console.log("Closing the Pokedex... Goodbye!");
  process.exit(0);
}

import type { Interface } from "readline";
import type { CLICommand } from "./command.js";
import type { PokeAPI } from "src/pokeapi.js";

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeapi: PokeAPI;
  offset: number;
  pageSize: number;
  nextURL?: string | null;
  prevURL?: string | null;
};

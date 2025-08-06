import type { Interface } from "readline";
import type { CLICommand } from "./command";
import type { PokeAPI } from "src/pokeapi";
import type {Pokemon} from "./pokemon";

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeApi: PokeAPI;
  offset: number;
  pageSize: number;
  nextURL?: string | null;
  prevURL?: string | null;
  caughtPokemon: Record<string, Pokemon>
};

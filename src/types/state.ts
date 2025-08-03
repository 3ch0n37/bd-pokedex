import {Interface} from "readline";
import {CLICommand} from "./command.js";

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
};
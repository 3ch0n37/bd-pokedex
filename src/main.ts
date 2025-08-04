import {startREPL} from "./repl.js";
import {initState} from "./state.js";
import {cacheInterval} from "./config.js";
import {Cache} from "./pokecache.js";

async function main() {
    const cache = new Cache(cacheInterval);
    const state = initState(cache);
    await startREPL(state);
}

main();

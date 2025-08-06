import {startREPL} from "./repl";
import {initState} from "./state";
import {cacheInterval} from "./config";
import {Cache} from "./pokecache";

async function main() {
    const cache = new Cache(cacheInterval);
    const state = initState(cache);
    await startREPL(state);
}

main();

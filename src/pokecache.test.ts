import {Cache} from "./pokecache";
import {expect, test} from "vitest";

test.concurrent.each([
    {
        key: "https://example.com",
        val: "testdata",
        interval: 500, // 1/2 second
    },
    {
        key: "https://example.com/path",
        val: "moretestdata",
        interval: 1000, // 1 second
    },
])("Test Caching $interval ms", async ({key, val, interval}) => {
    const cache = new Cache(interval);

    cache.add<string>(key, val);
    const cached = cache.get<string>(key);
    expect(cached).toBe(val);

    await new Promise((resolve) => setTimeout(resolve, interval * 2));
    const reaped = cache.get<string>(key);
    expect(reaped).toBe(undefined);

    cache.stopReapLoop();
});
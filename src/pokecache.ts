export type CacheEntry<T> = {
    val: T;
    createdAt: number;
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalID: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(delay: number) {
        this.#interval = delay;
        this.#startReapLoop();
    }

    add<T>(key: string, value: T) {
        this.#cache.set(key, {
            val: value,
            createdAt: Date.now(),
        });
    }

    get<T>(key: string): T | undefined {
        const entry = this.#cache.get(key);
        if (!entry) {
            return undefined;
        }
        return entry.val
    }

    #startReapLoop(): void {
        this.#reapIntervalID = setInterval(() => {
            this.#reap();
        }, this.#interval);
    }

    #reap() {
        const now = Date.now();
        for (const [key, entry] of this.#cache) {
            if (now - entry.createdAt > this.#interval) {
                this.#cache.delete(key);
            }
        }
    }


    stopReapLoop(): void {
        if (this.#reapIntervalID) {
            clearInterval(this.#reapIntervalID);
            this.#reapIntervalID = undefined;
        }
    }
}
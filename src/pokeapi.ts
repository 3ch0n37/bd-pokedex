import type {ShallowLocations, Location} from "./types/pokeapi.js";
import {Cache} from "./pokecache";
import {Pokemon} from "./types/pokemon";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private cache: Cache;

    constructor(cache: Cache) {
        this.cache = cache;
    }

    async fetchLocations(pageURL?: string | null): Promise<ShallowLocations> {
        const base = `${PokeAPI.baseURL}/location-area`;
        const url = pageURL ?? base;
        const entry = this.cache.get<ShallowLocations>(url);
        if (entry) {
            return entry;
        }
        const res = await fetch(pageURL ?? base, {
            method: "GET",
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch locations: ${res.statusText}`);
        }
        const data = await res.json() as ShallowLocations;
        this.cache.add<ShallowLocations>(url, data);
        return data;
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const url = `${PokeAPI.baseURL}/location-area/${locationName}`
        const entry = this.cache.get<Location>(url);
        if (entry) {
            return entry;
        }
        const res = await fetch(
            url,
            {
                method: "GET",
            }
        );
        if (!res.ok) {
            throw new Error(`Failed to fetch location: ${res.statusText}`);
        }
        const data = await res.json() as Location;
        this.cache.add<Location>(locationName, data);
        return data;
    }

    async fetchPokemon(pokemonName: string): Promise<Pokemon> {
        const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
        const entry = this.cache.get<Pokemon>(url);
        if (entry) {
            return entry;
        }
        const res = await fetch(url, {
            method: "GET",
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch pokemon: ${res.statusText}`);
        }
        const data = await res.json() as Pokemon;
        this.cache.add<Pokemon>(url, data);
        return data;
    }
}

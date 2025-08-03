import type { ShallowLocations, Location } from "./types/pokeapi.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string | null): Promise<ShallowLocations> {
    const base = `${PokeAPI.baseURL}/location-area`;
    const res = await fetch(pageURL ?? base, {
        method: 'GET'
    });
    return res.json();
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const res = await fetch(`${PokeAPI.baseURL}/location-area/${locationName}`, {
        method: 'GET'
    });
    return res.json();
  }
}

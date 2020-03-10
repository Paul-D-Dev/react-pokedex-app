import Pokemon from "../models/pokemon";
 
export default class PokemonService {
 
  static async getPokemons(): Promise<Pokemon[]> {
    const response = await fetch('http://localhost:3001/pokemons');
      return await response.json();
  }
 
  static async getPokemon(id: number): Promise<Pokemon|null> {
    const response = await fetch(`http://localhost:3001/pokemons/${id}`);
      const data = await response.json();
      return this.isEmpty(data) ? null : data;
  }
 
  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }
}
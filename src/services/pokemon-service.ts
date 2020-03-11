import Pokemon from "../models/pokemon";
import POKEMONS from "../models/mock-pokemon";
  
export default class PokemonService {
  
  static pokemons:Pokemon[] = POKEMONS;
  
  static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
  
  static async getPokemons(): Promise<Pokemon[]> {
    if(this.isDev) {
      try {
            const response = await fetch('http://localhost:3001/pokemons');
            return await response.json();
        }
        catch (error) {
            return this.handleError(error);
        }
    }
  
    return new Promise(resolve => {
      resolve(this.pokemons);
    });
  }
  
  static async getPokemon(id: number): Promise<Pokemon|null> {
    if(this.isDev) {
      try {
            const response = await fetch(`http://localhost:3001/pokemons/${id}`);
            const data = await response.json();
            return this.isEmpty(data) ? null : data;
        }
        catch (error) {
            return this.handleError(error);
        }
    }
  
    return new Promise(resolve => {    
      resolve(this.pokemons.find(pokemon => id === pokemon.id));
    }); 
  }
  
  static async updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
    if(this.isDev) {
      try {
            const response = await fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
                method: 'PUT',
                body: JSON.stringify(pokemon),
                headers: { 'Content-Type': 'application/json' }
            });
            return await response.json();
        }
        catch (error) {
            return this.handleError(error);
        }
    }
  
    return new Promise(resolve => {
      const { id } = pokemon;
      const index = this.pokemons.findIndex(pokemon => pokemon.id === id);
      this.pokemons[index] = pokemon;
      resolve(pokemon);
    }); 
  }
  
  static async deletePokemon(pokemon: Pokemon): Promise<{}> {
    if(this.isDev) {
      try {
            const response = await fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });
            return await response.json();
        }
        catch (error) {
            return this.handleError(error);
        }
    }
  
    return new Promise(resolve => {    
      const { id } = pokemon;
      this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== id);
      resolve({});
    }); 
  }
  
  static async addPokemon(pokemon: Pokemon): Promise<Pokemon> {
    pokemon.created = new Date(pokemon.created);
  
    if(this.isDev) {
      try {
            const response = await fetch(`http://localhost:3001/pokemons`, {
                method: 'POST',
                body: JSON.stringify(pokemon),
                headers: { 'Content-Type': 'application/json' }
            });
            return await response.json();
        }
        catch (error) {
            return this.handleError(error);
        }
    }
  
    return new Promise(resolve => {    
      this.pokemons.push(pokemon);
      resolve(pokemon);
    }); 
  }
  
  static async searchPokemon(term: string): Promise<Pokemon[]> {
    if(this.isDev) {
      try {
            const response = await fetch(`http://localhost:3001/pokemons?q=${term}`);
            return await response.json();
        }
        catch (error) {
            return this.handleError(error);
        }
    }
  
    return new Promise(resolve => {    
      const results = this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(term));
      resolve(results);
    });
  
  }
  
  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }
  
  static handleError(error: Error): any {
    console.error(error);
  }
}
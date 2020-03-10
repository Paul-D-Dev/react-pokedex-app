import Pokemon from "../models/pokemon";
 
export default class PokemonService {
 
    static async getPokemons(): Promise<Pokemon[]> {
        try {
            const response = await fetch('http://localhost:3001/pokemons');
            return await response.json();
        }
        catch (error) {
            return this.handleError(error);
        }
      }
 
  static async getPokemon(id: number): Promise<Pokemon|null> {
      try {
          const response = await fetch(`http://localhost:3001/pokemons/${id}`);
            const data = await response.json();
            return this.isEmpty(data) ? null : data;
      } catch (error) {
          return this.handleError(error);
      }
  }

  static async updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
      try {
          const response = await fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
              method: 'PUT',
              body: JSON.stringify(pokemon),
              headers: { 'Content-Type': 'application/json' } // l'application sait qu'on envoie du json
            });
            return await response.json();
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    
    // Promise an empty object
    static deletePokemont(pokemon: Pokemon): Promise<{}> {
        return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' } // l'application sait qu'on envoie du json
        })
        .then(response => response.json())
        .catch(error => this.handleError(error))

    }
  
  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  static handleError(error: Error): any {
      console.error(error);
  }
}
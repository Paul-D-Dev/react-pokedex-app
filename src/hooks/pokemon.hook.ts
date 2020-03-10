import { useEffect, useState } from 'react';
import Pokemon from '../models/pokemon';
import PokemonService  from "../services/pokemon-service";

// This personalize hook return 

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
        PokemonService.getPokemons().then(pokemons => setPokemons(pokemons))
    }, [])

    return pokemons
}

export default usePokemons;
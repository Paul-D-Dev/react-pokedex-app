import { useEffect, useState } from 'react';
import Pokemon from '../models/pokemon';

// This personalize hook return 

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
        fetch('http://localhost:3001/pokemons') // = route get api URL
        .then(response => response.json()) // on récupère l'objet response et seulement les données des pokemons grâce à .json()
        // On récupère les data des Pokémons et on les set dans le state setPokemon
        .then((pokemons => {
            setPokemons(pokemons);
        }))
    }, [])

    return pokemons
}

export default usePokemons;
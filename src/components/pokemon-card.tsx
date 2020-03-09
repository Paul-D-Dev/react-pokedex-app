import React from "react";
import Pokemon from "../models/pokemon";

type Props = {
    pokemon: Pokemon
}

const PokemonCard = ({pokemon}) => {
    
    
    return (
        <div>
            Ce composant s'occupe d'affichier le pokémon = {pokemon.name}
        </div>
    )
}

export default PokemonCard;
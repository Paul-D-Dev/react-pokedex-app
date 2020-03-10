import React, { FunctionComponent, useState } from "react";
import Pokemon from "../models/pokemon";
import PokemonForm from"../components/pokemon-form";

const PokemonCreate: FunctionComponent = () => {
    const [id] = useState<number>(new Date().getTime()); // generate a unique id because of date in millisecondes
    const [pokemon] = useState<Pokemon>(new Pokemon(id));

    return (
        <div className="row">
            <h2>Ajouter un Pokémon</h2>
            <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>
        </div>
    )
    
}

export default PokemonCreate
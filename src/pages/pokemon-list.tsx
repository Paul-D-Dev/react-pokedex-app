import React, { FunctionComponent } from 'react';
import PokemonCard from '../components/pokemon-card';
import usePokemons from '../hooks/pokemon.hook';
import { Link } from "react-router-dom"

  
const PokemonList: FunctionComponent = () => {
  const pokemons = usePokemons();
  
  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container"> 
        <div className="row"> 
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
        </div>
      </div>
      <Link className="btn-floating btn-large waves-effect waves-light red z-depth-3"
            style={{position: 'fixed', bottom: '25px', right: '25px'}}
            to="/pokemon/create"
      >
      <i className="material-icons">add</i>
      </Link>
    </div> 
  );
}
  
export default PokemonList;
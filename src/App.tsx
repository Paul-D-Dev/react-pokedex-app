import React, { useState, useEffect } from 'react';
import Pokemon from "./models/pokemon";
import POKEMONS from "./models/mock-pokemon";
function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    setPokemons(POKEMONS)
  }, []);

  const showPokemonsCount = () => {
    console.log(pokemons.length);
  };

  return (
    <div>
    <h1>Pokedex</h1>
    <p>Il y a {pokemons.length} dans mon Pokedex.</p> 
    <p onClick={showPokemonsCount}>Afficher le nombre de Pokémons dans la console.</p>
    </div>
  );
}

export default App;

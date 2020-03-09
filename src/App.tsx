import React, { useState } from 'react';
import Pokemon from "./models/pokemon";
import POKEMONS from "./models/mock-pokemon";
function App() {
  const [pokemons] = useState<Pokemon[]>(POKEMONS);
  return (
    <div>
    <h1>Pokedex</h1>
    <p>Il y a {pokemons.length} dans mon Pokedex.</p> 
    </div>
  );
}

export default App;

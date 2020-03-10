import React from 'react';
import PokemonList from "./pages/pokemon-list";
import PokemonsDetail from "./pages/pokemon-detail"
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div>
          {/* Barre de navigation à toutes les pages */}
          <nav>
            <div className="nav-wrapper teal">
              <Link to="/" className="brand-logo center">Pokédex</Link>
            </div>
          </nav>

          {/* Le système de gestion de toutes nos routes */}
          {/* Switch permet d'afficher le contenu de la route une seule fois */}
          <Switch> 
            <Route exact path="/" component={PokemonList}></Route>
            <Route exact path="/pokemons" component={PokemonList}></Route>
            <Route path="/pokemons/:id" component={PokemonsDetail}></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;

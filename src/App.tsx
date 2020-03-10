import React from 'react';
import PokemonList from "./pages/pokemon-list";
import PokemonsDetail from "./pages/pokemon-detail"
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import PageNotFound from "./pages/page-not-found";

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
          {/* React lit les routes de haut en bas, il faut donc mettre la page not found en dernier */}
          <Switch> 
            <Route exact path="/" component={PokemonList}></Route>
            <Route exact path="/pokemons" component={PokemonList}></Route>
            <Route path="/pokemons/:id" component={PokemonsDetail}></Route>
            <Route component={PageNotFound}></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;

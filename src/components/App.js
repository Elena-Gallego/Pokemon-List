import React from "react";
import pokejson from "../components/data/pokemons.json";
import Pokemonlist from "./Pokemonlist";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: pokejson };
  }
  render() {
    return (
      
      <div className="app">
        <Pokemonlist pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;

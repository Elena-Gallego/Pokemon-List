import React from "react";
import PropTypes from "prop-types";
import Itempokemon from "./Itempokemon";
import "../stylesheets/Pokemonlist.scss";

class Pokemonlist extends React.Component {
  render() {
    const pokemon = this.props.pokemon;

    const pokemonItem = pokemon.map((element) => {
      return (
        <li key={element.id}>
          <Itempokemon
            name={element.name}
            url={element.url}
            types={element.types}
            id={element.id}
          />
        </li>
      );
    });
    return <ul className="pokemonList">{pokemonItem} </ul>;
  }
}

export default Pokemonlist;
Pokemonlist.propTypes = {
  pokemon: PropTypes.array,
};

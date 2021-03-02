import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Itempokemon.scss";

class Itempokemon extends React.Component {
  render() {
    const types = this.props.types;
    const poketypes = types.map((type, index) => {
      return (
        <div className="type-etiqueta" key={index}>
          {type.toUpperCase()}
        </div>
      );
    });
    return (
      <div className="itempokemon" id={this.props.id}>
        <img
          className="poke-photo"
          src={this.props.url}
          alt={this.props.name}
        />
        <h2 className="name">{this.props.name}</h2>
        <ul className="tags-list">{poketypes}</ul>
      </div>
    );
  }
}

export default Itempokemon;
Itempokemon.propTypes = {
  types: PropTypes.array,
  id: PropTypes.number,
  name: PropTypes.string,
};

import React, { Component } from 'react';
import styles from './Pokedex.module.css';

export default class Pokedex extends Component {
  render() {
    const { updateParent } = this.props;
    return (
      <div className={styles.pokeContainer}>
        <h3>POKEDEX</h3>
        <div className={styles.pokeList}>
          {this.props.pokemons.map((pokemon) => (
            <p
              onClick={() =>
                updateParent({
                  pokemon: [
                    pokemon.name,
                    pokemon.id,
                    pokemon.type,
                    pokemon.base,
                  ],
                })
              }
              className={styles.pokeOption}
              key={pokemon.id}
            >
              {pokemon.name}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

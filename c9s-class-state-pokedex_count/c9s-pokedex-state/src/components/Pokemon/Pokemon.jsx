import React from 'react';
import styles from './Pokemon.module.css';

export default class Pokemon extends React.Component {
  render() {
    const { getTypes, getPokemon, pokemon } = this.props;
    // console.log('pokeHijo', pokemon[3]);
    return (
      <div className={styles.cardContainer}>
        <img
          id={styles['pokemonImg']}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPokemon()}.png`}
          alt={pokemon[0]}
        />
        <div className={styles.pokemonStats}>
          <p className={styles.hp}>HP: {pokemon[3].HP}</p>
          <p className={styles.atk}>Atk: {pokemon[3].Attack}</p>
          <p className={styles.def}>Def: {pokemon[3].Defense}</p>
          <p className={styles.spAtk}>Sp.Atk: {pokemon[3]['Sp. Attack']}</p>
          <p className={styles.spDef}>Sp.Def: {pokemon[3]['Sp. Defense']}</p>
          <p className={styles.speed}>Speed: {pokemon[3].Speed}</p>
        </div>
        <p id={styles['name']}>{`${
          pokemon[0]
        } is a pokemon type ${getTypes()}`}</p>
      </div>
    );
  }
}

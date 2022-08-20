import React, { Component } from 'react';
import './App.css';
import Pokedex from './components/Pokedex/Pokedex';
import pokedexJSON from './pokedex.json';
import Pokemon from './components/Pokemon/Pokemon';

// AREA DE TRABAJO --> Reemplazar por el JSON
const pokedex = pokedexJSON;

// AREA DE TRABAJO -----------------------------------

export default class App extends Component {
  // AREA DE TRABAJO --> Usar estructura de Class Component
  random = pokedex[Math.floor(Math.random() * pokedex.length)];

  state = {
    pokemons: pokedex,
    //pokemon: [pokedex[0].name, pokedex[0].id, pokedex[0].type],
    pokemon: [
      this.random.name,
      this.random.id,
      this.random.type,
      this.random.base,
    ],
  };
  // AREA DE TRABAJO -------------------------------------------

  update = (pokemon) => {
    // En esta funcion se deberia actualizar el pokemon visible
    // No olvidemos que si es funcion debemos bindearla... como podemos evitar usar el bind?
    this.setState((prevState) => {
      return {
        pokemon: pokemon.pokemon,
      };
    });
  };

  getPokemon = () => {
    if (this.state.pokemon[1]?.toString()?.length === 1)
      return `00${this.state.pokemon[1]}`;
    if (this.state.pokemon[1]?.toString()?.length === 2)
      return `0${this.state.pokemon[1]}`;
    if (this.state.pokemon[1]?.toString()?.length === 3)
      return `${this.state.pokemon[1]}`;
  };

  getTypes = () => {
    let phrase;
    if (this.state.pokemon[2].length === 1) return this.state.pokemon[2][0];
    if (this.state.pokemon[2].length > 1) {
      for (let index = 0; index < this.state.pokemon[2].length; index++) {
        if (index === 0) phrase = this.state.pokemon[2][index];
        if (index !== 0)
          phrase = `${phrase} and ${this.state.pokemon[2][index]}`;
      }
      return phrase;
    }
  };

  render() {
    /* AREA DE TRABAJO
    Pueden usar desestructuracion o directamente modificar las variables this.pokemon por this.state...
    */
    //console.log('poke', this.state.pokemon[3].HP);
    return (
      <div className="container">
        <Pokemon
          getPokemon={this.getPokemon}
          getTypes={this.getTypes}
          pokemon={this.state.pokemon}
        />
        <Pokedex updateParent={this.update} pokemons={this.state.pokemons} />
      </div>
    );
  }
}

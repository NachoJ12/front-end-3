import React from 'react';
import style from './Perro.module.css';

const Perro = (props) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Nombre: {props.nombre}</h2>
      <div className={style.description}>
        <img
          className={style.image}
          src={props.image}
          alt={`Imagen de ${props.raza}`}
        />
        <ul>
          <li>Edad: {props.edad}</li>
          <li>Sexo: {props.sexo}</li>
          <li>Raza: {props.raza}</li>
          <li>Tamaño: {props.tamanio}</li>
        </ul>
      </div>
    </div>
  );
};

export default Perro;

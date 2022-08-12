import React from 'react';
import Perro from '../Perro/Perro';
import style from './Veterinaria.module.css';

const Veterinaria = () => {
  return (
    <div>
      <h1>Clientes caninos de Veterinaria</h1>
      <div className={style.dogsContainer}>
        <Perro
          nombre="Firulais"
          edad="11"
          sexo="Macho"
          raza="Pastor Alemán"
          tamanio="Grande"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pastor_aleman_down.JPG/320px-Pastor_aleman_down.JPG"
        />
        <Perro
          nombre="Maya"
          edad="13"
          sexo="Hembra"
          raza="Pug"
          tamanio="Chico"
          image="https://th.bing.com/th/id/R.50401f8eea8fe07778e3e35bd7c4a749?rik=b9HzqkhUDmFyqA&pid=ImgRaw&r=0"
        />
        <Perro
          nombre="Pipo"
          edad="5"
          sexo="Macho"
          raza="Schnauzer"
          tamanio="Mediano"
          image="https://th.bing.com/th/id/OIP.dxREXpcaGU_XSKiGUdJoFAAAAA?pid=ImgDet&rs=1"
        />
        <Perro
          nombre="Pacha"
          edad="2"
          sexo="Hembra"
          raza="Pastor Velga"
          tamanio="Grande"
          image="https://wikifaunia.com/wp-content/uploads/2012/12/pastor-belga.jpg"
        />
      </div>
    </div>
  );
};

export default Veterinaria;

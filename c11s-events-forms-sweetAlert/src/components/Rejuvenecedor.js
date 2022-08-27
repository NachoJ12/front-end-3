import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styles from './Rejuvenecedor.module.css';

const Rejuvenecedor = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    const nombre = event.target.nombre.value;
    const edad = event.target.edad.value;

    if (nombre.length < 1) {
      Swal.fire('Error', 'Debe tener al menos 1 caracter', 'error');
    }
    if (edad < 1) {
      Swal.fire('Error', 'Debe ser un numero entero positivo', 'error');
      setEdad(undefined);
      //console.log(Number.isInteger(parseInt(edad)));
    }

    setNombre(nombre);

    const nuevaEdad = rejuvenecer(edad);
    setEdad(nuevaEdad);
    if (edad) {
      Swal.fire(
        `${nombre} ha sido rejuvenecido/a.`,
        `Antes tenía ${edad} años, ahora su edad es de ${nuevaEdad}.`,
        'success'
      );
    }
  };

  const rejuvenecer = (edad) => {
    let nuevaEdad = 0;
    if (edad >= 10) {
      nuevaEdad = edad - 10;
    } else {
      nuevaEdad = 0;
    }
    return nuevaEdad;
  };

  return (
    <div>
      <form onSubmit={onSubmit} className={styles.form}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          pattern="[a-zA-Z ]{2,254}"
          placeholder="Ingresa tu nombre"
        />

        <label htmlFor="edad">Edad:</label>
        <input
          type="number"
          name="edad"
          id="edad"
          min={1}
          max={150}
          placeholder="Ingresa tu edad"
        />

        <input type="submit" value="Submit" className={styles.btn} />
      </form>
      <div>
        {edad !== undefined && nombre !== '' ? (
          <p>
            {nombre} ha sido rejuvenecido/a 10 años, ahora su edad es de {edad}
          </p>
        ) : undefined}
      </div>
    </div>
  );
};

export default Rejuvenecedor;

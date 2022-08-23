import React from 'react';

function Form(props) {
  return (
    <form onSubmit={props.registro}>
      <p>
        Nombre: <input type="text" name="name" />
      </p>
      <p>
        Apellido: <input type="text" name="lastName" />
      </p>
      <input
        type="submit"
        value="Enviar"
        style={{
          background: '#76eaffe0',
          border: '1px solid black',
          padding: '6px 12px',
        }}
      />
    </form>
  );
}

export default Form;

import React from 'react';

function ListadoTurnos(props) {
  console.log(props.listTurnos);
  return (
    <div>
      <h2>Listado de Turnos</h2>
      <ul style={{ listStyle: 'none' }}>
        {props.listTurnos.map((element) => {
          return (
            <li key={element.id}>
              <span style={{ fontWeight: 'bold' }}>Turno: {element.id}</span> -
              Correspondiente al paciente {element.nombre} {element.apellido}{' '}
              agendado exitosamente
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListadoTurnos;

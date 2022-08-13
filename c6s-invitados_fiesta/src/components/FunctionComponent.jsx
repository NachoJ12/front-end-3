import React from 'react';

/* Con props desestructuradas */
const FunctionComponent = ({ nombre, tarea }) => {
  return (
    <li>
      {nombre} traerá {tarea}
    </li>
  );
};
export default FunctionComponent;

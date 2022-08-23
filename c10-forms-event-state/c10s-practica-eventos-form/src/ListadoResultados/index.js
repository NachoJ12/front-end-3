function ListadoResultados(props) {

  return (
    <ul>
      {props.resultados.map((elemento,index) =>
        <li key={index}>La suma de {elemento.valor1} y {elemento.valor2} da como resultado: {elemento.resultado}</li>
    )}
    </ul>
  );
}

export default ListadoResultados;
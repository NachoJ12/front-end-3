import '../styles/App.css';
import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';
import invitados from '../invitados.json';

function App() {
  return (
    <div className="App">
      <h3>Invitados:</h3>
      <ul
        style={{
          inlineSize: 'fit-content',
          margin: '0 auto',
          textAlign: 'left',
        }}
      >
        {invitados.map((invitado, index) => {
          return <ClassComponent {...invitado} key={index + invitado.nombre} />;
        })}
      </ul>

      <h3>Tareas: </h3>
      <ul
        style={{
          inlineSize: 'fit-content',
          margin: '0 auto',
          textAlign: 'left',
        }}
      >
        {invitados.map((invitado, index) => {
          return (
            <FunctionComponent {...invitado} key={index + invitado.nombre} />
          );
        })}
      </ul>
    </div>
  );
}

export default App;

{
  /*    style={{
          inlineSize: 'fit-content',
          margin: '0 auto',
          textAlign: 'left',
        }}
        
        */
}

{
  /* <div className="App">
      <h3>Invitados:</h3>
<ClassComponent nombre="Nicolas" estaEnLista={true} />
<ClassComponent nombre="Ivan" estaEnLista={false} />
<ClassComponent nombre="Carolina" estaEnLista={true} />
<h3>Tareas: </h3>
<FunctionComponent nombre="Nicolas" tarea="papas fritas" />
<FunctionComponent nombre="Ivan" tarea="pizzas" />
<FunctionComponent nombre="Carolina" tarea="bebidas" />
  </div> */
}

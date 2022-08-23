import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import ListadoTurnos from './components/ListadoTurnos';

function App() {
  const [turnos, setTurno] = useState([]);

  const registro = (event) => {
    event.preventDefault();
    const nombre = event.target.name.value;
    const apellido = event.target.lastName.value;
    const count = turnos.length + 1;
    const turno = {
      id: count,
      nombre: nombre,
      apellido: apellido,
    };

    setTurno([...turnos, turno]);
  };

  return (
    <div className="App">
      <h1>Sistema de gestion de turnos</h1>
      <Form registro={registro} />
      <ListadoTurnos listTurnos={turnos} />
    </div>
  );
}

export default App;

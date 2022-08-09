import logo from './assets/satisfied.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="contenedor-img">
        <h1>Grupo 4</h1>
        <img className="imagen" src={logo} alt="persona satisfecho" />
        <p>
          PD: No trabajamos.
          <br />
          Cecilia De Paula - Carlos Cepeda - Lucas Monasterio - Daniela Ramirez
          - Ezequiel Mariscal - Nacho Justel
        </p>
      </div>
    </div>
  );
}

export default App;

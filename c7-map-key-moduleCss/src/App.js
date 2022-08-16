import './App.css';
import H1 from './components/H1';

function App() {
  const palabras = ['HOLA', 'HOLA', 'HOLA', 'MUNDO'];

  return (
    <div className="App">
      {palabras.map((palabra, index) => {
        return <H1 palabra={palabra} key={index} />;
      })}
    </div>
  );
}

export default App;

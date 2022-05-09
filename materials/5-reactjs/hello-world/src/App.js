import logo from './logo.svg';
import './App.css';
// paso 5. importar el componente donde queremos usarlo
import HelloWorld from './components/hello-world';

function App() {
  let a = 'Esto es un valor';
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld></HelloWorld>
        <img src={logo} className="App-logo" alt="logo" />
        <label></label>
        <p onClick={e => console.log(e)}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onMouseEnter={e => e.target.style.backgroundColor= 'blue'}>{a}</button>
        {/* Paso  6. Llamar al componente como si fuese HTML*/}
        <HelloWorld></HelloWorld>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
// paso 5 importar el componente donde queremos usarlo
import HelloWorld from './components/hello-world';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
        {/* Paso 6 llamar al componente como si fuese HTML */}
        <HelloWorld></HelloWorld>
      </header>
    </div>
  );
}

export default App;

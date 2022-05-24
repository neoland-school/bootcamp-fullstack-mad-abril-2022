
import './App.css';
import HeaderTienda from './components/Header';


function App() {
  return (
    <>
      <CounterProvider>
        <HeaderTienda></HeaderTienda>
        <Counter></Counter>
      </CounterProvider>
      
    </>
  );
}

export default App;

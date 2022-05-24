import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Counter from './components/Counter';
import CounterProvider from './context/counter-provider';

function App() {
  return (
    <>
      <CounterProvider>
        <Header></Header>
        <Counter></Counter>
      </CounterProvider>

    </>

  );
}

export default App;

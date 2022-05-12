import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Textin from './components/Text';
import Button from './components/Boton';
import Update from './components/pUsuario';

function App() {
  const [text, setText] = useState("Hola mundo.");
  // const [victor, setVictor] = useState("")

  return (
      <>
        <Textin texto={text}></Textin>
        <Button></Button>
        <Update></Update>
      </>
  );
}

export default App;

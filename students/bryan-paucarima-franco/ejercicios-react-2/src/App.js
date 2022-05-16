import './App.css';
import PrintText from './components/Text';
import PrintButton from './components/Button';
import { useState } from "react";
import PrintTextTwo from './components/Text-2';

function App() {
  const [pText, updateText] = useState('Hola mundo');
  return (
    <>
  <PrintText text = {pText}></PrintText>
  <PrintButton></PrintButton>
  <PrintTextTwo></PrintTextTwo>
    
  </>
    
  );
}

export default App;

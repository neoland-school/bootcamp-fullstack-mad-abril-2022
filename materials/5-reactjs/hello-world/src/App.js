import React from 'react';
import './App.css';
// paso 5. importar el componente donde queremos usarlo
import HelloWorld from './components/hello-world';
import Square from './components/square';
import Text from './components/text';
import Greeting from './components/greeting';

function App() {
  const arr = ['Judith', 'Alberto', 'Marco', 'Laura', 'Jetza', 'Victor', 'Irene', 'Luis', 'Bryan'];
  return (
    <React.Fragment>
      {/* <HelloWorld></HelloWorld>
      <Square></Square>
      <Text></Text> */}
      <Greeting name="Alex" nationality="Español"></Greeting>
      <Greeting name="Bootcamp"></Greeting>
      <Greeting></Greeting>

      { arr.map((n,i) => <Greeting key={i} name={n}></Greeting>) }
    </React.Fragment>
  );
}

export default App;

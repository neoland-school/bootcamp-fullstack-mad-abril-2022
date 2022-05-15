import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import BoxContainer from './components/BoxContainer';


function App() {

  const [caracthers, setCaracthers] = useState ([])
              //me creo un array vacio con un useState

  useEffect(() => {
    // Simple GET request of data using fetch
    fetch('https://rickyandmorty.com/api/character')
    .then(response => response.json())
    .then(data => {
      setCaracthers(data.results)
      // mi array de caracthers va a ser = a data.results
      caracthers.map(async data => { // (array de 20 objetos) en cada vuelta hace un fetch
        return await fetch(data.episode[0]) 
        .then(response => response.json())
        .then(data => console.log(data.name))
        })

    })

  }, [])



  return (
      <>
        <BoxContainer></BoxContainer>
               
      </>
  );
}

export default App;



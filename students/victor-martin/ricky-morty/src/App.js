// import logo from './logo.svg';
// import './App.css';
// import Character from './components/Character';

// function App() {

//   fetch(`https://rickandmortyapi.com/api/character/1,183`)
//     .then(r => r.json())
//     .then(d => console.log(d))
    
//   return (
//     <>
    
//       <Character></Character>
//     </>
//   );
// }

// export default App;



import './App.css';
import Character from './components/Character';
import {useEffect, useState} from 'react';

function App() {

  const [caracthers, setcaracthers] = useState([])
  const [caracthersFiltered, setcaracthersFiltered] = useState([])
// console.log(caracthers);
  useEffect(()=>{

fetch("www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
.then(res => res.json())
.then(data => {
  setcaracthers(data.results)
  setcaracthersFiltered(data.results)
  // console.log(caracthers);
})
},[])

console.log(caracthers);

  const filterCharacters = e => { //e es el parametro y el callback       
    const valor = e.target.value.toLowerCase();  
    const arrayFiltered = caracthers.filter(c => c.name.toLowerCase().includes(valor));
    setcaracthersFiltered(arrayFiltered);
  }  // 
      // console.log(caracthersFiltered);

    const buttonFilterAlive = () => { // parentesis delacrando q es funcion     
      const aliveFiltered = caracthers.filter(c => c.status.toLowerCase()==='alive')
      setcaracthersFiltered(aliveFiltered);
    }
    
    const buttonFilterDead = () => {
      const deadFiltered = caracthers.filter(c => c.status.toLowerCase()==='dead')
      setcaracthersFiltered(deadFiltered);
    }

    const buttonShowAll = () => {
      const ShowAll = caracthers;
      setcaracthersFiltered(ShowAll);
    }

  return (
    
    <div className="App">
      
    
    <Character caracthers={caracthersFiltered} filterCharacters={filterCharacters} buttonFilterAlive={buttonFilterAlive} buttonFilterDead={buttonFilterDead} buttonShowAll={buttonShowAll}></Character>

    </div>
  );
}

export default App;


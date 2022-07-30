import './style.css'
import {useEffect, useState} from 'react';
import PokeCard from '../PokeCard';
import Nav from '../Nav';

function PokeList() {

  const [pokemon, updatePokemon] = useState([])
  const [pokemonFiltered, updatePokemonFiltered] = useState([])

  
useEffect(()=>{

fetch("https://pokeapi.co/api/v2/pokemon")
.then(res => res.json())
.then(data => {
    // console.log(data);
    data.results.map((p) => 
        fetch(p.url)
        .then(res => res.json())
        .then(data => {
          pokemon.push(data); 
          updatePokemon(pokemon.slice()); 
          pokemonFiltered.push(data);
          updatePokemonFiltered(pokemonFiltered.slice()); 
          //otra opcion es con spread operator [....pokemon]
          
          //clonamos pokemon con slice
          // hola que


        // pokemon((pokemon) =>[...pokemon] )
        // updatePokemon((pokemon) => [...pokemon] )
        })
    )
    
    })

},[])
console.log(pokemon)



const filterByName = e => {          //e es el parametro y el callback       
    const inputValue = e.target.value.toLowerCase();  
    
    if (inputValue) {
      const nameFiltered = pokemon.filter(c => c.name.toLowerCase().includes(inputValue))
      updatePokemonFiltered(nameFiltered)
  } else {
    updatePokemonFiltered(pokemon)
  }
  }  


  const filterByType = e => {             
    
    const typeFiltered = pokemon.filter(p => p.types[1]?.type?.name === 'poison');   
    updatePokemonFiltered(typeFiltered);
  }  

  // const filterByType = e => {             
    
  //   const typeFiltered = pokemon.filter(p => p.types.some(t => t.type.name === e.target.value));   
  //   updatePokemonFiltered(typeFiltered);
  // }  

  const filterByFire = e => {               
    
    const FireFiltered = pokemon.filter(p => p.types[0]?.type?.name === 'fire');   
    updatePokemonFiltered(FireFiltered);
  }  

  const filterByWater = e => {               
    
    const WaterFiltered = pokemon.filter(p => p.types[0]?.type?.name === 'water');   
    updatePokemonFiltered(WaterFiltered);
  } 

  const showAllPokemon = () => {
    updatePokemonFiltered(pokemon)
}


return (
<>
 
  <Nav 
   filterByName={filterByName} 
   filterByType={filterByType}
   filterByFire={filterByFire}
   filterByWater={filterByWater}
   showAllPokemon={showAllPokemon}
   >
   </Nav>

    <div className='all-cards'> 
      {
        pokemonFiltered.map((p) => <PokeCard key={p.id} pokemon={p} ></PokeCard>)
      }
    </div>
    
    

</>
    
)

}
export default PokeList;

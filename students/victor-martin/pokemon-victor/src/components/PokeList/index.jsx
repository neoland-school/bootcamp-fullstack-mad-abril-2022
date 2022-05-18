import './style.css'
import {useEffect, useState} from 'react';
import PokeCard from '../PokeCard';
import Nav from '../Nav';

function PokeList() {

  const [pokemon, uptdatePokemon] = useState([])
  const [pokemonFiltered, updatePokemonFiltered] = useState([])
// console.log(pokemon);
  
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
          //otra opcion es con spread operator [....pokemon]
          uptdatePokemon(pokemon.slice()); 
          //clonamos pokemon con slice

        // pokemon((pokemon) =>[...pokemon] )
        // uptdatePokemon((pokemon) => [...pokemon] )
        })
    );
    
    })

},[])

const filterByName = e => {          //e es el parametro y el callback       
    const inputValue = e.target.value.toLowerCase();  
    const nameFiltered = pokemon.filter(p => p.name.toLowerCase().includes(inputValue));
    updatePokemonFiltered(nameFiltered);
  }  


  const filterByType = e => {               
    // const typeFiltered = e.target.value.toLowerCase();  
    const typeFiltered = pokemon.filter(p => p.types.some(t => t.type.name === e.target.value))   
    updatePokemonFiltered(typeFiltered);
  }  



return (
<>
  {/* {pokemon.map((v,i) =>
    <PokeCard key={i} v={v} pokemon={pokemon}></PokeCard>)} */}  

    <div className='d-flex-wrap justify-content-center'> 
    {
      pokemon.map((p) => <PokeCard key={p.i} pokemon={p}></PokeCard>)
    }

    </div>
    
   <Nav filterByName={filterByName}></Nav>
</>
    
)

}
export default PokeList;

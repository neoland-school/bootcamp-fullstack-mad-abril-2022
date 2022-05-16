// import './style.css'
// // import React, {useState} from 'react';

// function Character(r,d) => {
   
// }
//     {
    
//         <p>Hello Personajes</p>
//         //funcion para comunicar del hijo al padre

//         return (
//             <div>
                
//             </div>
//         );

//     }
  
//   export default Character;



import SecArriba from '../avatar';
import './style.css'

//   e es de events, tipos de datos objeto
// addEventListener( 'click', e => {} )  // <--nativo javascript 

// function EventsExample() {

//     return (
//         <div>
//             <p onClick={ e => console.log('Mi evento', e) }> Hola Events </p>
//         </div>
//     )
// }


function Character({caracthers, filterCharacters, buttonFilterAlive, buttonFilterDead, buttonShowAll}){

    return(
    <>
        <h1>The Rick and Morty API</h1>

        <input onChange={filterCharacters} type="text"  name="buscar" id="buscador" placeholder='Search Character' />

        <div id="botones">
            <button onClick={buttonFilterAlive} id='vivos' className='botons'>Filter Alive Characters</button>
            <button onClick={buttonFilterDead} id='muertos' className='botons'>Filter Dead Characters</button>
            <button onClick={buttonShowAll} id='todos' className='botons'>Show All Characters</button>
        </div>


        <div>
            {caracthers.map(c=> <SecArriba key={c.id} caracther={c}></SecArriba>)}
        </div> 
        
     </>

    )
}
export default Character;
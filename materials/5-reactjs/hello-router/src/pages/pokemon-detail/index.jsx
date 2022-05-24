import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePokemonByName } from "../../data/pokemon/pokemon.hooks";




function PokemonDetail(){
    const {name} = useParams(); // params = { name: 'valor en la URL'}
    const navigate = useNavigate();
    const {pokemon, err} = usePokemonByName(name);
    useEffect(() => {
        /**
         * Funcion un poco más larga
         *  // aqui recibimos la respuesta del servidor. r es un objeto de tipo Response
            if(!r.ok){
                // La respuesta no tiene código 200-299, por tanto hacemos gestion de casos
                // switch(r.status){
                //     case 404: navigate('/not-found'); break;
                //     default: break;
                // }
                throw new Error(JSON.stringify({error: r.statusText, code: r.status}));
            }else{
                console.log('Hemos ido correctamente');
                return r.json();
            }
         */

    //   fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    //   .then(r => {
    //        if(!r.ok) throw new Error(r.status);
    //        return r.json();
    //     })
    //     .then(d =>  console.log('Pintar pokemon', d))
    //     .catch(err => {/* Funcion para la gestión de errores */});

    }, [name]);

    // Si quisiese navegar
    // if(err.code === 404){ 
    //     navigate('/not-found');
    // }

    return (
        <main>
            { err.code === 404 
                ? <h1>El pokemon {name} no existe</h1>
                : <>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites?.front_shiny} alt=""></img>
                    <img src={pokemon.sprites?.other['official-artwork'].front_default} alt=""></img>
                    { pokemon.moves?.map(m => <p key={m.move.name}>{m.move.name}</p>)}
                  </>
            }
        </main>
    )
}


export default PokemonDetail;
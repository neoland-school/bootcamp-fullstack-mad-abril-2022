import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Pokemons(){
    const navigate = useNavigate();
    const [pokemons, updatePokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(r => r.json())
        .then(d => {
            d.results.forEach(p => {
                fetch(p.url)
                .then(r => r.json())
                .then(pokemon => updatePokemons(prevPokemons => [...prevPokemons, pokemon]));
            })
        });
    }, [])

    return (
        <main>
            <ul>
                {pokemons.map(p => <li key={p.id} onClick={() => navigate(`/pokemons/${p.name}`)}>
                                     <img alt="" src={p.sprites.front_default}></img>
                                     <h2>{p.name}</h2>
                                   </li>)}
            </ul>
        </main>
    )
}


export default Pokemons;
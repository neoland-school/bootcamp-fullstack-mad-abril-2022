import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




function PokemonDetail(){
    const {name} = useParams(); // params = { name: 'valor en la URL'}
    const [pokemon, updatePokemon] = useState({});

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(r => r.json())
        .then(p => updatePokemon(p))
    }, [name]);

    return (
        <main>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.front_shiny} alt=""></img>
            <img src={pokemon.sprites?.other['official-artwork'].front_default} alt=""></img>
            { pokemon.moves?.map(m => <p key={m.move.name}>{m.move.name}</p>)}
        </main>
    )
}


export default PokemonDetail;
import { useState, useEffect } from "react";
import { getPokemons, retrievePokemonByName } from "./pokemon.api";


/**
 * Para crear un custom hook tengo que crear una funcion que empieza por use
 */

/**
 * Custom hook que obtiene los pokemon del API y los devuelve
 * @returns El array de pokemons actualizado
 */
export const usePokemons = () => {
    const [pokemons, updatePokemons] = useState([]);

    useEffect(() => {
        loadMorePokemons(1);
    }, []);

    // funcion que dado un número de página te carga los pokemon de esa página
    // si n === 1 --> offset = 0
        // si n === 2 --> offset = 20
        // si n === 3 --> offset = 40
        // si n === 4 --> offset = 60
        // ?? offset = (n-1)*20
    const loadMorePokemons = async n => {
        const pokemons = await getPokemons((n-1)*20);
        updatePokemons(pokemons);
    }

    return {
        pokemons, // al construir un objeto si el nombre de la propiedad es igual al nombre de la variable que le da valor, se puede simplificar 
        loadMore: loadMorePokemons
    };
}


export const usePokemonByName = name => {
    const [pokemon, updatePokemon] = useState({});
    const [err, updateError] = useState({});
    console.log('Se actualiza el hook', err);
    useEffect(() => {
        retrievePokemonByName(name)
        .then(p => updatePokemon(p))
        .catch(err =>  updateError({code: parseInt(err.message)}));
    }, [name]);

    return {pokemon, err};
}





/**
 * Esta función se encarga de ir al servido a por los siguientes 20 pokemons
 * Empezando por offset
 * @param {*} offset 
 */
export const getPokemons = async offset => {
    const r = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`)
    const listPokemon = await r.json();
    // por cada pokemon solicito su info detallada y la añado al array
    const asyncPokemons = listPokemon.results.map(async p => {
        const r = await fetch(p.url);
        return await r.json();
    });
    // promise all nos permite esperar a un array de promesas, devolviendo el array de 
    // sus fulfillement
    const pokemons = await Promise.all(asyncPokemons);
    return pokemons;
}


export const retrievePokemonByName = async name => {
    const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return await r.json();
}


import { useEffect, useState } from 'react';
import './style.css';

function CaractherList() {
    // llamada JSON de paises (metodo GET) es de hacer un fetch
    const [charactersOriginal, updateCharactersOriginal] = useState ([]);
    const [charactersFiltered, updateCharactersFiltered] = useState ([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                //inicialmente NO hay filtros, el array original es el mismo que el filtrado
                updateCharactersOriginal(data.results); 
                updateCharactersFiltered(data.results);
                console.log(data.results);
            })
    }, [])

    const handleChange = (e) => {
        const inputValue = e.target.value.toLowerCase();  // toLowerCase a name_es para que filtre bien
        const arrayFiltered = charactersOriginal.filter(data => data.name_es.toLowerCase().includes(inputValue));
        updateCharactersFiltered(arrayFiltered);  // toLowerCase para que no haga distincion entre mayus y minus
    }

    const filterAlive = (e) => {
        const aliveFiltered = charactersOriginal.filter(e => e.status === 'Alive');
        updateCharactersFiltered(aliveFiltered);
        console.log(aliveFiltered);

    return (
        /*pasar funciones comunicacion padre-hijo El padre la crea, el hijo le da el valor.*/
        <>
            <nav handleChange={handleChange} filterActive={filterAlive} filterDead={filterDead}></nav>
            <section className="card__container"></section>
            {charactersFiltered.map((data,id) => <CharacterCard character={data} key={id}></CharacterCard>)}
        </>
        /*como es una lista,tengo que ponerle una key, un identificador unico */
    )
}
export default CaractherList;
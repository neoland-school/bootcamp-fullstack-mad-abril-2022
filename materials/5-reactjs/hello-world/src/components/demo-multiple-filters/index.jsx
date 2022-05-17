import { useEffect, useState } from "react";



function MultipleFilters(){

    const [originalChars, updateOriginalChars] = useState([]);
    const [chars, updateChars] = useState([]);
    const [lastStatus, updateLastStatus] = useState('All');
    const [lastName, updateLastName] = useState('');

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(r => r.json())
        .then(c => {
            updateOriginalChars(c.results);
            updateChars(c.results);
        });
    },[]);
    
    const filterByName = e => {
        const val = e.target.value.toLowerCase(); // valor del input
        filterChars(val, lastStatus); // filtro por el nombre actual y el status
        updateLastName(val);  // actualizo el nombre para que el resto de filtros lo tengan actualizado
    };

    const filterByStatus = e => {
        filterChars(lastName, e.target.value); // filtro por el status actual y el nombre guardado
        updateLastStatus(e.target.value); // actualizo el status para el filtro por nombre
    }

    const filterChars = (name, status, gender) => {
        // filtro por nombre
        let filteredArray = originalChars.filter(c => c.name.toLowerCase().includes(name));
        // filtro por status
        filteredArray = 
            status === 'All'
                ? filteredArray
                : filteredArray.filter(c => c.status === status);

        // filtro por genero
        filteredArray = 
            gender === 'All'
                ? filteredArray
                : filteredArray.filter(c => c.gender === gender);
        updateChars(filteredArray); // actualizo el state
    }

    return (
        <div>
            <div>
                <input onChange={filterByName} placeholder="Busca texto"></input>
                <div onChange={filterByStatus}>
                    <label htmlFor="alive">Alive</label>
                    <input id="alive" type='radio' name='demo' value='Alive'></input>
                    <label htmlFor="death">Dead</label>
                    <input id="death" type='radio' name='demo' value='Dead'></input>
                    <label htmlFor="unknown">Unknown</label>
                    <input id="unknown" type='radio' name='demo' value='unknown'></input>
                    <label htmlFor="all">All</label>
                    <input id="all" type='radio' name='demo' value='All' defaultChecked></input>
                </div>
            </div>
            <ul>
                {chars.map(c => <li key={c.id}>{c.name} {c.status}</li>)}
            </ul>
        </div>
    )
}



export default MultipleFilters;
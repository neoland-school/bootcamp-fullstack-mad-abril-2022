import {useEffect, useState} from 'react';


function CountryList(){
    const [countriesFiltered, updateCountriesFiltered] = useState([]);
    const [countriesOriginal, updateCountriesOriginal] = useState([]);
    
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
        .then(r => r.json())
        .then(c => {
            // Inicialmente NO hay filtros, el array original es el mismo que el filtrado
            updateCountriesFiltered(c.countries);
            updateCountriesOriginal(c.countries);
        })
    }, []);

    const filterCountries = e => {
        const val = e.target.value.toLowerCase();
        const arrFiltered = countriesOriginal.filter(c => c.name_es.toLowerCase().includes(val));
        updateCountriesFiltered(arrFiltered);
    }
    return (
        <>
        <input onChange={filterCountries} placeholder='filtraaaaaaaaaaaa'></input>
        <ul>
            {countriesFiltered.map(c => <li style={{padding: '1rem', border: '1px solid black'}} key={c.code}>{c.name_es} {c.dial_code}</li>)}
        </ul>
        </>
    )
}



export default CountryList;
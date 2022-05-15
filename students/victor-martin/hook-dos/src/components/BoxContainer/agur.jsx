
import { useEffect, useState } from 'react';
import './style.css';

function CountryList() {
    // llamada JSON de paises (metodo GET) es de hacer un fetch
    const [countriesFiltered, updateCountriesFiltered] = useState ([]);
    const [countriesOriginal, updateCountriesOriginal] = useState ([]);

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
            .then(response => response.json())
            .then(data => {
                //inicialmente NO hay filtros, el array original es el mismo que el filtrado
                updateCountriesFiltered(data.countries); 
                updateCountriesOriginal(data.countries);
            })
    }, [])

    const filterCountries = e => {
        const valor = e.target.value.toLowerCase();  // toLowerCase a name_es para que filtre bien
        const arrayFiltered = countriesOriginal.filter(data => data.name_es.toLowerCase.includes(valor));
        updateCountriesFiltered(arrayFiltered);  // toLowerCase a name_es para que filtre bien
    }
    return (
        <ul>
            {countries.map(data => <li style={{ padding: '1rem', border: '1px solid black' }} 
            key={data.code}> {data.name_es} {data.dial_code} </li>)}
        </ul>
        /*como es una lista,tengo que ponerle una key, un identificador unico */
    )
}
export default CountryList;


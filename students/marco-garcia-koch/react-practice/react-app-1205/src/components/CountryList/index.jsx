import './style.css';
import CountryCard from '../CountryCard';
import { useState } from 'react';
import { useEffect } from 'react';


function CountryList () {

    const [countryList, updateCountryList] = useState([]);
    const [filterList, updateFilterList] = useState([]);

    useEffect (() => {
        fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
        .then(res => res.json())
        .then(d => {
            updateCountryList(d.countries);
            updateFilterList(d.countries);
        });
    },[])

    const countriesFiltered = e => {
        let inputValue = e.target.value.toLowerCase();
        let countryFiletered = countryList.filter(c => c.name_es.toLowerCase().includes(inputValue));
        updateFilterList(countryFiletered);
        console.log(countryFiletered);
    }

    return (
        <>
        <input onChange={countriesFiltered} className='country-list__filter' type="text" placeholder='Busca el pais' />
        <section className='county-list__container'>
        {filterList.map((c,i) => <CountryCard key={i} country={c}></CountryCard>)}
        </section>
        </>
    )
}


export default CountryList;
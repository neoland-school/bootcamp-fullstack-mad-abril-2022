import {useState, useEffect} from 'react'

function CountryList(){

    const [countriesFiltered, updateCountriesFiltered] = useState([])
    const [countriesOriginal, updateCountriesOriginal] = useState([])

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
            .then(res => res.json())
            .then(d => { 
                        updateCountriesFiltered(d.countries);
                        updateCountriesOriginal(d.countries)
            }) 

    }, []);

    const filterCountries = e => {
        const val = e.target.value.toLowerCase()
        const arrFiltered = countriesOriginal.filter(c => c.name_es.toLowerCase().includes(val))
        updateCountriesFiltered(arrFiltered)
    }

    

    return (

        <>
        <input onChange={filterCountries} type="text" placeholder='Introduce un pais en español' />
        {countriesFiltered.map(p => <p style={{padding: '10px', border:'1px solid black'}} key={p.code} > {p.name_es} {p.dial_code} </p>)}
        </>

    )
}

export default CountryList
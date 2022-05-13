import './style.css';


function CountryCard ({country}) {

    return (
        <section className='card__container'>
            <p className='name__container'>Country Name: {country.name_es}</p>
            <p className='dial-code__container'>Dial Code: {country.dial_code}</p>
        </section>
    )
}


export default CountryCard;
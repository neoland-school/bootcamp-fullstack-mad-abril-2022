import './style.css'

 function PokeCard ({pokemon}) {
    
    return(
    
    <div className="pokemon-container">
        {pokemon.types.map(e => <p key={e.type.name}>{e.type.name}</p>)}

            <div>
                <img className='img' src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="pokemon-description">
                <p>{pokemon.id}</p>
                <h4>{pokemon.name}</h4> 
            </div>
    </div>
    )
}

export default PokeCard;
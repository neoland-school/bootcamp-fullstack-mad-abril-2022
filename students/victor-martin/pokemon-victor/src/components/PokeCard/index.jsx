import './style.css'

 function PokeCard ({pokemon}) {
    
    return(
    <div className="card-container">
        <img className='img' src={pokemon.sprites.front_default} alt="" />
        <div className="description">
            <h4>{pokemon.name}</h4> 
            {pokemon.types.map(e => <p key={e.type.name}>{e.type.name}</p>)}
            <p>{pokemon.id}</p>
        </div>
        
    </div>
    )
}

export default PokeCard;
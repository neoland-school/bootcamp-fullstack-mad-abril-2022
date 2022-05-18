import './style.css'

export default function PokeCard ({pokemon}) {
    
    return(
    <div className="card">
        <div className="description">
            <h4>{pokemon.name}</h4> 
        </div>
        <img src={pokemon.sprites.front_default} alt="" />
    </div>
    )
}
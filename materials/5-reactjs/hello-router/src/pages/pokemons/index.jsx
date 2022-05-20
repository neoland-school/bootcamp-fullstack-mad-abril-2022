import { useNavigate } from "react-router-dom";
import { usePokemons } from "../../data/pokemon/pokemon.hooks";

function Pokemons(){
    const navigate = useNavigate();
    // cuando de construyo un objeto, tengo que ser estricto con el nombre de la propiedad que quiero
    const {pokemons, loadMore} = usePokemons();

    return (
        <main>
            <div>
                {/* Creo 4 botones de paginacion */}
                {Array(4).fill(0).map((_v,i) => <button onClick={() => loadMore(i+1)} key={i}>{i+1}</button>)}
            </div>
            <ul>
                {pokemons.map(p => <li key={p.id} onClick={() => navigate(`/pokemons/${p.name}`)}>
                                     <img alt="" src={p.sprites.front_default}></img>
                                     <h2>{p.name}</h2>
                                   </li>)}
            </ul>
        </main>
    )
}


export default Pokemons;
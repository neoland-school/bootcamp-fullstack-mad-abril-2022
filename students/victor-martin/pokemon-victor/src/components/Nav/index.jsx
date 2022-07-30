// import funtion from '../PokeCard'
import './style.css'

export default function Nav ({filterByName, filterByType, filterByFire, filterByWater, showAllPokemon}){

return(
    <>
        <div className='frame__filtros'>

            <div className='buttons'>
                {/* <label htmlFor='poison'className='boton'>Poison</label> */}
                        <button onClick={filterByType}>Poison</button>
                        <button onClick={filterByFire}>Fire</button>
                        <button onClick={filterByWater}>Water</button>
                        <button onClick={showAllPokemon}>Show all Pokemon</button>

                        {/* <button onClick={showAllChar}>show All Characters</button> */}
                {/* <input onInput={filterByType} id='poison' type="radio" name='filtrado' />

                <label htmlFor='fire'className='boton'>Fire</label>
                <input onInput={filterByFire} id='fire' type="radio" name='filtrado' />

                <label htmlFor='water'className='boton'>Water</label>
                <input id='water' type="radio" name='filtrado' /> */}
            </div>
            <div>
                <input onChange={filterByName} type="select" className='selection' />
            </div>
    </div>
    </>
)

};
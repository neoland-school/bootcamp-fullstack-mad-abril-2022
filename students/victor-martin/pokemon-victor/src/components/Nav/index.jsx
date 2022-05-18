// import funtion from '../PokeCard'
import './style.css'

export default function Nav (){

return(
    <>
    <div className='frame__filtros'></div>

    <div className='buttons'>
        <label htmlFor='poison'className='boton'>Posion</label>
        <input id='poison' type="radio" name='filtrado' />

        <label htmlFor='fire'className='boton'>Fire</label>
        <input id='fire' type="radio" name='filtrado' />

        <label htmlFor='water'className='boton'>Water</label>
        <input id='water' type="radio" name='filtrado' />
    </div>

    <input type="select" className='selection' />

    </>
)

};
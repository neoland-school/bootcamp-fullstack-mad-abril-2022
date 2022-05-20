import './style.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CounterContext } from '../counter/counter.context';

function Header(){
    const [counter] = useContext(CounterContext);
    return (
        <header className='app-header__container'>
            <h1>My App</h1>
            <nav className='nav__container'>
                <Link className='nav__link' to='/todo'>Todo</Link>
                <Link className='nav__link' to='/quotes'>Quotes</Link>
                <Link className='nav__link' to='/pokemons'>Pokemons</Link>
                <Link className='nav__link' to='/counter'>Counter</Link>
            </nav>
            <div className='circle--red'>{counter}</div>
        </header>
    )
}


export default Header;
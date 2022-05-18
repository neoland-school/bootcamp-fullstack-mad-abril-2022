import './style.css';
import { Link } from 'react-router-dom';

function Header(){

    return (
        <header className='app-header__container'>
            <h1>My App</h1>
            <nav className='nav__container'>
                <Link className='nav__link' to='/todo'>Todo</Link>
                <Link className='nav__link' to='/quotes'>Quotes</Link>
                <Link className='nav__link' to='/pokemons'>Pokemons</Link>
            </nav>
        </header>
    )
}


export default Header;
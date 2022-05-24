import './style.css'
import { useContext } from 'react';
import counterContext from '../../context/counterContext';

function Header () {

    const [counterState] = useContext(counterContext);

return (
    <>
    <header>
    
    <h1 className='header__h1'>Encabezado</h1>
    <div className='circle__red1'>
    <div className='circle__red'>{counterState}</div>
    </div>

    </header>
    </>
)
}

export default Header;
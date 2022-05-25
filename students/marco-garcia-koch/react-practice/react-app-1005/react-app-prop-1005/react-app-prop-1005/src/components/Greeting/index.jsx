    
import './style.css';


function Greeting ({name,age}) {

    return (
        <p className='greeting'>Hola {name}, tengo {age} años</p>
    )
}

export default Greeting;
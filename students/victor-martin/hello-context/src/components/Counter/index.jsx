import './style.css'
import { useState } from 'react';
import counterContext from '../../context/counterContext';
import { useContext } from 'react';


function Counter () {
    
    let [counterState,setCounter] = useContext(counterContext);
    // let [counter, setCounter] = useState(0);
return (
    <>
        {/* <button onClick={Increment} clasaqº    sName='increment'><p className='pCenterButton'>Incremento</p></button>
        <button className='decrement'><p className='pCenterButton'>Decremento</p></button> */}
    
   
<div>
<div className="contenedor-botones">
    <button className="boton" onClick={()=> setCounter(++counterState)}>Incremento</button>
    <p>{counterState}</p>
    <button className="boton" onClick={()=> setCounter(--counterState)}>Decremento</button>
</div>
</div>
    </>
)
}

export default Counter;






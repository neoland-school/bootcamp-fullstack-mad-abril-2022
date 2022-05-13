
import './style.css';
import { useState } from 'react';



function Button () {

    const [button, updateButton] = useState('button');

    const clickButton = (e) => {
        // updateButton('button-change-color');
        updateButton(button === 'button' ? 'button-change-color' : 'button');
    };

    return (
        <button className={button} onClick={clickButton}>Click para cambiar de color</button>
    )
}


export default Button;
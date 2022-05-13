import './style.css';
import { useState } from 'react';


function InputText () {

    const [displayedText, textFromInput] = useState('')

    const inputText = e => {
        textFromInput(e.target.value);
    }

    return (
        <>
        <input className='input-text' type="text" onChange={inputText}/>
        <p className='p-text'>{displayedText}</p>
        </>
    )
}

export default InputText;
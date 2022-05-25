import { useState } from 'react';
import InputChild from '../InputChild';
import './style.css';


function InputFather () {

    const [text, updateText] = useState('');

    const displayInputText = inputText => {
        updateText(inputText);
    }

    return (
        <section className='input__container'>
        <p className='input__title'>Escribe el texto que quieres representar</p>
        <InputChild onGetText={displayInputText}></InputChild>
        <p className='input__text'>{text}</p>
        </section>
    )
}


export default InputFather;
import { useState } from "react";
import './styles.css'


function PrintCard ({contact, onOffline}){
    const [changeImage, updateImage] = useState (1);
    const [changeState, updateState] = useState ('green');
    // const [changeTextState, updateTextState] = useState('');

    const setOpacityImage = e => {
        updateImage(i => i === 1 ? 0.5 : 1)
        updateState(s => s === 'green' ? 'red' : 'green')
        // updateTextState(t => t ? '' : `${contact.name} esta offline`)
        onOffline(contact.name)

    };
    return (
        <>
        <div className='container'>
            {/* <p onClick={setOpacityImage} style={{color: 'red'}}>{changeTextState}</p> */}
            <div>
                <img style={{opacity: changeImage}} 
                onClick={setOpacityImage}  className='contact' src={contact.img} alt={`Imagen de avatar de ${contact.name}`} />
            </div>
            <div style={{backgroundColor: changeState}} onClick={setOpacityImage} className='circle'></div>
        </div>
        </>


    )


}

export default PrintCard
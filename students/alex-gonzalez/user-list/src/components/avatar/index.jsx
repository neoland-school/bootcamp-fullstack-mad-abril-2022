import { useState } from 'react';
import './style.css';


function Avatar({userInfo={}, onOffline}){
    const [isOnline, updateOnline] = useState(true); // por defecto estoy online

    const updateStatus = () => {
        updateOnline(!isOnline);
        onOffline(userInfo.name); // le paso el nombre al padre
    }

    return (
        <div className={`avatar__container ${isOnline ? '' : 'avatar__container--offline'}`}>
            <img onClick={updateStatus} alt={`Imagen del avatar de ${userInfo.name ?? 'desconocido'}`} src={userInfo.img} className='avatar__img'></img>
            <div className='avatar__status'></div>
        </div>
    )
}

export default Avatar;
import './style.css';
import { useState } from 'react';


function Avatar ({avatar={}, onOffline}) {

    const [isOnline, updateOnline] = useState(true)

    const updateStatus = () => {
        updateOnline(!isOnline);

        onOffline(avatar.name)
    }



    return (
        <section className={`avatar__container ${isOnline ? '' : 'avatar__container--offline'}`}>
        <img onClick={updateStatus} src={avatar.img} alt={`${avatar.name ?? 'Unknown'}'s avatar image`} className='avatar__image' />
        <div className='avatar__status'></div>
        </section>
    )
}


export default Avatar;
import './style.css';
import Avatar from '../Avatar';
import { useState } from 'react';


function AvatarList ({avatarList}) {

    const [list, filteredList] = useState(avatarList);

    const filterText = e => {
        let val = e.target.value.toLowerCase();
        let filtered = avatarList.filter(a => a.name.includes(val));
        filteredList(filtered);
    }

    const [offLineMessage, updateOfflineMessage] = useState('');

    const offlineState = name => {
        updateOfflineMessage(name);
        setTimeout(() => {
            updateOfflineMessage(''); // Con el timer a los 2s el <p> que muestra el mensaje desaparece
        },2000)                       // y por tanto cambio el state a '' que hace que no se muestre.
    }

    return (
        <section className='user-list__container'>
            <header className='header__container'>CONTACTS</header>
            <div className='search-container'>
                <label htmlFor="SEARCH"><i className="fa-solid fa-magnifying-glass"></i></label>
                <input onChange={filterText} id='SEARCH' type="text" placeholder='Busca un Avatar' />
            </div>
            { offLineMessage !== ''
                ? <p className='offline-message'>{offLineMessage} is offline</p>
                : '' // No pinto el p si offLineMessage está vacío
            }
            {list.map((a,i) => <Avatar key={i} avatar={a} onOffline={offlineState}></Avatar>)}
        </section>

    )
}


export default AvatarList;
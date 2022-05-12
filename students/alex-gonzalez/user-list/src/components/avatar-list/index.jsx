import { useState } from 'react';
import Avatar from '../avatar';
import './style.css';

function AvatarList({ userList = [] }) { 
    // el array original me lo pasa el padre por props
    const [filteredUserList, updateUserList] = useState(userList);
    const [offlineAvatar, updateOfflineAvatar] = useState('');

    const filterAvatars = e => {
        // quedarme con los elementos de la lista que incluya
        // en su nombre lo que ha escrito el usuario 
        const val = e.target.value.toLowerCase(); // a minuscula para compara con los nombres y permitir filtrar escribiendo mayúsculas
        // SIEMPRE FILTRAR EL ARRAY ORIGINAL
        const usrFiltered = userList.filter(u => u.name.includes(val));
        updateUserList(usrFiltered); // actualiza el array y lo repinta con el nuevo valor
    }

    const updateAvatarStatus = name => {
        updateOfflineAvatar(name); // actualizo el state par mostrar el nuevo name offline
        setTimeout(() => {
            // a los 2 segundos el código que ponga en esta funcióln tiene que hacer 
            // desaparecer el p ---> QUE DEJE DE PINTARSE
            updateOfflineAvatar('');
        }, 2000);
    }

    return (
        <section className='avatar-section__container'>
            <input onChange={filterAvatars} placeholder='Busca Contacto'></input>
            { 
              offlineAvatar !== '' 
              ? <p className='avatar-list__offline'>{offlineAvatar} is offline</p>
              : '' // no pinto el p
            }
            <ul className='avatar-list__container'>
                {
                    filteredUserList.map(
                        (u, i) => <li key={i}>
                                    <Avatar onOffline={updateAvatarStatus} userInfo={u} />
                                  </li>
                    )
                }
            </ul>
        </section>
    )
}

export default AvatarList;
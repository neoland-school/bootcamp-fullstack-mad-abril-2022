import './styles.css'
import PrintCard from '../Avatar'
import { useState } from "react";


function PrintListCards ({listContacts=[]}){

    const [filterContact,setFilterContact] = useState('')
    const [offlineAvatar, updateOfflineAvatar] = useState('')
    
    const handleInput = e => { 
        setFilterContact(e.target.value.toLowerCase())
        console.log(e.target.value)
    }

    const updateAvatarStatus = name => {
        updateOfflineAvatar(name);
        setTimeout(() => {
            updateOfflineAvatar('');
        },2000);
    }
    
    return (
        <section className='list-contacts'>
            <nav className='tittle'>CONTACTS</nav> 
            <input onChange={handleInput}  placeholder='Introduce un contacto'></input>
           {
           offlineAvatar !== ''
           ?<p className='avatar-offline'>{offlineAvatar} is offline</p>
           : '' } 
            {
            listContacts.filter(e => e.name.includes(filterContact) )
            .map(u => <PrintCard key={u.name} onOffline={updateAvatarStatus} contact={u}></PrintCard> )}

        </section>
    )
}

export default PrintListCards;
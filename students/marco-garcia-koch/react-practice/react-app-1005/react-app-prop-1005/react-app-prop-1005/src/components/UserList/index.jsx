import './style.css';
import UseCard from '../UseCard';


function UserList ({userList}) {

    return (
        <section className='user-list__container'>
            {userList.map(u => <UseCard key={u.id} user={u}></UseCard>)}
        </section>
    )
}


export default UserList;
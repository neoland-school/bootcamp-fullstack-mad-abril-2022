import './style.css';
import UserCard from '../user-card';

function UserList({users=[]}){
    return (
        <section className='user-list__container'>
            { users.map(u => <UserCard key={u.id} user={u}></UserCard>) }
        </section>
    )
}


export default UserList;

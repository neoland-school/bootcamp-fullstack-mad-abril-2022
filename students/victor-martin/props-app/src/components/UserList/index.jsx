import './style.css'
import UserCard from '../UserCard';

function UserList ({lists}){
    // console.log(props.venga);
    return  (
        <>
         {lists.map ((r) => <UserCard key={r.id} cards={r}></UserCard>)}
           
        </>
    )
}

export default UserList;
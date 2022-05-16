import UserCard from "../UserCard/UserCard";


function UsersList({arrayObj}) {
    // const handleClickList = (data) => console.log('click list', data);

    return (
        
        arrayObj.map((n, i) => <UserCard key={i} userObj={n} ></UserCard>)
        )
}
// 
export default UsersList;


// function UserList ({users=[]) {
    // {users.map(u => <UserCard key = {u.id} userObj ={u} ></UserCard>)}
// }
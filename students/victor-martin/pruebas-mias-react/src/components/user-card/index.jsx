import './style.css';

/**
 * Este componente tiene que pintar una card para cualquier usuario de mi aplicación
 * @param {*} props tendrá una propiedad `user` que será el objeto que representa al usuario
 * @returns 
 */
const defaultUser = { // este objeto lo utilizamos como valor por defecto si no meten la prop de user
    firstName:'Anonymous', 
    age: 150, 
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSmojUgwjIB87c4Q0hLCAyl__oiTySWGWJUZtUNHlHjBALLzTsu_vMHYMaEwLts4QEoo&usqp=CAU'
};

function UserCard({user=defaultUser}){
    return (
        <article className='user-card__container'>
            {
                user !== undefined 
                
                ? 
                    <>
                        <h1>{user.firstName} {user.lastName}</h1>
                        <img alt='' src={user.image}></img>
                        <p>{user.age} años</p>
                        <p>{user.bank?.cardNumber}</p>
                        <p>{user.address?.coordinates?.lat}</p>
                    </>
                
                : <p>No se ha intoducido el usuario</p>

            }
            
        </article>
    )
}


export default UserCard;
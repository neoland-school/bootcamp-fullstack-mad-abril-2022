
/**
 * Esto es un ejemplo de ruta privada. Ejemplo de la docu
 * https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx
 */

import { useUser } from "../../core/users/user.hook";

function User(){
    const {user} = useUser();
    return (
        <div>
            <h1>User</h1>
            <p>{user.email}</p>
            <p>{user.age}</p>
        </div>
    );
}

export default User;
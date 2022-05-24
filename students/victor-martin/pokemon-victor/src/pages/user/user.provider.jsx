import {UserContext} from "./user.context"
import { useState } from "react";


/** PASO 2. CREAR el provider
 * a. Importar el Context creado
 * b. utiliza el componennte XXXContext. Provider
 * c. meter todos los hijos dentro
 * d darle el valor que queremos a la propiedad value de XXXContext
 */
function UserProvider ({children}) { //prop children
    const user = {name:'nasty'};
    const userState = useState({});

    return (
        
        <UserContext.Provider value={userState}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
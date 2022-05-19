import { useState } from "react";
import { UserContext } from "./user.context";

/**
 * Paso 2: Crear el provider
 *  a. Importar el contexto creado
 *  b. Utiliza el componte de XXXContext.Provider
 *  c. Meter todos los hijos dentro
 *         <UserProvider></UserProvider>
 *         <UserProvider>
 *            <MyComponent></MyComponente>
 *            <p>Hola</p>
 *         </UserProvider>
 *  d. Darle el valor que queremos a la propiedad value de XXXContext.Provider
 * 
 */
function UserProvider({children}){
    const userState = useState({name: 'Alex'});
    
    return (
        <UserContext.Provider value={userState}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider;
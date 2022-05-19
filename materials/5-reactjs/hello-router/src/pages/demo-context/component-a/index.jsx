import { useContext } from "react";
import { UserContext } from "../../../shared-components/user/user.context";



function ComponentA({children}){
    const [,updateUser] = useContext(UserContext);
    return (
        <div style={{border: '1px solid black', height: '100px', margin: '10px'}}>
            <p>{children}</p>
            <button onClick={() => updateUser({name: 'Nombre Cambiado desde otro componente'})}>Actualizar Context</button>
        </div>
    )
}

export default ComponentA;
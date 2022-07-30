import { useContext } from "react";
import { UserContext } from "../../user/user.context.js";


function ComponentB (){
    const user = useContext(UserContext);
    return( 
    <div style={{border: '1px solid red', height: '100px', margin: '10px;'}}>
        
    </div>
//    <p>{user.name}</p>
    )
}

export default ComponentB;
import { useContext } from "react";
import { UserContext } from "../../../shared-components/user/user.context";


function ComponentB(){
    const [user] = useContext(UserContext);
    return <div style={{border: '1px solid red', height: '100px'}}>
        <p>{user.name}</p>
    </div>
}

export default ComponentB;
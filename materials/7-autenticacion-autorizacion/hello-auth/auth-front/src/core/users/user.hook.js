import { useEffect, useState } from "react"
import { getUserInfo } from "./user.api"




export const useUser = () => {
    const [user, updateUser] = useState({});

    useEffect(() => {
        getUserInfo()
        .then(updateUser)
    },[]);

    return {
        user
    }
}
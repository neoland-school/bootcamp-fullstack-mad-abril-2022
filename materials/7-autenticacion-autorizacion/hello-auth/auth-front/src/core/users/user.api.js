import { wrapUsingAuth } from "../auth/auth.utils"

// La mejor forma de hacer esto es con un Interceptor. 
// fetch por defecto NO tiene interceptores y por eso se usa axios
// se puede crear un interceptor para fetch



export const getUserInfo = async () => {
    const r = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users`, wrapUsingAuth());
    return await r.json();
}
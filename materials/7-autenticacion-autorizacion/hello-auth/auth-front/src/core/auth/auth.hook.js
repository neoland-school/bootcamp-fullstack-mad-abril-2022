import { registerAPI, loginAPI, validateTokenAPI } from "./auth.api";
import { useState } from "react";
import { AUTH_STORAGE_KEY } from "./auth.utils";

/**
 * Se encarga de TODA la gestión de la autenticación
 *  - Expone las función de Auth
 *  - Expone el token y la gestión de guardar el token (JWT)
 * 
 * ¿Que quiero devolver?
 *      - Si estamos logados o no
 *      - si estamos cargando o no
 *      - función registrarse
 *      - función para logar
 *      - función para validar
 */


export const useAuth = () => {
    const [isAuth, updateIsAuth] = useState(sessionStorage.getItem(AUTH_STORAGE_KEY) !== null);
    const [isLoading, updateIsLoading] = useState(false);

    const register = async (user) => {
        updateIsLoading(true); // me pongo en modo carga
        await registerAPI(user);
        updateIsLoading(false); // cuando termino de llamar al API dejo de cargar
    }

    const login = async (user) => {
       updateIsLoading(true); // me pongo en modo carga
       const token = await loginAPI(user);
       updateIsAuth(true);
       sessionStorage.setItem(AUTH_STORAGE_KEY, token.access_token);
       updateIsLoading(false); // cuando termino de llamar al API dejo de cargar
    }

    const validate = async (token) => {
        updateIsLoading(true); // me pongo en modo carga
        await validateTokenAPI(token);
        updateIsLoading(false); // cuando termino de llamar al API dejo de cargar
    }

    return {
        isAuth,
        isLoading,
        register,
        login,
        validate
    }

}


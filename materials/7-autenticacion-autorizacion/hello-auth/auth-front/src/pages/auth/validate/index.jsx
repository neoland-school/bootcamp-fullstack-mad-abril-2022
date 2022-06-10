import { useAuth } from "../../../core/auth/auth.hook";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { useEffect } from "react";

function Validate() {
    const { isLoading, isAuth, validate } = useAuth();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    if (isAuth) navigate("/"); // si entro al registro logado, no me lo debe permitir
    useEffect(() => {
        validate(searchParams.get('token'));
    }, [searchParams]);
    return (
        <>
            {
                isLoading
                    ? <h1>Validando su email...</h1>
                    : (
                        <>
                            <h1>Su email se ha validado con éxito. Ya puedes hacer login</h1>
                            <Link to={'/auth/login'}>Ir a Login</Link>
                        </>
                    )
            }
        </>
    )
}



export default Validate;
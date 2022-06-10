import { useAuth } from "../../../core/auth/auth.hook";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
    const { register, isLoading, isAuth } = useAuth();
    const [showEmailConfirm, updateShowEmail] = useState(false);
    const navigate = useNavigate();
    if (isAuth) navigate("/"); // si entro al registro logado, no me lo debe permitir

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: e.target.email.value,
            password: e.target.pass.value,
            age: e.target.age.value
        };
        register(user).then(() => updateShowEmail(true));
    }

    return (
        <>
            {isLoading ? <h1>Loading...</h1> :
                <>
                    {showEmailConfirm ? <p>Te hemos enviado un email, revisa tu bandeja para validarlo</p> : ''}
                    <form onSubmit={handleSubmit}>
                        <input name="email" type="email" placeholder="Introduzca email"></input>
                        <input name="pass" type="password" placeholder="introduzca password"></input>
                        <input name="age" type="number" min={18} />
                        <button type="submit">Registrarse</button>
                    </form>
                </>
            }
        </>

    )
}


export default Register;
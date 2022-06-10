import { useAuth } from "../../../core/auth/auth.hook";
import { useNavigate } from "react-router-dom";


function Login(){
    // missing is Loading
    const { isAuth, login } = useAuth();
    const navigate = useNavigate();
    if (isAuth) navigate("/"); // si entro al registro logado, no me lo debe permitir
    const handleLogin = (e) => {
        e.preventDefault();
        const user = {
            email: e.target.email.value,
            password: e.target.pass.value
        };
        login(user)
        .then(() => navigate("/user")); // despues de logarme tengo que navegar
    }
    return (
        <form onSubmit={handleLogin}>
            <input name="email" type="email" placeholder="Email"></input>
            <input name="pass" type="password" placeholder="Pass"></input>
            <button type="submit">Log In</button>
        </form>
    )
}


export default Login;
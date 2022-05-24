import { Link } from "react-router-dom"


function NotFound(){
    return (
        <>
            <h1>La página se la ha tragado un agujero negro</h1>
            <Link to='/'>Volver a tener gravedad</Link>
            <img src="https://i.pinimg.com/originals/8b/a4/8d/8ba48db13ca10021f9d14aa91a0d8cb1.gif"></img>
        </>
    )
}

export default NotFound;
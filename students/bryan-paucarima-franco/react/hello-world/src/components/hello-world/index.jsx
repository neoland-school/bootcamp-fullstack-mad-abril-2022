import './style.css'; // paso 1 importamos el css

// paso 2 esta funcion para ser componente de react
// tiene que devolver un JSX (HTML desde JS)

function HelloWorld(){
    // paso 4 devolver el HTML en forma de JSX

    return (
        <div>
            <h1>Hello World</h1>
            <p>Esto tambien es un p</p>
            <label htmlFor="'MY_CHECK'">Esto es un checkbox</label>
            <input id='MY_CHECK' type="checkbox" />
        </div>
    )
}

// paso 3 exportamos nuestro compontente
export default HelloWorld;
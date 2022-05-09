import './style.css'; // Paso 1. importamos el CSS

/**
 * Paso 2.
 * Un componente es una función JS escrito en 
 * Camel case capitalizado
 * 
 * Esta función para ser componente de React, 
 * tiene que devolver un JSX (HTML desde JavaScript)
 */
function HelloWorld(){

    // Paso 4. devolver el HTML en forma de JSX
    return (
        <div>
            <h1>Hello World</h1>
            <img src='https://cdn.pixabay.com/photo/2018/02/15/19/42/sunset-3156176__340.jpg'></img>
            <p>Esto tambien es un p</p>
            <label htmlFor='MY_CHECK'>Esto ye un checkbox</label>
            <input id='MY_CHECK' type='checkbox'></input>
        </div>
    )
}

// Paso 3. exportar nuestro componente
export default HelloWorld;

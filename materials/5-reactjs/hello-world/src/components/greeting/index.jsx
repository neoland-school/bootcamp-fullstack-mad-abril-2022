
/**
 * Las props nos permiten pasar información del padre al hijo.
 * A esto se le llamada "Comunicación Padre-Hijo"
 * 
 * El tipo de datos de las props es Object
 *  y contiene tantos propiedades como le pase el padre
 */
// function Greeting(props){
function Greeting({name,nationality}){ // lo mismo pero utilizando deconstrucción de objetos
   
    return (
        <>
            <h1>Hello, {name ?? 'UNKNOWN'}</h1>
            {nationality ? <a href="Algun lado.com">ir</a> : '' }
            <p>Soy {nationality ?? 'DE LA TIERRA'}</p>
        </>
    )
}



export default Greeting;
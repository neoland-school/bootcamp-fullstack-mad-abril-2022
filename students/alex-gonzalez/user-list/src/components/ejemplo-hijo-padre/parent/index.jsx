import { useState } from "react";
import Child from "../child";


/**
 * - Cosas que sabemos:
 *      * Para pasar info al hijo uso las props
 *      * Si quiero refrescarme como componente uso state
 *      * Las props pueden ser de cualquier tipo de datos
 *          - Strings, boolean, numbers, arrays, objetos, null, undefined
 *          - TAMBIEN SE LE PUEDEN PASAR FUNCIONES --> Esta es la magia de la comunicación hijo-padre
 * 
 * 1. El padre crea una función que va a pasar por props
 * 2. El hijo recibe en una de sus props esta función --> puede ejecutarla cuando quiera
 * 3. El hijo ejecuta cuando quiera la función pasando información a la función
 * 4. Como la función pertenece al padre, entonces se ejecuta en el componente padre
 * 5. Si el padre puede refrescarse cuando se ejecute su funcion con algún useState interno
 */
function Parent() {
    const [childText, updateChildText] = useState('');
    const myChildFn = name => {
        console.log('Se ejecuta la función en Parent: ' + name);
        updateChildText(name);
    }

    return (
        <>
            <p>Esto es del padre</p>
            <p>Valor del filtro: {childText}</p>
            <Child onFilterChange={myChildFn} other={66}></Child>
        </>
    )
}


export default Parent;
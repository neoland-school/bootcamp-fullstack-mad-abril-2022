import { useState, useSyncExternalStore } from "react";
import Child from "../child";



// Cosas que sabemos:
//  . Para pasar al hijo uso las props
//  .   Si quiero refrescarme como componente uso state
//  .   Las props pueden ser cualquier tipo de datos
//      - Strings, boolean, numbers, arrays, objetos, null, undefined
//      - TAMBIEN SE LE PUEDEN PASAR FUNCIONES ---> Esta es la magia de la comunicacion
//
//  1. EL padre crea una funcion que va a pasar por props
//  2. El hijo recibe en una de sus props esta funcion --> puede ejecutar cuando quiera
//  3. El hijo ejecuta cuando quiera la funcion pasando informacion a la funcion
//  4. Como la funcion pertenece al padre, entonces se ejecuta en el componente padre
//  5. Si el padre puede refrescarse cuando se ejecute su funcion con algun useState interno
//

function Parents (){

    const [childText,updateChildText] = useState('')
    const myChildFn = name => {
        console.log('Se ejecuta la funcion en Parents: ' + name)
        updateChildText(name);
    }
    return (
        <>
        <p>Esto es el padre</p>
        <p>Valor del filtro: {childText} </p>
        <Child onFilterChange={myChildFn} other={66}></Child>
        </>
    )
}

export default Parents;
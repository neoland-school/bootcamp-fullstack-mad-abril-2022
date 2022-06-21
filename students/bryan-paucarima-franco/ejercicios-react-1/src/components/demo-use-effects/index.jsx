import {useState,useEffect} from 'react'


// ¿Cuando se ejecuta un useEffect y como puedo controlarlo?
// 1. UseEffect SIN segundo aprametro ==> la funcion del useEffect se ejecuta SIEMPRE 
//     tanto en la fase de montando como en la actualizacion
// 2. UseEffect CON segundo parametro (Array de dependencias)
//
// 
function DemoUseEffect(){

    const [a, updateA] = useState('')
    const [b, updateB] = useState(0)

    console.log('Se ejecuta el componente: ', a,b )

    useEffect( () => {
        console.log('UseEffect A: ', a)
    }, [a,b])  // Esto se ejecuta en la fase de montado y cuandos e actualizado 'a'  y 'b'

    useEffect( () => {
        console.log('UseEffect B: ', b)
    }, [b]) // // Esto se ejecuta en la fase de montado y cuandos e actualizado 'b'

    

    return (
        <>
        <button onClick={() => updateA('Actualizado')}> UPDATE A</button>
        <button onClick={() => updateB(100)}> UPDATE B</button>
        <p> Esto funciona</p>
        </>
    )

}

export default DemoUseEffect;
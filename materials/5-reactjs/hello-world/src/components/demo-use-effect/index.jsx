import {useEffect, useState} from 'react';

/**
 * PROBLEMA: ¿CUANDO SE EJECUTA UN USEEFFECT Y COMO PUEDO CONTROLARLO?
 * 
 * 1. UseEffect SIN segundo parámetro ==> La función del useEffect se ejecuta SIEMPRE 
 *      Tanto en la fase de montado como en la de actualización
 * 
 * 2. UseEffect CON segundo parámetro (Array de dependencias)
 */

function DemoUseEffect({c, id}){

    const [a, updateA] = useState('');
    const [b, updateB] = useState(0);

    console.log('Se ejecuta el componente: ',a,b);

    useEffect(() => {
        console.log('UseEffect A: ', a);
    }, [a,b]); // Esto se ejecuta en la fase de montado y cuando se actualice `a` o `b`

    useEffect(() => {
        console.log('UseEffect A: ', a);
    }, [a]); // Esto se ejecuta en la fase de montado y cuando se actualice `a`

    useEffect(() => {
        console.log('UseEffect: ');
    }, []); // Esto se ejecuta en la fase de montado
    

    useEffect(() => {
        console.log('UseEffect: ');
    }); // SIEMPRE: Esto se ejecuta en la fase de montado y en cualquier actualización

    useEffect(() => {
        console.log('UseEffect: ');
    },[b,c]); // Fase de montado y en la actualización de `b` o de `c`. Cuando el padre cambie c, este useEffect se ejecutará

    useEffect(() => {
        console.log('UseEffect B: ', b);
    }, [b]); // Esto se ejecuta en la fase de montado y cuando se actualice `b`


    useEffect(() => {
        // pido en función de lo que me diga el padre por la prop id
        fetch(`https://dummy/elements/${id}`) // ESTA URL ME LA ESTOY INVENTADO
        .then(r => r.json())
        .then(d => console.log(d));
    }, [id]); // Si mi padre me cambia el elemento a pintar tengo que ir al servidor a por ello
              // Por eso ejecuto el fetch en la fase de montado y cuando el padre cambie el id del elemento a mostrar

    return (
        <>
            <h1>Demo UseEffect</h1>
            <button onClick={() => updateA('Actualizado')}>Update A</button>
            <button onClick={() => updateB(100)}>Update B</button>
        </>
    );
}


export default DemoUseEffect;


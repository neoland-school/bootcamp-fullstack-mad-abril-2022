import { useEffect, useState } from "react";




function DemoInterval(){
    const [counter, updateCounter] = useState(0);
    console.log('Contador: ', counter);
    useEffect(() =>{
        // const intervalId = setInterval(() => {
        //     // esta es otra forma de actualizar un state, pasándole una función que recibe
        //     // el valor actual y devuelve el nuevo valor.
        //     // se utiliza mucho cuando el nuevo valor depende del anterior
        //     updateCounter(prevCounter => prevCounter+1);
        //     console.log('Esto es dentro del intervalo');
        // }, 1000);
        // console.log('Se genera intervalo con id: ', intervalId );

        // return () => {
        //     // Esta función se EJECUTA cuando se produzca la fase de desmontado
        //     // Aqui debo eliminar la "mierda" de mi useEffect
        //     // en este caso quiero eliminar el intervalo
        //     console.log('Fase de desmontado, Eliminando intervalo...')
        //     clearInterval(intervalId);
        // };
    }, []);

    const [page, updatePage] = useState(1);
    const [chars, updateChars] = useState([]);
    const [infoPages, updateInfoPages] = useState({});
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(r => r.json())
        .then(d => {
            updateInfoPages(d.info);
            updateChars(d.results)
        });
    }, [page]);
    

    return <div>
            { Array(counter).fill(0).map((_v, i) => <p key={i}>{i}</p>)}
            {/* {counter} */}
            <button onClick={() => updatePage(page<=1 ? 1 : page-1)}>Previous</button>
            {Array(10).fill(0).map((_v,i) => <button key={i} style={{backgroundColor: (page-5)+i===page ? 'red' : '' }} onClick={() => updatePage((page-5)+i)}>{(page-5)+i}</button>)}
            <button onClick={() => updatePage(page+1)}>Next</button>
            {chars.map(c => <div key={c.id}>
                                <img alt="" src={c.image}></img>
                                <p >{c.name}</p>
                            </div>
                      )}
           </div>
}


export default DemoInterval;
import React from "react";


/**
 * JSX permite expresiones JS entre llaves en las que podemos devolver:
 *  - un valor de un tipo de datos
 *  - Otra expresion JSX
 */
function Text() {
    const greet = 'hola';
    const googleLink = 'https://www.google.es';
    const offlineText = 'Conectate a internet';
    const otherType = 3;
    const obj = {
        demo: null
    };

    const arr = [4,2,1,3,4,5,6];

    return (
        <React.Fragment>
            <p>Esto es un componente { `${greet}${otherType} true caracola`}</p>
            { 
              otherType>4 
                ? <a href={googleLink} >Google</a> 
                : <img alt="" src="https://images.unsplash.com/photo-1652060491237-aaa9c2cbad1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" /> 
            }
            {
                !navigator.onLine ? <p>{offlineText}</p> : ''
            }
            <p>Otro p con objeto: {obj.demo}</p>
            <ul>
                {
                    arr.map((v,i) => <li key={i}>{v}</li>)
                }
            </ul>
            <ul>
                {
                    arr
                      .filter(v => v%2===0)
                      .map((v,i) => <li key={i}>{v}</li>)
                }
            </ul>
        </React.Fragment>
    )
}


export default Text;
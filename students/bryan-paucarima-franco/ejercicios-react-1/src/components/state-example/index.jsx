


// Todos los componentes en React tienen un ciclo de vida (lifeCycle):
// 1. Fase de creacion o montado: 
//      . Esta es la primera vez que un componte es pintado en el DOM.
//      . Solo se ejecuta una vez 
//      . Consiste en llamar a la funcion del componente (lo hace React) --> StateExample()
// 2. Actualizacion:
//      . En esta fase se queda el componente hasta que queremos eliminarlo de la web
//      . Se ejecuta cada vez que se modifiquen algunos aspectos del componente (los vemos luego)
//      . Consiste en volver a llamar a la funcion del componente (lo hace React), con los valores de esos 'aspectos' actualizados
//      . Se le conoce como re-pintado
//  ¿Que aspectos son la que lanzan un re-pintado?
//      - Cambio en una prop
//      - Cambio en el State del componene (lo vemos ahora)
// 3. Muere, mejor dicho DESMONTADO (unmount):
//      . Queremos que el componente se deje de pintar, por tanto react lo elimina del DOM real
//  ¿Cuando se produce esto?
//      - En un renderizdo condicional 
//      - En un cambio de pagina (todos los componentes de la pagina anterior se desmontan y todos los de la pagina nueva se desmontan)
//      - Cuando cerramos la pestaña
//      . Se utiliza para eliminar la 'basura' que deja nuestro componente
//          Ejemplo: caso claro, eliminar un interval
//
// -------HOOKS-------
//
//  Son funciones que nos ayuda a enganchar partes del ciclo de vida de un componente React
//      .   Podriamos verlo como un addEventListener, pero del ciclo de vida de ReactJS
//  Cosas importantes de los hooks:
//      . Su tipo de datos es FUNCTION
//      . Su nombre empieza por 'use' + cualquier String Camel Case
//      . Un hook SOLO se puede ejecutar en un componente de ReactJS o EN otro hook
//  Hay muchos hooks, React nos proporciona unos cuantos, pero luego podemos crearnos los nuestros propios o usar librerias que tienen sus propios hooks.
//
//-------STATE-------
//
//  Todos los componentes de React, tienen un estado interno
//  Este estado es de tipo Object y contienen informacion que cuando las modifiquemos queremos que el componente se refresque
//
//  REGLA DE ORO : Si hay una variable que queremos cambiar y que se refresque el componente, hay que meterle en el state del componente
//
//  Para poder usar el State, necesito un hook llamado useState(es una (funcion)
//  
//  ¿De donde saco la funcion useState?
//  import { useState } from "react"
//
//  ¿Como creo una variable dentro del state?
//      . Tengo que ejecutar la funcion de useState
//      . Cada vez que la ejecute me añade una prop al estado
//
// ¿Que devuelve la funcion useState?
//      1. El valor ACTUAL de la prop del state. Estara actualizado cuando el componente se refresque
//      2. Es una FUNCION para actualizar esa prop del state
//

import { useState } from "react";



function StateExample(props) {
    
    const [pColor, updateColor] = useState('green');
    const [counter, updateCounter] = useState(0); // pintar el numero de clicks en otra prop del stat

    // let pColor = 'green'
    console.log('Repintando', pColor)

    const handleClick = e => {
        // e.target.style.color ='red'
        // e.target.textContent = 'se ha hecho click'
        // NO SE PUEDE MODIFICAR EL DOM DIRECTAMENTE
        updateColor('red')
        updateCounter(counter+1)

    };
    return (
        <p style={{color: pColor}} onClick={handleClick}> Numero de clicks : {counter}</p>
    )

}

export default StateExample;
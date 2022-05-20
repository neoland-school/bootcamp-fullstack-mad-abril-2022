import { useState } from "react";
import { CounterContext } from "./counter.context";



function CounterProvider({children}){
    const defaultCounter = JSON.parse(localStorage.getItem('counter')) ?? 0;
    const [counter, updateCounter] = useState(defaultCounter);

    const updateCounterWithLocal = c => {
        // 1. Actualizar el localStorage
        // 2. Actualizar el state
        localStorage.setItem('counter', JSON.stringify(c)); // persisto la info en el navegador
        updateCounter(c);
    }

    return (
        <CounterContext.Provider value={[counter,updateCounterWithLocal ]}>
            {/* Ahora la función de actualización NO es la del useState, es una intermedia que me he creado */}
            {/* Esta función se llama updateCounterWithLocal que acepta un número y actualiza el state del context */}
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider;
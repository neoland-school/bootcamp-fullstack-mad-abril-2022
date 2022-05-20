import { useContext } from "react";
import { CounterContext } from "../../shared-components/counter/counter.context";



function Counter(){
    // esta función ya NO es la función directa del useState. Ahora es la función updateCounterWithLocal del Provider
    const [counter, updateCounter] = useContext(CounterContext);
    return (
        <main>
            <button onClick={() => updateCounter(counter-1)}>-</button>
            <p>{counter}</p>
            <button onClick={() => updateCounter(counter+1)}>+</button>
            <button onClick={() => updateCounter(0)}>Reset</button>
        </main>
    )
}


export default Counter;
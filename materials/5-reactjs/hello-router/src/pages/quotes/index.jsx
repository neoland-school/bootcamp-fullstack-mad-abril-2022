import { useContext, useEffect, useState } from "react";
import { CounterContext } from "../../shared-components/counter/counter.context";



function Quotes(){

    const [quote, updateQuote] = useState({});
    const [counter] = useContext(CounterContext);
    useEffect(() => {
        fetch('https://dummyjson.com/quotes/random')
        .then(res => res.json())
        .then(q => updateQuote(q));
    }, []);


    return (
        <main>
            <q>{quote.quote}</q>
            <p>{quote.author}</p>
            <p>{counter}</p>
        </main>
    )
}


export default Quotes;
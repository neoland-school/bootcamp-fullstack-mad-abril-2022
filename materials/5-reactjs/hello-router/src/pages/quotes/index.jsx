import { useEffect, useState } from "react";



function Quotes(){

    const [quote, updateQuote] = useState({});

    useEffect(() => {
        fetch('https://dummyjson.com/quotes/random')
        .then(res => res.json())
        .then(q => updateQuote(q));
    }, []);


    return (
        <main>
            <q>{quote.quote}</q>
            <p>{quote.author}</p>
        </main>
    )
}


export default Quotes;
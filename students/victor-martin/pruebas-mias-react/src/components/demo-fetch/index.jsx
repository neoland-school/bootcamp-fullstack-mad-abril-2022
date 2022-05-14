import { useEffect, useState } from "react";



function DemoFetch(){
    console.log('Se repinta el componente'); // 
    const [products, updateProducts] = useState({});

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(d => updateProducts(d)); // 
    }, []);
    

    const handleClick = () => { // si es una función de un evento del usuario, NO hace falta el useEffect
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(d => updateProducts(d)); 
    }
    console.log('Antes del return'); // 
    return (
        <>
            <h1>{products.limit}</h1>
            {products.products?.map(p => <img key={p.id} src={p.thumbnail} alt=""></img>)}
        </>
    )
}


export default DemoFetch;
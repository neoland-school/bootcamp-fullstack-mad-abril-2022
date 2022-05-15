import React from "react";
import EmptyBox from "./agur";

// al final este va import a App.js

function DemoUseEffect () {
    const [a, updateA] = useState('');
    const [b, updateB] = useState(0);

    console.log('se ejecuta el componente; ' ,a,b);

useEffect(() => {
    // Simple GET request of data using fetch
    fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => updateProducts(data));
}); 

useEffect(() => {
    console.log('useEffect A', a);
},[a,b]); //cuando cambie a solo se ejecuta esto, 
            // cuando cambie b se ejecuta esto 

useEffect(() => {
    console.log('useEffect B', b)
},[b]); // cuando cambie b se ejecuta esto


    const BoxContainer = () => {
    const isFillboxActive = false;

    return (
    <>
        <EmptyBox></EmptyBox>
        <Fillbox isActive={isFillboxActive}></Fillbox>
    </>
    );

}
           
export default DemoUseEffect;



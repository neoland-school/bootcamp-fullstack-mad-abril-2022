import { useState } from "react";

function PrintTextTwo (props) {
    const [changeP, updateP] = useState('Introduce texto en el input')

console.log(changeP)
    const handleInput = (e => { 
        updateP(e.target.value)
        console.log(e.target.value)})


    return (

        <>
        <input onChange={handleInput} placeholder="Introduce texto"></input>
        <p>{changeP}</p>
        </>
    )
    
}

export default PrintTextTwo;
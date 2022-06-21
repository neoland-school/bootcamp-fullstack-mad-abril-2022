import { useState } from "react";

function PrintButton (props){

    const [pButton,updateButton] = useState('gray');
    console.log(pButton)

    const handleClick = e => {
        updateButton('green')

    };

    return(

        <button style={{backgroundColor: pButton}} onClick={handleClick} type="submit"> Click para cambiar el color</button>

    )

}

export default PrintButton;
import { StyleHTMLAttributes } from "react";

function MultipleStates ({status})  //status === 'Alive' or ' Dead'
// 1ª aproximacion: Switch Case

let statusCss = '';
switch (status) {
    case 'Alive': statusCss ='alive'; break;
    case 'Dead' : statusCss ='dead'; break;
    default: statusCss = 'unknown'
        
}

return <div className={`status status--${statusCss} `}></div>
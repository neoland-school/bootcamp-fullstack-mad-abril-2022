import React, {useState} from 'react';
import EmptyBox from '../EmptyBox';
import FillBox from '../EmptyBox/FillBox';

//padre
function BoxContainer(e) {
    const [color,setColor] = useState('red');

    const handleOver = () => {
        setColor(color === "red" ? "green" : "red")
    }   //funcion para comunicar del hijo al padre

    return (
        <div>
            <EmptyBox handleOver={handleOver}></EmptyBox> {/**lo paso por props para invocar en el hijo */}
            <FillBox colorChange={color}></FillBox>
        </div>
    );

}
  
  export default BoxContainer;
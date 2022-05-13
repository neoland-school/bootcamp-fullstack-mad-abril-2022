import './style.css';
import EmptyBox from '../EmptyBox';
import FillBox from '../FillBox';
import { useState } from 'react';



function BoxContainer () {
  
    const [isFillBoxActive, updateActive] = useState(false);

    const changeActive = () => {
        updateActive(!isFillBoxActive);
    }

    return(
        <>
            <EmptyBox onHover={changeActive} onLeave={changeActive}></EmptyBox>
            <FillBox isActive={isFillBoxActive}></FillBox>
        </>
    )
}


export default BoxContainer;
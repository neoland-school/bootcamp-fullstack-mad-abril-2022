import './styles.css'
import {useState} from 'react'
import EmptyBox from '../EmptyBox';
import FillBox from '../FillBox';

function BoxContainer (){
    const [color,setColor] = useState('red')
    const handleHover = () => {
        setColor(color==='red'?'green':'red')
    }
    return(
        <>
        <EmptyBox handleHover={handleHover}></EmptyBox>
        <FillBox colorChange={color}></FillBox>
        </>

    )
}

export default BoxContainer;
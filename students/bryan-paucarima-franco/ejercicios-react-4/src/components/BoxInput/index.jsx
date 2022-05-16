import Input from "../Input";
import {useState} from 'react'

function BoxInput (){

    const [text , updateText] = useState('')
    const handleText = e => {
        updateText(e.target.value)
    }

    return (
    <>
    <Input textInput={handleText} ></Input>
    <p> {text}  </p>
    </>

    )
}

export default BoxInput
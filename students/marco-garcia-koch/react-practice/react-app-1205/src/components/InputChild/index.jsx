import './style.css';


function InputChild ({onGetText}) {

    return (
        <input onChange={ e => onGetText(e.target.value)} className='input' type="text" />
    )
}


export default InputChild;
// const nombre
import './style.css'

function Boolean (props){
    let isCircle = true;
    return  (
        props.isCircle
        ? <div className="figure__circle"></div>
        : <div className="figure__triangle"></div>
    )
}

export default Boolean;
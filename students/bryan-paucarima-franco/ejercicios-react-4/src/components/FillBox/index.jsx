import './styles.css'

function FillBox({colorChange}){
    return(
        <div  style={{height: '150px', width: '150px', background: colorChange}}></div>
    )
}

export default FillBox;
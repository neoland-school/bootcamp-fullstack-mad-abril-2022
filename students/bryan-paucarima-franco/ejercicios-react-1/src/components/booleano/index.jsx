import './styles.css';

function PrintBoolean (props) {
    return (

    //   props.isCircle ? <div className="circle"></div> : <div className="triangle"></div>
      <div className={props.isCircle ? 'circle' : 'triangle'}></div>

    )
}

export default PrintBoolean;
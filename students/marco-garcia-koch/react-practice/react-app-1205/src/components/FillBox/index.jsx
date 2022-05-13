import './style.css';



function FillBox ({isActive}) {

    return(
        <div className={`filled__container ${isActive ? 'fill-box--active' : ''}`}></div>
    )
}


export default FillBox;
import './style.css';

function FillBox({isActive}){
    return <div className={`fill-box ${isActive ? 'fill-box--active' : ''}`}></div>
}

export default FillBox;
import './style.css';



function EmptyBox ({onHover, onLeave}) {

    return (
        <div onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()} 
            className='empty__container'></div>
    )
}


export default EmptyBox;
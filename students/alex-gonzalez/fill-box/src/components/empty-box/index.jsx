import './style.css';

function EmptyBox({onHover, onLeave}){
    return <div 
              onMouseEnter={() => onHover()} 
              onMouseLeave={() => onLeave()} 
              className='empty-box'
            >    
            </div>
}


export default EmptyBox;
import './style.css';

// function Figure(props){
function Figure({isCircle}){
    
    return (
    //   props.isCircle 
    //     ? <div className='figure__circle'></div>
    //     : <div className='figure__triangle'></div>
        <div className={isCircle ? 'figure__circle' : 'figure__triangle'}></div>
    )
}

export default Figure;
import './style.css'


function Boolean ({isCircle}) {

    return (
        <div>
            {isCircle ? <div className='circle'></div> : <div className='triangle'></div>}
        </div>

        // OTRA OPCION SERIA JUGAR CON LA CLASE CSS Y TENEMOS MENOS CÓDIGO

        // <div className={isCircle ? 'circle' : 'triangle'}></div>
    )
}


export default Boolean;
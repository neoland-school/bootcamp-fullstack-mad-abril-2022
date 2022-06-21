

function EventsExample (){
    const handleSubmit  = (e => {
        e.preventDefault();
        console.log(e.target)
    })
    return (
        <div
            onMouseEnter={() => console.log('el rato entra')}
            onMouseLeave={() => console.log('el rato sale')}
            >
            <p onClick={e => console.log('Mi evento',e)}>Hola Events</p>
            <input 
            onChange={e =>console.log('Onchange',e.target.value)} 
            onKeyUp={()=> console.log('se ha levantado una tecla')} 
            type="text"  />
            <form action="" onSubmit={handleSubmit}>
                <input placeholder="dentro del form" type="text" />
                <button type="submit">Submit form</button>
            </form>
        </div>
    )
}

export default EventsExample;
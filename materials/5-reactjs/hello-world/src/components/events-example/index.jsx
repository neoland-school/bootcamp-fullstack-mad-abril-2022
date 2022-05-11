
// nativo --> addEventListener('click', e => console.log('Mi evento',e))

function EventsExample(){

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target);
    };

    return (
        <div 
            onMouseEnter={() => console.log('El raton entra')}
            onMouseLeave={() => console.log('El ratón sale')}
        >
            <p onClick={e => console.log('Mi evento',e)}>Hola Events</p>
            <input 
                onChange={e => console.log('Onchange:', e.target.value)}
                onKeyUp={e => console.log('Se ha levanto la tecla', e)}
            >
            </input>
            <form onSubmit={handleSubmit}>
                <input placeholder="detro del form"></input>
                <button  type="submit">Submit Form</button>
            </form>
        </div>
    )
}


export default EventsExample;
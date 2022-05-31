

// NECESITAMOS comunicación hijo-padre
function DemoForm({onAdd, onCancel}){

    const handleSubmit = e => {
        e.preventDefault(); // esto solo en eventos submit
        console.log(e.target); // ¿Qeu va a pintar esto? Es el formulario
        console.log(e.target.title); // ¿esto que me devuelve? Es el textarea
        console.log(e.target.title.value); // El valor que ha escrito el usuario
        // avisar a mi padre que añada una tarea
        onAdd(e.target.title.value);
    }

    const handleReset = e => {
        e.preventDefault();
        // avisar a mi padre de que no me pinte
        onCancel();
    }

    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <textarea required name="title"></textarea>
            <button type="submit">Add</button>
            <button type="reset">Cancel</button>
        </form>
    )
}

export default DemoForm;
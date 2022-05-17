import './style.css'


// 2ª aproximación: Usando Objetos
const statusCSSObj = { 
    // construimos un objeto con las claves son los nombres de la variable Status y los valores, en este caso, el modificador CSS
    Alive: 'alive',
    Death: 'death',
    unknown: 'unknown',
}


const statusCSSObjJSX = { 
    // construimos un objeto con las claves son los nombres de la variable Status y los valores, en este caso, el modificador CSS
    Alive: <p>Hola</p>,
    Death: <a></a>,
    unknown: <div></div>,
}

function MultipleStates({status}){ // status === 'Alive' or 'Death' os 'unknown'

    // 1ª aproximación: Switch Case
    // let statusCss = '';
    // switch(status){
    //     case 'Alive': statusCss = 'alive'; break;
    //     case 'Death': statusCss = 'death'; break;
    //     default: statusCss = 'unknown';
    // }
    const hello = <p>Hola chicos feliz semana</p>;

    const printMyDemo = (demo) => {
       return (
           <div>
            <a rel="noreferrer" target='_blank' href={demo === 'hola' ? 'https://www.google.com' : 'https://www.google.com/maps?saddr=My+Location&daddr=40.40675291054414,-3.7116748827246804'}>{demo === 'hola' ? 'Ir a google' : 'Irme a casa'}</a>
          </div>
       )
    };
    return (
        <div className={`status status--${statusCSSObj[status]}`} >
            {statusCSSObjJSX[status]}
            {hello}
            {'demo str'}
            {printMyDemo()}
            {printMyDemo('hola')}
        </div>
    )
}


export default MultipleStates;
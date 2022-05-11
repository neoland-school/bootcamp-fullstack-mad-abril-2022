
// Hello world fetch. Realizar una llamada GET a la siguiente URL 
// (https://run.mocky.io/v3/eb9fba1c-1871-475e-b7e4-6e414b436864) que tiene formato JSON. 
// Pintar el valor de su única propiedad en un p.


async function printPFromFetch () {
const request = await fetch('https://run.mocky.io/v3/eb9fba1c-1871-475e-b7e4-6e414b436864');
const data = await request.json();
    let p = document.createElement('p')
    p.textContent = data.hello;
    document.body.appendChild(p);
}

printPFromFetch();


// 2- Jugando con Arrays. Realizar una llamada GET a la siguiente 
// URL (https://run.mocky.io/v3/de056e3c-4e8c-42c7-a85f-85e2b0d8049f) y pintar los divs de los colores 
// de fondo que indica nuestro servidor.

/**
 * This function gets a json from a DB and prints a div with its color.
 * 
 * input: --
 * output: undefined
 * 
 * 1- Fetch from the given link.
 * 2- Transform the result from fetch to json. We get an array of objects.
 * 3- For each object:
 *      - Create a div
 *      - Set both width and heigth
 *      - Set background color getting the value of the key 'value'
 *      - Print the div in the DOM. 
 */
async function printDivFromFetch () {
    const request = await fetch('https://run.mocky.io/v3/de056e3c-4e8c-42c7-a85f-85e2b0d8049f');
    const data = await request.json();
    console.log(data)
    data.forEach(d => {
        let div = document.createElement('div')
        div.style.height = '100px';
        div.style.width = '100px';
        div.style.backgroundColor = d.value;
        document.body.appendChild(div);
    })
    
}

printDivFromFetch();


// EJER3- Listado de productos. Vamos a crear una página que pinte un listado de productos de telefonía movil. 
// Lo primero que tenemos que aprender es a leer la documentación de un API 
// (la url de acceso a la información que queremos de un servidor). 
// La docu se encuentra en la siguiente URL (https://dummyjson.com/docs/products). 

// Realizar lo siguiente:
// - Identificar la URL donde se encuentra la información que queremos pintar (listado de productos 30 primeros).
// - Realizar la llamada en nuestra aplicación
// - Para cada producto pintar una card como la que se muestra en la imagen.














// Opcional: Si nos fijamos bien en la respuesta ahora mismo estaríamos pintando 30 productos, 
// pero la respuesta nos dice que hay 100 disponibles. Leer el apartado Limit and skip products para entender 
// como podríamos modificar la URL y que el servidor nos devuelva los 100 productos a pintar.

// Vamos a modificar ahora el ejercicio y antes de pintar la lista quiero que aparezca una sección 
// que muestre la siguiente información:
// - Mostrar en un p cuantos TELEFONOS cuestan más de 500€
// - Mostrar  en otro p el precio medio de todos los productos
// - Mostrar la lista de nombres con los productos que tengan un rating superior a 4.5
// - Mostrar la lista de categorias de productos que existen
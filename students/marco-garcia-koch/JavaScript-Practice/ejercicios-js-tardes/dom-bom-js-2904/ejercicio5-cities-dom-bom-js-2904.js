
//5- Crea un documento HTML con un body vacío,  ahora crea un objeto de tipo city 
// que contenga {imagen, nombre de la ciudad, descripción}, 
// repite el proceso con varias ciudades de tu elección y con ello crea un array de ciudades, 
// ahora vamos a darle vida en nuestro html:(hard)

const arrCities = [
     londonCity = {
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/93/6a/89.jpg',
        new: 'new',
        date: '29-04-2022',
        name: 'London',
        description: `This is one of the most important cities of Europe. It receives millions of tourists every
                      year that enjoy its culture, history and food. You can visit many ancient monuments, museums,
                      and historical places that will leave you breathless. Do not forget to taste some of the most 
                      famous dishes.`
    },
    
     barcelonaCity = {
        image: 'https://blog.intripid.fr/wp-content/uploads/2017/12/barcelona-image-paysage.jpg',
        new: 'new',
        date: '29-04-2022',
        name: 'Barcelona',
        description: `This is one of the most important cities of Europe. It receives millions of tourists every
                      year that enjoy its culture, history and food. You can visit many ancient monuments, museums,
                      and historical places that will leave you breathless. Do not forget to taste some of the most 
                      famous dishes.`
    },
    
     estambulCity = {
        image: 'https://img.europapress.es/fotoweb/fotonoticia_20220309113915_420.jpg',
        new: 'new',
        date: '29-04-2022',
        name: 'Estambul',
        description: `This is one of the most important cities of Europe. It receives millions of tourists every
                      year that enjoy its culture, history and food. You can visit many ancient monuments, museums,
                      and historical places that will leave you breathless. Do not forget to taste some of the most 
                      famous dishes.`
    },
    
    
    vienaCity = {
        image: 'https://www.civitatis.com/blog/wp-content/uploads/2010/07/shutterstock_1450254959-1920x1280.jpg',
        new: 'new',
        date: '29-04-2022',
        name: 'Viena',
        description: `This is one of the most important cities of Europe. It receives millions of tourists every
                      year that enjoy its culture, history and food. You can visit many ancient monuments, museums,
                      and historical places that will leave you breathless. Do not forget to taste some of the most 
                      famous dishes.`
    }
];


//6- Crea una función llamada addCities  que reciba  un array  de ciudades como parámetro y lo añada al DOM.


/**
 * 
 * Función que crea la plantilla HTML de las cards y la imprime en el DOM. 
 * Recibe un objeto con los datos de una ciudad y crea la card que visualizamos en la pantalla.
 * 
 * Input: 1 objeto con las claves-valor de la ciudad.
 * Output: Undefined
 * 
 * 1- Recibe un objeto con los datos de la ciudad a pintar.
 * 2- Se generan cada uno de los elementos HTML de la card y se generan las clases CSS.
 * 3- Se obtiene la info del objeto y se añade en los elementos correspondientes
 * 4- Se manda genera la estructura HTML de la card definiendo padre e hijos.
 * 5- Se imprime la card en el DOM.
 */

function createCityCardTemplateHTML (city) {

    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    cardContainer.id = `${city.name.toLowerCase()}`;

    let imageAndTextContainer = document.createElement('div');
    imageAndTextContainer.classList.add('image-text-container');

    let cardImage = document.createElement('img');
    cardImage.classList.add('card-image');
    cardImage.src = `${city.image}`;

    let textImage = document.createElement('p');
    textImage.classList.add('text-image');
    textImage.textContent = 'NEW';

    let dateNameContainer = document.createElement('div');
    dateNameContainer.classList.add('date-name-container');

    let date = document.createElement('p');
    date.classList.add('date');
    date.textContent = `${city.date}`

    let cityName = document.createElement('h1');
    cityName.classList.add('city-name');
    cityName.textContent = `${city.name}`;

    let shareCircle = document.createElement('i');
    shareCircle.classList.add('fa-solid');
    shareCircle.classList.add('fa-share-nodes');

    let descriptionButtonContainer = document.createElement('div');
    descriptionButtonContainer.classList.add('description-button-container');

    let description = document.createElement('p');
    description.classList.add('description');
    description.textContent = `${city.description}`;

    let readMoreButton = document.createElement('button');
    readMoreButton.classList.add('read-more-button');
    readMoreButton.textContent = 'Read More';

    let body = document.querySelector('body');

    body.appendChild(cardContainer);
    cardContainer.appendChild(imageAndTextContainer);
    imageAndTextContainer.appendChild(cardImage);
    imageAndTextContainer.appendChild(textImage);
    cardContainer.appendChild(dateNameContainer);
    dateNameContainer.appendChild(date);
    dateNameContainer.appendChild(cityName);
    dateNameContainer.appendChild(shareCircle);
    cardContainer.appendChild(descriptionButtonContainer);
    descriptionButtonContainer.appendChild(description);
    descriptionButtonContainer.appendChild(readMoreButton);
};


/**
 * 
 * Función que trabaja con un array de objetos y llama a la función encargada de crear la plantilla HTML
 * e imprimir el resultado en el DOM
 * 
 * input: 1 array de objetos, siendo cada objeto una ciudad con sus claves-valor
 * output: undefined
 * 
 * 1- Obtenemos el array de objetos (ciudades)
 * 2- Para cada objeto, se llama a la función encargada de crear e imprimir la card de dicha ciudad en el DOM.
 */


function addCities (arr) {

    arr.forEach(c => createCityCardTemplateHTML(c));

};

addCities(arrCities);




//7- Crea una función llamada removeCity que reciba una ciudad como parámetro y borre del DOM la ciudad correspondiente.


/**
 * 
 * Función que recibe una ciudad como parámetro y la elimina del DOM.
 * 
 * Input: 1 Objeto --> Una ciudad
 * Output: Undefined
 * 
 * 1- Recibe un objeto como parametro.
 * 2- Obtenie del DOM el elemento HTML que tiene el ID que se requiere
 * 3- Borra dicho objeto (ciudad) del DOM.
 */


// function removeCity (city) {
//     let remove = document.getElementById(`${city.name.toLowerCase()}`);
//     remove.remove();
// }

// removeCity(arrCities[1]);


//8- Crea una función llamada removeAllCity la cual eliminará todas las ciudades de la web.


/**
 * 
 * Función que recibe una array de obejtos (ciudades) y llama a otra función que se encarga de 
 * eliminar una a una todas las ciudades del DOM.
 * 
 * Input: 1 array de objetos --> array de ciudades con sus claves-valor
 * Output: Undefined
 * 
 * 1- Recibe un array de objetos como parametro.
 * 2- Llama a la función removeCity, encargada de eliminar del DOM la ciudad que recibe como parámetro.
 */


// function removeAllCity (arr) {
//     arr.forEach(c => removeCity(c)); 
// }


// removeAllCity(arrCities);


// OTRA VERSION QUE NO DEPENDERIA DE NINGUNA OTRA FUNCION PARA BORRAR TODAS LAS CIUDADES DEL DOM SERIA:

/**
 * 
 * Función que recibe una array de obejtos (ciudades) y elimina todas las ciudades del DOM.
 * 
 * Input: 1 array de objetos --> array de ciudades con sus claves-valor
 * Output: Undefined
 * 
 * 1- Recibe un array de objetos como parametro.
 * 2- Se ejecuta un ciclo forEach para eliminar del DOM la ciudad que se recibe como parámetro
 *    en cada vuelta del ciclo.
 */

// function removeAllCityAlternative (arr) {
//     arr.forEach(c => {
//         let remove = document.getElementById(`${c.name.toLowerCase()}`);
//         remove.remove();
//     }); 
// }

// removeAllCityAlternative(arrCities);
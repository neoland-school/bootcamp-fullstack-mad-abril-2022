// Definir las propiedades que deben tener mis ciudades 
// para poder ser pintadas en nuestro sistema. 
// (Esto lo podéis hacer en un comentario)

/*
Propiedades de una ciudad:
- img
- nombre
- descripcion
- rating
- comments
- views
- moment
- background-color del body
- background-color footer
*/

const london = {
    
        name: 'London', 
        country: 'England',
        moment: '4 weeks ago',
        description: 'Lorem ipsum',
        backgroundColor: '#FE0C70',
        Views: 51784,
        comments: 329,
        rating: 4.5,
        img: 'https://neoland-school.slack.com/files/U024PKB36GL/F03CWBLTRT9/image.png'

};

const newYork = {
    
    name: 'New York', 
    country: 'United States',
    moment: '1 weeks ago',
    description: 'Lorem ipsum',
    backgroundColor: '#FD520C',
    Views: 51784,
    comments: 329,
    rating: 4.5,
    img: 'https://neoland-school.slack.com/files/U024PKB36GL/F03CWBLTRT9/image.png'
}
const marrakech = {
    
    name: 'Marrakech', 
    country: 'Morocco',
    moment: '2 weeks ago',
    description: 'Lorem ipsum',
    backgroundColor: '#04B43F',
    Views: 51784,
    comments: 329,
    rating: 4.5,
    img: 'https://neoland-school.slack.com/files/U024PKB36GL/F03CWBLTRT9/image.png'

}

const madrid = {
    
    name: 'Madrid', 
    country: 'Spain',
    moment: '5 weeks ago',
    description: 'Lorem ipsum',
    backgroundColor: '#EDE741',
    views: 657098,
    comments: 3229,
    rating: 4.9,
    img:'https://neoland-school.slack.com/files/U024PKB36GL/F03CWBLTRT9/image.png'

};



const cityList = [london, newYork, marrakech, madrid]; // Array de objetos

function printCityToHTML(city){ // dado un coche lo pinta en el HTML
    document.write(`
        <section class="city__container">
                <img class="image" src= 'https://neoland-school.slack.com/files/U024PKB36GL/F03CWBLTRT9/image.png'/>   
                <h4>${city.moment}</h4>
                <h1 class="title">${city.name}</h1>
                <p>${city.description}</p>
            <div class="numbersDown">
                <p>${city.views}</p>
                <p>${city.comments}</p>
                <p>${city.rating}</p>
            </div>
        </section>
    `);
}

cityList.forEach(city => printCityToHTML(city)); 

//  const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));



// Crear un objeto que tenga dos propiedades 
// ('demo'  de tipo string)  y ('hello' de tipo boolean). 
// Los valores serán 'hola' para demo y true para 'hello'.

/*
Entrada = crear un objeto con dos propiedades
Salida = 2 strings 'hola' y 'hello'
*/

const dosPropiedades = {
    demo: 'hola', 
    hello: true,
};

document.write(`<p>Saludar en español se dice ${dosPropiedades.demo} , this is ${dosPropiedades.hello}</p>`);


// Cambiar el valor de 'hello' a false.

dosPropiedades.hello = false;
document.write(`<p>Ahora el saludo resulta ser ${dosPropiedades.hello}</p>`);


// Crear un objeto que tenga dos propiedades , entre ellas una  de tipo number, 
// Imprime por pantalla el objeto y luego imprime por pantalla solo la 
// propiedad de tipo number. Repetir el proceso pero con propiedades 
// que tengan los tipos de datos string, boolean, null, undefined , 
// array, function, objects.(easy).

const objetoDosPropiedades = {
    numero: 23, 
    texto: 'jordan',
    bolean: true,
    nulo: null,
    sinDefinir: undefined,
    arrayo: [1,2],
    demoObj: { // podemos incluso meter un objeto dentro de otro
        textin:'aquiEstoy'
    },
    funciona: () => {} // podríamos meter una función. Esta es vacia pero puede ser cualquier funcion
};


document.write(`
    <p>${objetoDosPropiedades.texto}  ${objetoDosPropiedades.numero}</p>
      
`);
document.write(`<br>`)

document.write(`
    <p>${objetoDosPropiedades.bolean}  ${objetoDosPropiedades.nulo}   
    ${objetoDosPropiedades.sinDefinir}  ${objetoDosPropiedades.arrayo} 
     ${objetoDosPropiedades.demoObj.textin}  ${objetoDosPropiedades.funciona}</p>`);


    //  Crea una función que dado un string con una hora 
    //  (ej: 14:36:57) devuelva un objeto con la propiedad hora, 
    //  minutos y segundos e imprimelo por pantalla.(medium)

    

/*
Entrada=
Salida= objeto propiedad hora, minutos y segundos
*/

    function hora (h) {

        let reloj =  h.split(":");
        document.write(reloj);   //


        let objetoHora = {

            hora: reloj[0],
            minuto: reloj[1],
            segundo: reloj[2],
        }

         document.write(`${objetoHora.hour}`);
     }
        hora('14:36:57');
     


        // Crea una función que imprima por pantalla 
        // el 'nombre: valor' de cada propiedad del objeto  
        // (buscar mertodos de objeto ejmp Object Keys).(easy).

        /*
        -Entrada: funcion
        -Salida:  nombre 'valor' de cada propiedad el objeto
        */

        let obtjetoCambio = {
            numero: 1,
            nombre: 'Francisco',
            bolean: false,
        }
         
        function objetoReal (a) {
         console.log(Object.entries(a))

            //  document.write(objectkeys(obtjetoCambio));
        }
            
         console.log(objetoReal(obtjetoCambio));
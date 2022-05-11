/*
//1.-En un documento html vacio, crea un H2, luego ponle un texto y luego una clase que cambie de color, usando los métodos del objeto Document.

let h22 = document.createElement('div');

let texto = document.createTextNode('Este');
h22.appendChild(texto);

document.body.appendChild(h22);
*/

//==========================================

/*
//2.-El h2 creado previamente mételo dentro de un div usando los métodos del objeto Document.(easy)

let divi = document.createElement('div');
divi.id = 'content';
divi.className = 'note';

let text = document.createTextNode('Este es mi texto');
divi.appendChild(text);

document.body.appendChild(divi);

//==========================================
*/

/*
//3.-Elimina el div anterior con el metodo indicado desde javascript,  ahora crea un nuevo  div el cual tendrá dentro un enlace a  Google con un target _blank, un párrafo y una  lista de marca de coches ('SEAT', FORD Y CITROEN), usar metodos del objeto Document (create element....).(easy)

let divi = document.createElement('div');
divi.id = 'content';
divi.className = 'note';

let text = document.createTextNode('Este es mi texto');
divi.appendChild(text);

document.body.appendChild(divi);
//Elimina
const element = document.getElementById("content");
element.remove();


//Nuevo Div
let nuevoDiv = document.createElement('div');
nuevoDiv.id='content'

let enlace = document.createElement('a');
enlace.setAttribute("href", "http://www.google.es");
enlace.setAttribute("target","_blank");
let textoa =document.createTextNode('Google.co.ve');
enlace.appendChild(textoa);

nuevoDiv.appendChild(enlace);
//parrafo

let parrafo = document.createElement('p');

let tparrafo =document.createTextNode('Lista de carros');
parrafo.appendChild(tparrafo)

nuevoDiv.appendChild(parrafo);

//Lista
let ulList = document.createElement('ul');

let li1= document.createElement('li');
let lit1=document.createTextNode('Toyota');
ulList.appendChild(li1);
li1.appendChild(lit1);

let li2= document.createElement('li');
let lit2=document.createTextNode('Seat');
ulList.appendChild(li2);
li2.appendChild(lit2);

let li3= document.createElement('li');
let lit3=document.createTextNode('Ford');
ulList.appendChild(li3);
li3.appendChild(lit3);

let li4= document.createElement('li');
let lit4=document.createTextNode('Toyota');
ulList.appendChild(li4);
li4.appendChild(lit4);


nuevoDiv.appendChild(ulList)

document.body.appendChild(nuevoDiv);

//==========================================
*/

//4.-En un documento html crea un UL con un Atributo llamado "dom-demo" , dentro del UL deben ir 4 LI,  tendrán una class llamada "item", dos de ellos tendrán además  otra class llamada "special", un LI tendrá el atributo dom-demo  y por ultimo el cuarto elemento debe tener un id llamado "cuarto_elemento". El ejercicio será el siguiente:(medium)
//-Recuperar todos los li de la página y muéstralos por consola.
let prue1 = document.getElementsByTagName("li");
console.log(prue1);

//-Recuperar todos los elementos con class "item" y muéstralos por consola.
let prue2 = document.getElementsByClassName("item");
console.log(prue2);

//-Recuperar el elemento con id="cuarto_elemento" y muéstralo por consola.
let prue3 = document.getElementById("cuarto-elemento");
console.log(prue3);

// -Recuperar los elementos que tengan atributo  data-demo y muéstralo por consola (getAtribu....).
let prue4 = document.querySelector('.item + .special[dom-demo]');
console.log(prue4);

//NO ME SALIO...

// -Cambiar el texto de todos los elementos  que tengan la clase "special" a "texto de la clase Special cambiado".

let modificado = document.querySelectorAll('.special');
modificado.innerHTML ="texto de la clase Special cambiado";
let prue5 = document.getElementByClassName('special');
console.log("special")

// -Cambiar el tamaño de letra usando estilo en linea STYLE, de los elemento con atributo  data-demo.

// -Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último hijo del ul.

//========== OJO ----TERMINAR ---- OJO=======================//

//==========================================

/*
//5.-Crea un documento HTML con un body vacío,  ahora crea un objeto de tipo city que contenga {imagen, nombre de la ciudad, descripción}, repite el proceso con varias ciudades de tu elección y con ello crea un array de ciudades, ahora vamos a darle vida en nuestro html:(hard)

const guayana = {
  imagen:
    "https://primicia.com.ve/wp-content/uploads/2021/04/IMG-20210418-WA0018-730x524.jpg",
  nombre: "Ciudad Guayana",
  descripcion:
    "Ciudad Guayana es una ciudad del estado Bolívar, en Venezuela. En el año 2020 contaba con una población de 820 780 habitantes,2​ siendo la sexta ciudad más poblada de Venezuela",
fecha: '29 01 2022'
  };

const margarita = {
  imagen:
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/77/92/4a.jpg",
  nombre: "Isla de Margarita",
  descripcion:
    "La isla de Margarita, también llamada popularmente la «Perla del Caribe»,1​ se encuentra al sureste del mar Caribe, en el noreste venezolano y al norte de la península de Araya del estado Sucre.",
    fecha: '19 03 2022'
  };

const cartagena = {
  imagen: "https://cdn.getyourguide.com/img/location/5cced3a1a6f81.jpeg/88.jpg",
  nombre: "Cartagena de Indias",
  descripcion:
    "Cartagena de Indias, oficialmente Distrito Turístico y Cultural de Cartagena de Indias abreviado Cartagena de Indias, D. T. y C., es la capital del departamento de Bolívar, al norte de Colombia.",
    fecha: '07 08 2022'
  };

const laPalma = {
  imagen: "https://www.thegoodtime.es/images/2020/06/16/ViaLacteaLaPalma.jpg",
  nombre: "La Palma",
  descripcion:
    "La Palma, también apodada como La isla bonita y cuyo nombre histórico es San Miguel de La Palma , es una isla del océano Atlántico perteneciente a la Comunidad Autónoma de Canarias (España).",
    fecha: '30 11 2022'
  };


const ciudades = [guayana, margarita, cartagena, laPalma];

function cards(city){

    return city.map(v=>{


  let bigDiv = document.createElement("div");
  bigDiv.id =  "content";

  let divTop = document.createElement('div');
  divTop.id='divTop';

let image = document.createElement('img');
image.className ='foto';
image.src = `${v.imagen}`;
divTop.appendChild(image);

let nuevo = document.createElement('h3');
nuevo.className='fotoT';
let nuevoT = document.createTextNode('NEW');

let compartir =document.createElement('div')
compartir.id ='share';


divTop.appendChild(compartir);

nuevo.appendChild(nuevoT);

divTop.appendChild(nuevo);

  bigDiv.appendChild(divTop);

  //======================================================================

let midDiv =document.createElement('div');
midDiv.id = 'midDiv';
let fecha = document.createElement('p');
fecha.id ='date';

let fechaT = document.createTextNode(`${v.fecha}`);
fecha.appendChild(fechaT)

midDiv.appendChild(fecha);

let titulo = document.createElement(`h3`);
titulo.id ='titulo'
let tituloT = document.createTextNode(`${v.nombre}`);
titulo.appendChild(tituloT)
midDiv.appendChild(titulo);

let parrafo = document.createElement(`p`);
parrafo.id ='parrafo'

let parrafoT = document.createTextNode(`${v.descripcion}`);
parrafo.appendChild(parrafoT);

midDiv.appendChild(parrafo);

//==================================================

bigDiv.appendChild(midDiv);

let boton = document.createElement('button');
boton.id = 'boton';

let botonT = document.createTextNode('Read More');
boton.appendChild(botonT);

bigDiv.appendChild(boton);


  document.body.appendChild(bigDiv);

})
}
cards(ciudades)
*/

//==========================================

/*
//6.-Crea una función llamada addCities  que reciba  un array  de ciudades como parámetro y lo añada al DOM.


const guayana = {
  imagen:
    "https://primicia.com.ve/wp-content/uploads/2021/04/IMG-20210418-WA0018-730x524.jpg",
  nombre: "Ciudad Guayana",
  descripcion:
    "Ciudad Guayana es una ciudad del estado Bolívar, en Venezuela. En el año 2020 contaba con una población de 820 780 habitantes,2​ siendo la sexta ciudad más poblada de Venezuela",
fecha: '29 01 2022'
  };

const margarita = {
  imagen:
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/77/92/4a.jpg",
  nombre: "Isla de Margarita",
  descripcion:
    "La isla de Margarita, también llamada popularmente la «Perla del Caribe»,1​ se encuentra al sureste del mar Caribe, en el noreste venezolano y al norte de la península de Araya del estado Sucre.",
    fecha: '19 03 2022'
  };

const cartagena = {
  imagen: "https://cdn.getyourguide.com/img/location/5cced3a1a6f81.jpeg/88.jpg",
  nombre: "Cartagena de Indias",
  descripcion:
    "Cartagena de Indias, oficialmente Distrito Turístico y Cultural de Cartagena de Indias abreviado Cartagena de Indias, D. T. y C., es la capital del departamento de Bolívar, al norte de Colombia.",
    fecha: '07 08 2022'
  };

const laPalma = {
  imagen: "https://www.thegoodtime.es/images/2020/06/16/ViaLacteaLaPalma.jpg",
  nombre: "La Palma",
  descripcion:
    "La Palma, también apodada como La isla bonita y cuyo nombre histórico es San Miguel de La Palma , es una isla del océano Atlántico perteneciente a la Comunidad Autónoma de Canarias (España).",
    fecha: '30 11 2022'
  };


const ciudades = [guayana, margarita, cartagena, laPalma];

function addCities (a){

    return a.map(v=>{


  let bigDiv = document.createElement("div");
  bigDiv.id =  "content";

  let divTop = document.createElement('div');
  divTop.id='divTop';

let image = document.createElement('img');
image.className ='foto';
image.src = `${v.imagen}`;
divTop.appendChild(image);

let nuevo = document.createElement('h3');
nuevo.className='fotoT';
let nuevoT = document.createTextNode('NEW');

let compartir =document.createElement('div')
compartir.id ='share';


divTop.appendChild(compartir);

nuevo.appendChild(nuevoT);

divTop.appendChild(nuevo);

  bigDiv.appendChild(divTop);

  //======================================================================

let midDiv =document.createElement('div');
midDiv.id = 'midDiv';
let fecha = document.createElement('p');
fecha.id ='date';

let fechaT = document.createTextNode(`${v.fecha}`);
fecha.appendChild(fechaT)

midDiv.appendChild(fecha);

let titulo = document.createElement(`h3`);
titulo.id ='titulo'
let tituloT = document.createTextNode(`${v.nombre}`);
titulo.appendChild(tituloT)
midDiv.appendChild(titulo);

let parrafo = document.createElement(`p`);
parrafo.id ='parrafo'

let parrafoT = document.createTextNode(`${v.descripcion}`);
parrafo.appendChild(parrafoT);




midDiv.appendChild(parrafo);

//==================================================



bigDiv.appendChild(midDiv);

let boton = document.createElement('button');
boton.id = 'botonx';

let botonT = document.createTextNode('Read More');
boton.appendChild(botonT);

bigDiv.appendChild(boton);


  document.body.appendChild(bigDiv);

})
}
addCities (ciudades);

*/

/*
//7.-Crea una función llamada removeCity que reciba una ciudad como parámetro y borre del DOM la ciudad correspondiente.

const guayana = {
  imagen:
    "https://primicia.com.ve/wp-content/uploads/2021/04/IMG-20210418-WA0018-730x524.jpg",
  nombre: "Ciudad Guayana",
  descripcion:
    "Ciudad Guayana es una ciudad del estado Bolívar, en Venezuela. En el año 2020 contaba con una población de 820 780 habitantes,2​ siendo la sexta ciudad más poblada de Venezuela",
  fecha: "29 01 2022",
};

const margarita = {
  imagen:
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/77/92/4a.jpg",
  nombre: "Isla de Margarita",
  descripcion:
    "La isla de Margarita, también llamada popularmente la «Perla del Caribe»,1​ se encuentra al sureste del mar Caribe, en el noreste venezolano y al norte de la península de Araya del estado Sucre.",
  fecha: "19 03 2022",
};

const cartagena = {
  imagen: "https://cdn.getyourguide.com/img/location/5cced3a1a6f81.jpeg/88.jpg",
  nombre: "Cartagena de Indias",
  descripcion:
    "Cartagena de Indias, oficialmente Distrito Turístico y Cultural de Cartagena de Indias abreviado Cartagena de Indias, D. T. y C., es la capital del departamento de Bolívar, al norte de Colombia.",
  fecha: "07 08 2022",
};

const laPalma = {
  imagen: "https://www.thegoodtime.es/images/2020/06/16/ViaLacteaLaPalma.jpg",
  nombre: "La Palma",
  descripcion:
    "La Palma, también apodada como La isla bonita y cuyo nombre histórico es San Miguel de La Palma , es una isla del océano Atlántico perteneciente a la Comunidad Autónoma de Canarias (España).",
  fecha: "30 11 2022",
};

const ciudades = [guayana, margarita, cartagena, laPalma];
console.log(ciudades);

function borrar() {
  let borrador = ciudades.filter((c) => c.nombre != "Ciudad Guayana");
  console.log(borrador);
  addCities(borrador);
}
borrar();

function addCities(a) {
  return a.map((v) => {
    let bigDiv = document.createElement("div");
    bigDiv.id = "content";

    let divTop = document.createElement("div");
    divTop.id = "divTop";

    let image = document.createElement("img");
    image.className = "foto";
    image.src = `${v.imagen}`;
    divTop.appendChild(image);

    let nuevo = document.createElement("h3");
    nuevo.className = "fotoT";
    let nuevoT = document.createTextNode("NEW");

    let compartir = document.createElement("div");
    compartir.id = "share";

    divTop.appendChild(compartir);

    nuevo.appendChild(nuevoT);

    divTop.appendChild(nuevo);

    bigDiv.appendChild(divTop);

    //======================================================================

    let midDiv = document.createElement("div");
    midDiv.id = "midDiv";
    let fecha = document.createElement("p");
    fecha.id = "date";

    let fechaT = document.createTextNode(`${v.fecha}`);
    fecha.appendChild(fechaT);

    midDiv.appendChild(fecha);

    let titulo = document.createElement(`h3`);
    titulo.id = "titulo";
    let tituloT = document.createTextNode(`${v.nombre}`);
    titulo.appendChild(tituloT);
    midDiv.appendChild(titulo);

    let parrafo = document.createElement(`p`);
    parrafo.id = "parrafo";

    let parrafoT = document.createTextNode(`${v.descripcion}`);
    parrafo.appendChild(parrafoT);

    midDiv.appendChild(parrafo);

    //==================================================

    bigDiv.appendChild(midDiv);

    let boton = document.createElement("button");
    boton.id = "botonx";

    let botonT = document.createTextNode("Read More");
    boton.appendChild(botonT);

    bigDiv.appendChild(boton);

    document.body.appendChild(bigDiv);
  });
}

*/

//============================================



// let delCity = ciudades.filter((del)=> del.nombre !='Isla de Margarita');
// console.log(delCity);


/*
//8.-Crea una función llamada removeAllCity la cual eliminará todas las ciudades de la web.


const guayana = {
  imagen:
    "https://primicia.com.ve/wp-content/uploads/2021/04/IMG-20210418-WA0018-730x524.jpg",
  nombre: "Ciudad Guayana",
  descripcion:
    "Ciudad Guayana es una ciudad del estado Bolívar, en Venezuela. En el año 2020 contaba con una población de 820 780 habitantes,2​ siendo la sexta ciudad más poblada de Venezuela",
fecha: '29 01 2022'
  };

const margarita = {
  imagen:
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/77/92/4a.jpg",
  nombre: "Isla de Margarita",
  descripcion:
    "La isla de Margarita, también llamada popularmente la «Perla del Caribe»,1​ se encuentra al sureste del mar Caribe, en el noreste venezolano y al norte de la península de Araya del estado Sucre.",
    fecha: '19 03 2022'
  };

const cartagena = {
  imagen: "https://cdn.getyourguide.com/img/location/5cced3a1a6f81.jpeg/88.jpg",
  nombre: "Cartagena de Indias",
  descripcion:
    "Cartagena de Indias, oficialmente Distrito Turístico y Cultural de Cartagena de Indias abreviado Cartagena de Indias, D. T. y C., es la capital del departamento de Bolívar, al norte de Colombia.",
    fecha: '07 08 2022'
  };

const laPalma = {
  imagen: "https://www.thegoodtime.es/images/2020/06/16/ViaLacteaLaPalma.jpg",
  nombre: "La Palma",
  descripcion:
    "La Palma, también apodada como La isla bonita y cuyo nombre histórico es San Miguel de La Palma , es una isla del océano Atlántico perteneciente a la Comunidad Autónoma de Canarias (España).",
    fecha: '30 11 2022'
  };


const ciudades = [guayana, margarita, cartagena, laPalma];
console.log(ciudades);

function eliminarTodos(){
  ciudades.splice(0,ciudades.length);
  console.log(ciudades);
  cards(ciudades);
  }
  eliminarTodos();


function cards(city){

    return city.map(v=>{


  let bigDiv = document.createElement("div");
  bigDiv.id =  "content";

  let divTop = document.createElement('div');
  divTop.id='divTop';

let image = document.createElement('img');
image.className ='foto';
image.src = `${v.imagen}`;
divTop.appendChild(image);

let nuevo = document.createElement('h3');
nuevo.className='fotoT';
let nuevoT = document.createTextNode('NEW');

let compartir =document.createElement('div')
compartir.id ='share';


divTop.appendChild(compartir);

nuevo.appendChild(nuevoT);

divTop.appendChild(nuevo);

  bigDiv.appendChild(divTop);

  //======================================================================

let midDiv =document.createElement('div');
midDiv.id = 'midDiv';
let fecha = document.createElement('p');
fecha.id ='date';

let fechaT = document.createTextNode(`${v.fecha}`);
fecha.appendChild(fechaT)

midDiv.appendChild(fecha);

let titulo = document.createElement(`h3`);
titulo.id ='titulo'
let tituloT = document.createTextNode(`${v.nombre}`);
titulo.appendChild(tituloT)
midDiv.appendChild(titulo);

let parrafo = document.createElement(`p`);
parrafo.id ='parrafo'

let parrafoT = document.createTextNode(`${v.descripcion}`);
parrafo.appendChild(parrafoT);

midDiv.appendChild(parrafo);

//==================================================

bigDiv.appendChild(midDiv);

let boton = document.createElement('button');
boton.id = 'boton';

let botonT = document.createTextNode('Read More');
boton.appendChild(botonT);

bigDiv.appendChild(boton);


  document.body.appendChild(bigDiv);

})
}
cards(ciudades);

*/
//1- En un documento html vacio, crea un H2, luego ponle un texto y luego una clase que cambie de color, 
// usando los métodos del objeto Document.

let h2 = document.createElement('h2'); // Creo un h2 y lo guardo en la variable h2

h2.textContent = 'Este es mi primer h2 creado con JS'; // A h2 le añado un texto

h2.style.color = 'red'; // A h2 le añado color rojo

let body = document.querySelector('body'); // busco body en el DOM y lo guardo en la variable body

body.appendChild(h2); // a body le inserto dentro el elemento h2

// document.body.appendChild(h2); --> También podría hacerlo así directamente y mostraría el h2 en el DOM.


//2- El h2 creado previamente mételo dentro de un div usando los métodos del objeto Document.(easy)

let div = document.createElement('div'); // Creo un elemento div y lo guardo en la variable div

div.style.height = '100px';  // Le añado un alto a div
div.style.width = '100px'; // Le añado un ancho a div

div.appendChild(h2); // Inserto h2 dentro de div


// 3- Elimina el div anterior con el metodo indicado desde javascript,  
// ahora crea un nuevo  div el cual tendrá dentro un enlace a  Google con un target _blank, 
// un párrafo y una  lista de marca de coches ('SEAT', FORD Y CITROEN), 
// usar metodos del objeto Document (create element....).(easy)

div.remove(); // Elimino el div creado anteriormente, incluido el h2 que lleva dentro

let newDiv = document.createElement('div'); // Creo un nuevo div y lo guardo en la varibale newDiv

let a = document.createElement('a'); // Creo un elemento a y lo guardo en la variable a
a.href = 'https://google.com'; // A a le añado el link a google
a.target = '_blank'; // A a le añado la propiedad target _blank para que se abra en una pestaña nueva
a.textContent = 'Click aquí para ir a Google'; // A a le añado el texto que tendrá el link

let p = document.createElement('p'); // Creo un elemento p y lo guardo en la varibale p
p.textContent = 'Mi primer párrafo creado e insertado en el DOM con JS'; // A p le añado un texto

let ul = document.createElement('ul'); // Creo un elemento de lista desordenada y lo guardo en la variable ul

let liOne = document.createElement('li'); // Creo 3 list items y les añado su respectivo contenido
liOne.textContent = 'SEAT';

let liTwo = document.createElement('li');
liTwo.textContent = 'FORD';

let liThree = document.createElement('li');
liThree.textContent = 'CITROEN';

body.appendChild(newDiv); // Inserto newDiv dentro del body
newDiv.appendChild(a); // Inserto a, p y la lista dentro del newDiv
newDiv.appendChild(p);
newDiv.appendChild(ul);
newDiv.appendChild(liOne);
newDiv.appendChild(liTwo);
newDiv.appendChild(liThree);



// 4- En un documento html crea un UL con un Atributo llamado "dom-demo" , dentro del UL deben ir 4 LI,  
// tendrán una class llamada "item", dos de ellos tendrán además  otra class llamada "special", 
// un LI tendrá el atributo dom-demo  y por ultimo el cuarto elemento debe tener un id llamado "cuarto_elemento". 
// El ejercicio será el siguiente:(medium)


let ulNew = document.createElement('ul'); // Creo un elemento de lista desordenada
ulNew.setAttribute('dom-demo', '');

let firstLi = document.createElement('li'); // Creo 4 list items y les añado su respectivo contenido
firstLi.textContent = 'ONE';                
firstLi.classList.add('item','special'); // Añado las clases item y special


let secondLi = document.createElement('li');
secondLi.textContent = 'TWO';
secondLi.classList.add('item','special'); // Añado las clases item y special

let thirdLi = document.createElement('li');
thirdLi.textContent = 'THREE';
thirdLi.classList.add('item'); // Añado la clase item
thirdLi.setAttribute('dom-demo', ''); // Añado el atributo dom-demo

let fourthLi = document.createElement('li');
fourthLi.textContent = 'FOUR';
fourthLi.classList.add('item'); // Añado la clase item
fourthLi.id = 'cuarto_elemento'; // Añado un ID

body.appendChild(ulNew); // Inserto la lista ulNew en el body
ulNew.appendChild(firstLi); // Inserto cada uno de los 4 li dentro de la lista ulNew
ulNew.appendChild(secondLi);
ulNew.appendChild(thirdLi);
ulNew.appendChild(fourthLi);




//4.1- Recuperar todos los li de la página y muéstralos por consola.

let getAllLi = document.querySelectorAll('li'); // recupero del DOM todos los li

console.log(getAllLi); // Lo imprimo por consola




//4.2- Recuperar todos los elementos con class "item" y muéstralos por consola.

let getLiItemClass = document.querySelectorAll('.item'); // recupero del DOM todos los li que tiene clase .item

console.log(getLiItemClass); // Lo imprimo por consola




//4.3- Recuperar el elemento con id="cuarto_elemento" y muéstralo por consola.

let getLiWithID = document.getElementById('cuarto_elemento'); // recupero del DOM el li con ID - cuarto-elemento

console.log(getLiWithID); // Lo imprimo por consola



//4.4- Recuperar los elementos que tengan atributo data-demo y muéstralo por consola (getAtribu....).

// recupero del DOM elemento con un atributo custom -> data-demo
let getElementsWithCustomAttribute = document.querySelectorAll('[dom-demo]'); 

console.log(getElementsWithCustomAttribute); // Lo imprimo por consola



//4.5 Cambiar el texto de todos los elementos  que tengan la clase "special" 
// a "texto de la clase Special cambiado".

let elemetsSpecialClass = document.querySelectorAll('.special'); // Obtengo los elementos con clase special

elemetsSpecialClass.forEach(e => e.textContent = 'HE CAMBIADO EL TEXTO DE ESTOS ELEMENTOS'); // Cambio el texto



//4.6- Cambiar el tamaño de letra usando estilo en linea STYLE, de los elemento con atributo  data-demo.
// Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último hijo del ul.

let elemetsDomDemo = document.querySelectorAll('[dom-demo]'); // Obtengo los elementos con atributo dom-demo

elemetsDomDemo.forEach(e => e.style.fontSize = '2rem'); // Cambio el tamaño de la letra

let newLi = document.createElement('li'); // Creo un nuevo elemento li
newLi.id = 'CREADO_CUSTOM'; // Le añado un ID
newLi.textContent = 'Nuevo elemento añadido al final de la lista'; // Le añado texto
ulNew.appendChild(newLi); // Lo inserto al final de la lista ulNew

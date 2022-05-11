/* 
 En un documento html vacio, crea un H2, 
 luego ponle un texto y luego una clase que cambie de color, usando 
 los métodos del objeto Document.
*/

const h2 = document.createElement("h2");
document.body.appendChild(h2);
h2.textContent = "Ejercicio uno. Crear un h2";
h2.style = "color:green";

const div= document.createElement("div");
div.appendChild(h2);
document.body.appendChild(div);
div.remove();



 /*El h2 creado previamente mételo dentro de un div usando los métodos del objeto Document.(easy)*/
document.write(`<h2>Ejercicio 2</h2>`)

/*Elimina el div anterior con el metodo indicado desde javascript,  ahora crea un nuevo  div el cual 
tendrá dentro un enlace a  Google con un target _blank,
 un párrafo
  y una  lista de marca de coches ('SEAT', FORD Y CITROEN), 
 usar metodos del objeto Document (create element....).(easy)
      <div 
      <a href="https://example.com">Website</a>
                <p>PARRAFO</p>
                <li>SEAT</li>
                <li>FORD</li>
                
                </div>
 

const nuevo_div = document.createElement("div");
document.body.appendChild(nuevo_div);

const p = document.createElement("p");
document.body.appendChild(p);
const li = document.createElement("li");
document.body.appendChild(li);
li.textContent = "FORD";
const li_seat = document.createElement("li");
document.body.appendChild(li_seat);
li_seat.textContent = "SEAT";
const li_opel = document.createElement("li");
document.body.appendChild(li_opel);
li_opel.textContent = "OPEL";
const a = document.createElement("a");
document.body.appendChild(a);
a.setAttribute("href", "https://www.google.es/")
a.setAttribute("target", "_blank");


En un documento html crea un UL con un Atributo llamado "dom-demo" , dentro del UL deben ir 4 LI,  
tendrán una class llamada "item", dos de ellos tendrán además  otra class llamada "special", un LI 
tendrá el atributo dom-demo  y por ultimo el cuarto elemento debe tener un id llamado "cuarto_elemento". 
El ejercicio será el siguiente:(medium)*/


const ul = document.createElement("ul");
document.body.appendChild(ul);
ul.setAttribute("class","dom-demo");
const li_1 = document.createElement("li");
ul.appendChild(li_1);
li_1.textContent = "PRIMER LI";
li_1.classList.add("item", "special")
const li_2 = document.createElement("li");
ul.appendChild(li_2);
li_2.textContent = "SEGUNDO LI";
li_2.classList.add("item", "special") 
const li_3 = document.createElement("li");
ul.appendChild(li_3);
li_3.textContent = "TERCER LI";
li_3.classList.add( "item","special") 
const li_4 = document.createElement("li");
ul.appendChild(li_4);
li_4.textContent = "CUARTO LI";
li_4.classList.add("item", "special") 
li_4.id = "cuarto_elemento";  

/*Recuperar todos los li de la página y muéstralos por consola.*/

const li = document.getElementsByTagName("li");

console.log()
/*Recuperar todos los elementos con class "item" y muéstralos por consola.*/

const item = document.getElementsByClassName("item");
  console.log()

/*Recuperar el elemento con id="cuarto_elemento" y muéstralo por consola.

*/
  const id = document.getElementById("cuarto_elemento");


console.log()

/*
/*Recuperar los elementos que tengan atributo  dom-demo y muéstralo por consola (getAtribu....).*/

const demo = document.querySelectorAll('[name="dom-demo"]');

console.log()

/*
Cambiar el texto de todos los elementos que tengan la clase "special" a "texto de la clase Special cambiado".*/


const clase_special = document.querySelectorAll('.special');

clase_special.forEach(element => {
  element.textContent = 'Texto de la clase Special actualizado.';
});


/*Cambiar el tamaño de letra usando estilo en linea STYLE, de los elemento con atributo  dom-demo.*/


const dom = document.querySelector('.dom-demo');


dom.style = "font-size: 1.5rem";
console.log(dom)

/*Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último hijo del ul.*/

const li_id = document.createElement("li");
ul.appendChild(li_id);
li_id.id = "CREADO_CUSTOM";  
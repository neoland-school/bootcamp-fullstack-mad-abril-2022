
/* Crea una variable de todos los tipos primitivos de javascript */

let str = "hola mundo";
let num = 123;
let yes = true;
let no = false;

/* y mediante el document.write escribe por pantalla el tipo.*/

document.write(typeof str); 
document.write("<br>");
document.write(typeof num);
document.write("<br>");
document.write(typeof yes);
document.write("<br>");
document.write(typeof no);
document.write("<br>");

/* Introduce un texto en prompt y este debe aparecer en un alert. */

let a = prompt("Introduce tu nombre")
alert(a)

document.write(a)
document.write("<br>")

/* Crear dos variables con tu nombre y apellido de tipo string y concatenalas con el operador +  */

let nam = "Bryan"
let surname = "Paucarima"

document.write(nam+" "+surname)
document.write("<br>")

/* y luego repite  la operación de concatenación pero con plantillas literales, el resultado debes pintarlo en un h1 mediante el write.*/

document.write(`<h1> Mi nombre es ${nam} ${surname} </h1>`)
document.write("<br>")

/* Imprimir por pantalla la longitud del string resultante del ejercicio anterior. */


let fullname = nam+surname 
document.write(`La longitud del string anterior es `+ fullname.length)
document.write("<br>")
document.write("<br>")
document.write("<br>")


/* Mediante prompt guarda una variable de tipo string que sea un color, pinta un div de 150 x 150 que contenga el color indicado en el prompt.*/

let color = prompt("color");
let div = `<div Style="width:150px; height:150px; background-color:${color};"></div>`
document.write(div)



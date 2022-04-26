/*Crea una variable de todos los tipos primitivos de javascript y mediante el document.write escribe por pantalla el tipo.*/

let num = 123
let str = "Hola"
let bool = false

document.write(typeof num);
document.write(typeof str);
document.write(typeof bool);

typeof 123

/*ntroduce un texto en prompt y este debe aparecer en un alert.*/
let valor = prompt('introduce un valor');

alert(valor)

/*Crear dos variables con tu nombre y apellido de tipo string y concatenalas con el operador y luego repite  la operación con plantillas literales, pinta en un h1 mediante el write el resultado.*/

let nam = "Judith"
let surn = "Prieto"

document.write('<br>');

document.write(nam+' '+surn);
document.write('<br>');

document.write(`Mi nombre es ${nam} ${surn}`);

let na = "Judith";
let sur = "Prieto";


document.write(`<h1>Mi nombre es ${nam} ${surn}</h1>`)

let apellido = na+sur;

/*Imprimir por pantalla la longitud del string resultante del ejercicio anterior.*/

console.log('La longitud es ' + na.length + ' code units long');

document.write('La longitud de mi nombre y apellido es '+ apellido.length + ' caracteres' );

/*Mediante prompt guarda una variable de tipo string que sea un color, pinta un div de 150 x 150 que contenga el color indicado en el prompt.*/

let color = prompt('Escribe un color');


document.write(`<div style= "height: 150px; width:150px; background-color:${color};"</div>`)

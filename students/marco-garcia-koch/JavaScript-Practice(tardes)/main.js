// 1. Crea una variable de todos los tipos primitivos de javascript y mediante el document.write escribe 
//     por pantalla el tipo.

const number = 123;
const string = 'Hola Mundo';
const boolean = false;
const empty = undefined;
const noValue = null;
const infinite = Infinity;

document.write(typeof number + '<br>');
document.write(typeof string + '<br>');
document.write(typeof boolean + '<br>');
document.write(typeof empty + '<br>');
document.write(typeof noValue + '<br>');
document.write(typeof infinite + '<br>');

// 2. Introduce un texto en prompt y este debe aparecer en un alert.

const promptText = prompt('Escribe un texto');

alert(promptText);

// 3. Crear dos variables con tu nombre y apellido de tipo string y concatenalas con el operador y luego 
// repite  la operación con plantillas literales, pinta en un h1 mediante el write el resultado.

const nombre = 'Marco ';
const apellidos = 'García Koch';

const resultado = nombre + apellidos;

document.write(`<h1>${resultado}</h1>`);

// 4. Imprimir por pantalla la longitud del string resultante del ejercicio anterior.

document.write(resultado.length);

// 5. Mediante prompt guarda una variable de tipo string que sea un color,
//  pinta un div de 150 x 150 que contenga el color indicado en el prompt.

const color = prompt('Escribe un color');

document.write(`<div style="height:150px; width:150px; background-color:${color}"></div>`);
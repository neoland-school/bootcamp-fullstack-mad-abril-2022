// Crea una variable de todos los tipos primitivos de javascript y mediante el document.write escribe por pantalla el tipo.

let varString = 'Hola';

let varNum = 111;

let yes = true;
let no = false;

let varUndefined;

let varNull = null;

document.write(typeof varString);
document.write('<br>');
document.write(typeof varNum);
document.write('<br>');
document.write(typeof yes);
document.write('<br>');
document.write(typeof no);
document.write('<br>');
document.write(typeof varUndefined);
document.write('<br>');
document.write(typeof varNull);
document.write('<br>');
// Introduce un texto en prompt y este debe aparecer en un alert.

let varPrompt = prompt('Introduce una frase')
alert(varPrompt)

// Crear dos variables con tu nombre y apellido de tipo string y concatenalas con el operador +  y luego repite  la operación de concatenación pero con plantillas literales, el resultado debes pintarlo en un h1 mediante el write.

let varNombre = ('Laura')
let varApellido = ('Lagares')

document.write(varNombre+' '+varApellido);
document.write('<br>');
document.write(`<h1>Mi nombre es ${varNombre} ${varApellido}</h1>`)


// Imprimir por pantalla la longitud del string resultante del ejercicio anterior

let varNombrecompleto = (varNombre+varApellido);
document.write(varNombrecompleto.length);
document.write('<br>');


// Mediante prompt guarda una variable de tipo string que sea un color, pinta un div de 150 x 150 que contenga el color indicado en el prompt.

let varColor = prompt ('Enter a color:');
let varDiv = `<div Style="width:150px; height:150px; background-color:${varColor};"></div>`;
document.write(varDiv);
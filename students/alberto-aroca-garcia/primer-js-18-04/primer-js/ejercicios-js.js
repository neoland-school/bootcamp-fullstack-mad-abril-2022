// 1.Crea una variable de todos los tipos primitivos de javascript y mediante el document.write escribe por pantalla el tipo.
let str = 'hola'; //string
let num = 123; //number
let bignum = BigInt(12345678901234567890); //bigint
let bool = true; //booleano

document.write('<p>'+typeof str+'</p>'); 
document.write('<p>'+typeof num+'</p>');
document.write('<p>'+typeof bignum+'</p>');
document.write('<p>'+typeof bool+'</p>');

// 2.Introduce un texto en prompt y este debe aparecer en un alert.

let input = prompt('Intruduzca un texto: ');
alert(input);


// 3.Crear dos variables con tu nombre y apellido de tipo string y concatenalas con el operador y luego repite  la operación con plantillas 
// literales, pinta en un h1 mediante el write el resultado.

const namee = 'Alberto';
const apellido = 'Aroca';

document.write('<h1>Mi nombre es '+namee+' '+apellido+'</h1>');

document.write(`<h2>Mi nombre es ${namee} ${apellido} </h2>`);


// 4.Imprimir por pantalla la longitud del string resultante del ejercicio anterior.

console.log('<p>La longitud del ejercicio anterior es: '+ namee.length +' '+apellido.length+' </p>');


// 5.Mediante prompt guarda una variable de tipo string que sea un color, pinta un div de 150 x 150 que contenga el color indicado en el prompt.

let color = prompt('Introduce el nombre de un color en ingles: ');

document.write('<p style="height: 150px; width: 150px; background-color: '+color+'; "></p>');
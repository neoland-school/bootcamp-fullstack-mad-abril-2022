//Crea una variable de todos los tipos primitivos de javascript y mediante el document.write escribe por pantalla el tipo.
let num = 1;
let cadena ="cadenas";
let boolean = true;


document.write(`${num}`);
document.write(`<br>${cadena}`);
document.write(`<br>${boolean}`)

//Introduce un texto en prompt y este debe aparecer en un alert.
let ingreso = prompt('Ingresa tu ciudad');
alert(ingreso);

//Crear dos variables con tu nombre y apellido de tipo string y concatenalas con el operador y luego repite  la operación con plantillas literales, pinta en un h1 mediante el write el resultado.
let nom='Luis'
let ape='Gonzalez'
let conca = (nom + " " + ape);
document.write(`<br>${conca}`);
let lite = `<h1>${nom } ${ape}</h1>`;
document.write(`<br>${lite}`);


//Imprimir por pantalla la longitud del string resultante del ejercicio anterior.
let long = conca.length;
document.write(`${long}<br>`);

//Mediante prompt guarda una variable de tipo string que sea un color, pinta un div de 150 x 150 que contenga el color indicado en el prompt.

let colo = prompt('Ingresa un color: ');

document.write(`<div style="width:150px; height:150px; color:#fff; background-color:${colo}";>1000</div>`)




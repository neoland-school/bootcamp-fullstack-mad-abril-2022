// 1- Crear dos variables a y b con valores 15 y 34 respectivamente. 
// Mostrar un p en el HTML con el resultado de la suma, resta, multiplicación, y potencia entre a y b. 
// Además mostrar el resto de la división de b y a .


const a = 15;
const b = 34;

document.write(`<p>Ejercicio 1: suma ${a+b}, resta ${a-b}, multiplicación ${a*b} y potencia ${a**b}`);
document.write(`<p>El resto de la división entre a y b es ${b%a}</p>`);


// 2 - Con las variables anterior mostrar un p indicando si a es par y si b es par

const IsAPar = a % 2 === 0;
const IsBPar = b % 2 === 0;

document.write(`<p>¿La variable 'a' es PAR? ${IsAPar}. ¿La variable 'b' es PAR? ${IsBPar}</p>`);


// 3 - Con variables anteriores mostrar un div de 50x50px rojo si la variable es par y 
// verde si la variable es impar

const aDivColor = IsAPar ? 'red' : 'green';
const bDivColor = IsBPar ? 'red' : 'green';

document.write(`<div style="height:50px; width:50px; background-color:${aDivColor}"></div>`)
document.write(`<div style="height:50px; width:50px; background-color:${bDivColor}"></div>`)


// 4 - Solicitar al usuario un número (n) y crear un div de tamaño n px

let numeroParaDiv = prompt('Escriba un numero');

document.write(`<div style="height:${numeroParaDiv}px; width:${numeroParaDiv}px; border: 1px solid black;"></div>`);


// 5 - Solicitar dos números al usuario y mostrar en un p el mayor de ellos.

let numeroUno = prompt('Escriba el primero número');
let numeroDos = prompt('Escriba el segundo número');

numeroUno = parseInt(numeroUno);
numeroDos = parseInt(numeroDos);

document.write(`El mayor de los dos números es: ${numeroUno > numeroDos ? numeroUno : numeroDos}`);

// 6. Solicitar al usuario una frase y:
//  si la longitud de la frase es par mostrar un div rojo que tenga una animación de moverse 300px a la derecha 
// durante 1 segundo e infinita
// Si no mostrar un div con un linear gradient  (generar el que os de la gana) y que tenga una animación de rotación sobre el eje Z de 360º en 800ms infinita

// Pista: utilizar clases CSS para los dos tipos de animación y poner una clase u otra en función de la condicion

let phrase = prompt('Escriba una frase');

let phraseLenght = phrase.length;

let isEven = phraseLenght % 2 === 0;

const animation = `<div class="box ${isEven ? 'moverse' : 'rotar'}"></div>`; 

document.write(animation);







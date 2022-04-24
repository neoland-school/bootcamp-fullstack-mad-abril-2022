let a = 15;
let b = 34;

const suma = a+b;
const resta = a-b;
const producto = a*b;
const potencia = a**b;
const resto = b%a;
const para = a%2===0 
const parb = b%2===0 
const colorA = para ? `red`: `green`;
const colorB = parb ? `red`: `green`;


document.write("<p> La suma de a y b es </p>"+ suma)
document.write("<p> La resta de a y b es </p>" + resta)
document.write("<p> La multiplicacion de a y b es </p>" + producto)
document.write("<p> El resulto de a eleveado a b es </p>" + potencia)
document.write("<p> El resto de b dividido en a </p>" + resto)
document.write("<p> a es par </p>" + para)
document.write("<p> b es par </p>" + parb)
document.write(`<div style="width:50px; height:50px; background-color:${colorA}"></div>`)
document.write(`<div style="width:50px; height:50px; background-color:${colorB}"></div>`)

/**Solicitar al usuario un número (n) y crear un div de tamaño n px */

const size = prompt("Escribe el tamaño del cuadrado");
document.write(`<div style="width:${size}px; height:${size}px; border:4px solid blue;"></div>`)

/**
 * Solicitar dos números al usuario y mostrar en un p el mayor de ellos
 */

const numOne = parseFloat(prompt("Introduzca el primer numero"))
const numTwo = parseFloat(prompt("Introduzca el segundo nunmero"))

document.write(`<p>El mayor es: ${numOne>=numTwo?numOne:numTwo} </p>`)

/**
 * Solicitar al usuario una frase y:
 si la longitud de la frase es par mostrar un div rojo que tenga una animación de moverse 300px a la derecha durante 1 segundo e infinita
Si no mostrar un div con un linear gradient  (generar el que os de la gana) y que tenga una animación de rotación sobre el eje Z de 360º en 800ms infinita
Pista: utilizar clases CSS para los dos tipos de animación y poner una clase u otra en función de la condicion
 */

const sentence = prompt (`Introduzca una frase`);
const isSentenceEven = sentence.length%2 ===0; /** la longitud se encuentra en .lenght */

const output = `<div class="box ${isSentenceEven ? 'sentence-even' : 'sentence-odd'}"></div>`;
document.write(output);
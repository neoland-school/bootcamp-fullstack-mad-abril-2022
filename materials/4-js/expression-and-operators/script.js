/*
* Crear dos variables a y b con valores 15 y 34 respectivamente. 
  Mostrar un p en el HTML con el resultado de la suma, resta, multiplicación, y potencia entre a y b. 
  Además mostrar el resto de la división de b y a .
*/

const a = 15;
const b = 34;

document.write(`<p>Suma: ${a+b}</p>`);
document.write(`<p>Resta: ${a-b}</p>`);
document.write(`<p>Multiplicación: ${a*b}</p>`);
document.write(`<p>Potencia: ${a**b}</p>`);
document.write(`<p>Resto: ${b%a}</p>`);

/**
 * Con las variables anterior mostrar un p indicando si a es par y si b es par
 */

const isAEven = a%2 === 0; // devuelve true si a es par y false si es impar
const isBEven = b%2 === 0; // devuelve true si b es par y false si es impar

document.write(`<p>¿Es A Par?: ${isAEven}</p>`);
document.write(`<p>¿Es B Par?: ${isBEven}</p>`);

/**
 * Con variables anteriores mostrar un div de 50x50px:
 *  - rojo si la variable es par 
 *  - verde si la variable es impar
 */
const colorA = isAEven ? 'red' : 'green';
const colorB = isBEven ? 'red' : 'green';

document.write(`<div style="width:50px; height:50px; background-color:${colorA}"></div>`);
document.write(`<div style="width:50px; height:50px; background-color:${colorB}"></div>`);


/**
 *  Solicitar al usuario un número (n) y crear un div de tamaño n px
 */

const size = prompt('Escribe el tamaño del cuadrado');
document.write(`<div style="width:${size}px; height:${size}px; border: 4px solid blue;"></div>`);

/**
 * Solicitar dos números al usuario y mostrar en un p el mayor de ellos
 */
const numOne = parseFloat(prompt('Introduzca el primer número'));
const numTwo = parseFloat(prompt('Introduzca el segundo número'));

document.write(`<p>El mayor es: ${numOne >= numTwo ? numOne : numTwo}</p>`);

/**
 *  Solicitar al usuario una frase y:
     - si la longitud de la frase es par mostrar un div rojo que tenga una animación de moverse 300px a la derecha durante 1 segundo e infinita
     - Si no mostrar un div con un linear gradient  (generar el que os de la gana) y que tenga una animación de rotación sobre el eje Z de 360º en 800ms infinita
     - Pista: utilizar clases CSS para los dos tipos de animación y poner una clase u otra en función de la condicion
 */

const sentence = prompt('Introduzca una frase');
const isSentenceEven = sentence.length%2 === 0; // la longitud se encuentra en .length

// pongo una clase css u otra en función de la condicion
const output = `<div class="box ${isSentenceEven ? 'sentence-even' : 'sentence-odd'}"></div>`;
document.write(output);
    

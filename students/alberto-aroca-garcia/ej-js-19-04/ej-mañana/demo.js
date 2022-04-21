// 1. Crear dos variables a y b con valores 15 y 34 respectivamente. Mostrar un p en el HTML con el resultado de la suma, resta, multiplicación, 
// y potencia entre a y b. Además mostrar el resto de la división de b y a.

const a = 15;
const b = 34;

const suma = a + b;
const resta = a - b;
const mult = a * b;
const pot = a ** b;
const resto = b % a;

document.write('<p>'+suma+'</p> <p>'+resta+'</p>  <p>'+mult+'</p>  <p>'+pot+'</p>  <p>'+resto+'</p>');

// document.write(`<p>Suma: ${a+b}</p>);
// document.write(`<p>Resta: ${a-b}</p>);
// document.write(`<p>Multiplicacion: ${a*b}</p>);
// document.write(`<p>potencia: ${a**b}</p>);
// document.write(`<p>resto: ${b%a}</p>);

// 2. Con las variables anterior mostrar un p indicando si a es par y si b es par.

const isAEven = a%2 === 0; //devuelve true si a es par y false si es impar
const isBEven = b%2 === 0; //devuelve true si b es par y false si es impar

document.write(`<p>¿Es A par?: ${isAEven}</p>`);
document.write(`<p>¿Es B par?: ${isBEven}</p>`);


// 3. Con variables anteriores mostrar un div de 50x50px rojo si la variable es par y verde si la variable es impar

const colorA = isAEven ? 'red' : 'green';
const colorB = isBEven ? 'red' : 'green';

document.write(`<div style="width:50px; height:50px; background-color:${colorA}"></div>`);
document.write(`<div style="width:50px; height:50px; background-color:${colorB}"></div>`);


// 4. Solicitar al usuario un número (n) y crear un div de tamaño n px.

const size = prompt('Escribe el tamaño del cuadrado: ');

document.write(`<div style="width:${size}px; heigth:${size}px; background-color:blue;></div>`);


// 5. Solicitar dos números al usuario y mostrar en un p el mayor de ellos.

const numA = parseFloat(prompt('Introduzca el primer número: '));
const numB = parseFloat(prompt('Introduzca el segundo número: '));

document.write(`<p>El mayor es: ${numA >= numB ? numA : numB}</p>`);


// 6. Solicitar al usuario una frase y:
// si la longitud de la frase es par mostrar un div rojo que tenga una animación de moverse 300px a la derecha durante 1 segundo e infinita
// Si no mostrar un div con un linear gradient  (generar el que os de la gana) y que tenga una animación de rotación sobre el eje Z de 360º 
// en 800ms infinita.
// Pista: utilizar clases CSS para los dos tipos de animación y poner una clase u otra en función de la condicion.


const sentence = prompt('Introduzca una frase: ');
const isSentenceEven = sentence.length%2 === 0; //la longuitud se encuentra en .length
const output = `<div>`





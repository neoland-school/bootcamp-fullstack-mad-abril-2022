// 1.Crear dos variables a y b con valores 15 y 34 respectivamente. Mostrar un p en el HTML con el resultado de la suma, resta, multiplicación, y potencia entre a y b. Además mostrar el resto de la división de b y a . 
//Se declara const porque no cambia el valor 

const a = 15;
const b = 34;

document.write(`<p>Suma: ${a+b} </p>`);

document.write(`<p>Resta: ${a-b} </p>`);

document.write(`<p>Multiplicación: ${a*b} </p>`);

document.write(`<p>Potencia: ${a**b} </p>`);

document.write(`<p>División: ${a/b} </p>`);

document.write(`<p>Resto de la división: ${b%a} </p>`);


// 2.Con las variables anterior mostrar un p indicando si a es par y si b es par

const a_tipo = a%2;
document.write(`<p>${a_tipo}</p>`);

const b_tipo = b%2;
document.write(`<p>${b_tipo}</p>`);


const a_par = a_tipo===0 ? 'par' : 'impar';
document.write(`<p>La variable a es ${a_par}`);

const b_par = b_tipo===0 ? 'par' : 'impar';
document.write(`<p>La variable b es ${b_par}`);


const isAEven = a%2 === 0;
const isBEven = b%2 === 0;

document.write(`<p>¿Es A par?: ${isAEven} </p>`)
document.write(`<p>¿Es B par?: ${isBEven} </p>`)

// 3. Con variables anteriores mostrar un div de 50x50px rojo si la variable es par y verde si la variable es impar

const colorA = isAEven? 'red' : 'green';
const colorB = isBEven? 'red' : 'green';

document.write(`<div style=></div>`)
document.write(`<div style=></div>`)

// 4. Solicitar al usuario un número (n) y crear un div de tamaño n px

// 5. Solicitar dos números al usuario y mostrar en un p el mayor de ellos

// 6. Solicitar al usuario una frase y:
//  -Si la longitud de la frase es par mostrar un div rojo que tenga una animación de moverse 300px a la derecha durante 1 segundo e infinita
//  -Si no mostrar un div con un linear gradient  (generar el que os de la gana) y que tenga una animación de rotación sobre el eje Z de 360º en 800ms infinita
// Pista: utilizar clases CSS para los dos tipos de animación y poner una clase u otra en función de la condicion
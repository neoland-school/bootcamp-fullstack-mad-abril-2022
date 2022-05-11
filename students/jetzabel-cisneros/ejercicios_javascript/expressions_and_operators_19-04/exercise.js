//Expression_&_operators

/*
1.Crear dos variables a y b con valores 15 y 34 respectivamente. 
Mostrar un p en el HTML con el resultado de la suma, resta, multiplicación, y potencia entre a y b. 
Además mostrar el resto de la división de b y a . 
*/

let a = 15;
let b = 34;


document.write(`<p>${suma}</p>`);

document.write(<p>${a+b}</p>);
document.write(<p>${a-b}</p>);
document.write(<p>${a*b}</p>);
document.write(<p>${a**b}</p>); // potencia
document.write(<p>${a%b}</p>); // Operador de modulo devuelve el resto



document.write(`<p>Suma = ${a+b}</p>`
`<p>Resta = ${a-b}</p>`
`<p>Multiplicación = ${a*b}</p>`
`<p>Potencia = ${a**b}</p>`
`<p>Resto división:${b%a}</p>`);





// 2.Con las variables anterior mostrar un p indicando si a es par y si b es impar.

a % 2 == 0 ? document.write('a es par'):'';
b % 2 == 0 ? document.write('b es par'):'';

/* Tambien así

const isAEven =a%2 === 0  // esto devuelve true si a es par y false si es ipar
const isBEven =b%2 === 0  // esto devuelve true si a es par y false si es ipar


document.write(`<p>¿Es A Par?: ${isAEven}</p>`);
document.write(`<p>¿Es B Par?: ${isBEven}</p>`);
*/ 



/*3.Con variables anteriores mostrar un div de 50x50px 
rojo si la variable es par y verde si la variable es impar.
*/

// anterior
//a % 2 == 0 ? document.write('a es par'):'';
//b % 2 == 0 ? document.write('b es par'):'';


if (a % 2 == 0) {
  document.write('a es par');
  document.write('<div style="background-color:red;height:50px;width:50px"></div>');
} else {
  document.write('a es impar');
  document.write('<div style="background-color:green;height:50px;width:50px"></div>');
}

if (b % 2 == 0) {
  document.write('b es par');
  document.write('<div style="background-color:red;height:50px;width:50px"></div>');
} else {
  document.write('b es impar');
  document.write('<div style="background-color:green;height:50px;width:50px"></div>');
}


/* o así 

const colorA = isAEven ? 'red' : 'green';
const colorB = isBEven ? 'red' : 'green';

document.write(`<div style="width:50px; height:50px; background-color:${colorA}"></div>`);
document.write(`<div style="width:50px; height:50px; background-color:${colorB}"></div>`);

*/


//4. Solicitar al usuario un número (n) y crear un div de tamaño n px

//solicito con prompt
const size = prompt("Introduce un tamaño");
document.write(`<div style="background-color:blue;height:${size}px;width:${size}px"></div>`);



//5. Solicitar dos números al usuario y mostrar en un p el mayor de ellos

let numero1 = parseFloat(prompt("Introduce un número"));
let numero2 = parseFloat(prompt("Introduce otro número"));


document.write(`<p>El mayor es : ${numero1 >= numero2 ? numero1 : numero2}<p>`)

ó

if (numero1 < numero2) {
  document.write(`<p>${numero1}</p>`);
} else {
  document.write(`<p>${numero2}</p>`);
};





/*6. Solicitar al usuario una frase y:
 si la longitud de la frase es PAR mostrar un div rojo que tenga una animación de moverse 300px a la derecha durante 1 segundo e infinita
Si no mostrar un div con un linear gradient  (generar el que os de la gana) y que tenga una animación de rotación sobre el eje Z de 360º en 800ms infinita
Pista: utilizar clases CSS para los dos tipos de animación y poner una clase u otra en función de la condicion

*/

let frase = prompt("Introduce una frase");

if (frase.length % 2 == 0) {
  document.write(`Input fue par:<br><br><div class="par"></div>`);
} else {
  document.write(`Input fue impar:<br><br><div class="impar"></div>`);
}

/* profe
const sentence = prompt('Introduzca una frase');
const isSentenceEven = sentence.length%2 === 0; // la longitud se encuentra en .length


// pongo una clase css u otra en función de la condicion

const output = `<div class="box ${isSentenceEven ? 'sentence-even' : 'sentence-odd'}"></div>`;
document.write(output);


*/ 

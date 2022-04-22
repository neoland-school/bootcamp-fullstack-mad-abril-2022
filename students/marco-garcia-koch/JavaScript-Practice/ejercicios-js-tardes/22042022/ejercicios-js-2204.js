// 1- Mediante el uso del bucle  while imprime 40 p's con los textos numerados de la siguiente manera:

/**
 * Tenenos que imprimir por pantalla 40 p´s con el texto 'hello world loop' en orden creciente de 1 a 40.
 * Para ello necesitamos un bucle --> En este caso usamos while.
 * Almacenamos en una variable el número de veces que while se ejecuta --> variable contador
 * 
 * Ejemplo:
 * 1 hello world loop
   2 hello world loop
   3 hello world loop
   ...
   40 hello world loop
 */

let count = 1;
while (count <=40) {
    document.write(`<p>${count} - Hello world loop`);
    count++;
}


// 2. Mediante el uso de while crea 100 divs de color #F47732. 
// Modificar el ejercicio para que los divs pares se sean de  color #F47732 y los impares #1148F3. 
// Modificar para que  se muestren sobre un contenedor flex.

/**
 * Output: Imprimir por pantalla 100 divs con el color #F47732.
 * Usamos un bucle para crear los divs --> while
 * Almacenamos en una variable el número de veces que while se ejecuta --> variable contador
 * Creamos una clase CSS para los divs pares (color #F47732) y otra para los impares (color #1148F3).
 * Creamos un div container que sea flex mediante otra clase CSS.
 * Usamos una variable que acumule todo el código HTML que vamos creando
 */

    let counter = 1;
    let outputHTML = `<div class="container">`;
    while (counter <=100) {
        if (counter%2 === 1) {
            outputHTML += `<div class="odd"></div>`;
            counter++;
        } else {
            outputHTML += `<div class="even"></div>`;
            counter++;
        }
    }
    outputHTML += `</div>`;

    document.write(outputHTML);


// 3.Solicitar el número al usuario un numero por prompt, e imprime en un P  el número al revés.

/**
 * Input: Recibimos un número que nos da el usuario por pantalla.
 * Usamos un ciclo for para recorrer todos los dígitos del número.
 * No convertimos a number el número recibido para poder usar la propiedad lenght.
 * Comenzamos a leer por el final con charAt.
 * Asiganamos los resultados de cada valor que obtenemos con charAt a una variable de acumulación.
 * Output: Imprimimos por pantalla el valor de la varibale de acumulación.
 * 
 * Ejemplo: input: 21 --> output: 12
 *          input: 123 --> output: 321
 *          input: 2234 --> output: 4322
 *          input: 2 --> output: 2
 *          input: 001 --> output: 100
 *          input: 200 --> input: 002
 */

const num = prompt('Introduce un número que quieres mostrar al revés');

let c = '';
let cVariant = '';

for (i = num.length; i>0; i--) {
    c += num.charAt(i-1);
}

for (i = 1; i<=num.length; i++) {
    cVariant += num.charAt(num.length-i);
}

document.write(`<p>${c}</p>`);
document.write(`<p>${cVariant}</p>`);
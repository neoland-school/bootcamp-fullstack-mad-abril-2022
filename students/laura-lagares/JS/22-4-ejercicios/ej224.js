// Mediante el uso del bucle  while imprime 40 p's con los textos numerados de la siguiente manera:
// 1 hello world loop
// 2 hello world loop
// 3 hello world loop
// ...
// 37 hello world loop

let count= 1;
while( count <= 40){
    document.write(`<p>${count} hello world loop</p>`);
    count++
};

// Mediante el uso de while crea 100 divs de color #F47732. Modificar el ejercicio para que los divs pares se sean de  color #F47732 y los impares #1148F3. Modificar para que  se muestren sobre un contenedor flex.

// let one = 0;
// while( one < 100){
//     document.write(`<div class="divs"></div>`)
//     one ++
// }


let one = 0;
document.write(`<div class="container">`);
while( one < 100){
    document.write(`<div class="divs"></div>`)
    one++
}
document.write(`</div>`);

// 3.Solicitar el número al usuario un numero por prompt, e imprime en un P  el número al revés.

let numero = parseInt(prompt('Introduce un número:'));
document.write(`<p class="reves">${numero}</p>`);

// 3.Solicitar el número al usuario un numero por prompt, e imprime en un P  el número al revés.

let n = parseInt(prompt('Introduce un número'));
let result = 0;
while( n > 0) {
    result = result*10 + n%10;
    n = parseInt(n/10);
}
document.write(`<p>${result}</p>`);












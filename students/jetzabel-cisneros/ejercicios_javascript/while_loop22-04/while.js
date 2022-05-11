/* 
Mediante el uso del bucle  while imprime 40 p's con los textos numerados de la siguiente manera:
1 hello world loop
2 hello world loop
3 hello world loop
...
40 hello world loop
*/

let contador = 0;

while (contador<40) {
    document.write(`<p>${contador+1} hello world loop</p>`);
    contador++;
};



/*
2. Mediante el uso de while crea 100 divs de color #F47732. 
Modificar el ejercicio para que los divs pares se sean de color #F47732 y 
los impares #1148F3. 
Modificar para que  se muestren sobre un contenedor flex.
*/

let cuenta = 0;

while (cuenta<100) {
    document.write(`<div style="background-color:#F47732;width:50px;border:1px solid gray;">div ${cuenta+1}</div>`);
    cuenta++;
};

//si son pares i%2==0 ? :
let i = 0;

while (i<100) {
    i % 2 == 0 ? document.write(`<div style="display:flex;flex-wrap:wrap;height:50px;width:50px;background-color:#1148F3;">div ${i+1}</div>`) : document.write(`<div style="display:flex;flex-wrap:wrap;height:50px;width:50px;background-color:#F47732;">div ${i+1}</div>`);
    i++;
};


/* 3.Solicitar un número de dos cifras al usuario por prompt, 
e imprime en un P el número al revés (las dos cifras invertidas).

*/

//pasar el input a string, partir ese string en las partes que lo componen ('numero1,numero2),
// girar ese array, volver a juntarlo en un string


let input = prompt("Introduce un número de dos cifras");
document.write(input.toString().split("").reverse().join(""));




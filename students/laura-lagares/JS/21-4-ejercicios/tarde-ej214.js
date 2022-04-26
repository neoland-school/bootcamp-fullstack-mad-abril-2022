// Crea un programa que dado un numero mediante promt y usando el bucle for, te impirma por pantalla su tabla de multiplicar de la siguiente forma:
// Tabla de multiplicar de 5

let num = parseInt(prompt('Introduce un número:'));
for(let i=1; i<=10; i++) {
    document.write(`<p>${num} x ${i} = ${num*i}</p>`)
};

// Crear una página web que pinte por pantalla separado por comas las primeras 100 potencias de dos. Ejemplo: 1,2,4,8,16,32,64,...

let dos = 2;
for(let i=0; i<=100; i++) {
    document.write(`${dos**i},`)
};

// Crea un programa que recorra los números del 1-100 e imprima por pantalla :
//         Fizz, si es multiplo de 3.
//          Buzz, si es múltiplo de 5.
//           FizzBuzz, si es múltiplo de 3 y 5 a la vez

let unoCien = 100;
for(let i=1; i<=100; i++) {
    if (i%3===0 && i%5===0) {
        document.write(`<p>Fizz</p>`);
    } else if (i%3===0) {
        document.write(`<p>Bizz</p>`);
    } else if (i%5===0){
    document.write(`<p>FizzBizz ${i}</p>`);
    } else {
        document.write(`<p>${i}</p>`);
    }
};

// Escribir un programa que solicite al usuario el número de filas y el número de columnas. Dibujar una tabla con las filas y columnas introducidas, usar etiquetas html " th, tr, td.."

let filas = parseInt(prompt('Introduce número de filas:'));
let columnas = parseInt(prompt('Introduce número de columnas'));



document.write('<table>');
   
    for(let i=1; i<=filas; i++){
        document.write(`<tr>`);
        for(let i=1; i<=columnas; i++){
            document.write(`<td class="cell">hola</td>`); 
                }  
        document.write(`</tr>`);
    }
document.write('</table>');

// Crear una página web que solicite al usuario una palabra y muestre un p con el número de vocales que hay

const palabra = prompt('Introduce una palabra y te devuelvo el número de vocales:');
let counter = 0;
for(let i=0; i<palabra.length; i++){
    let p = palabra.charAt(i).toLocaleLowerCase();
    if(p==='a' || p==='e' || p==='i' || p==='o' || p==='u' ||
       p==='á' || p==='é' || p==='í' || p==='ó' || p==='ú' ||
       p==='ä' || p==='ë' || p==='ï' || p==='ö' || p==='ü'){
           counter++;
       }
}
document.write(`La palabra tiene ${counter} vocales`);

// Imprime por pantalla el siguiente patron, el cual va a depender del numero que pases por prompt, usaremos CSS para la maquetación (una vez terminado y mediante animation usando @keyframes haz que el triangulo se desplace hasta el otro punto de la pantalla de manera infinita).

const triangle = parseInt(prompt('Introduce un número(triangulo):'));

if (triangle > 1) {
let flecha = '<div class="back">'
flecha += '<div class="arrow">';
for( let i = 1; i <= triangle; i++) {
flecha += '<div class="row">';
flecha += '<div class="asc block"></div>'.repeat(i);
flecha += '</div>';
}

for (let i = triangle; i >= 1; i--){
flecha += '<div class="row">';
flecha += '<div class="desc block"></div>'.repeat(i);
flecha += '</div>';
}

flecha += '</div>';
flecha += '</div>';

document.write(flecha);
};

// Crear una página web que solicite al usuario 1 número (n) y cree en HTML  un tablero de ajedrez de nxn, teniendo  en cuenta los colores como en el ajedrez.

let size = parseInt(prompt('Introduce un número para el tablero de ajedrez:'))
let chessBoard = '<div class="board">';
for(let i=1; i<=size; i++){ 
  chessBoard+=`<div style="height: ${100/size}%" class="fila">` ;
  for(let j=1; j<=size; j++){
      chessBoard+= `<div style="width:${100/size}%" class="celda"></div>`;
  } 
  chessBoard+='</div>';
}
chessBoard += '</div>';
document.write(chessBoard);










    




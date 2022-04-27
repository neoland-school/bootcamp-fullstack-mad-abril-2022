/*1. Crea un programa que dado un numero mediante promt y usando el bucle for, te impirma por pantalla su 
tabla de multiplicar de la siguiente forma:
Tabla de multiplicar de 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50


let num = parseInt(prompt('introduce el numero'));

for (let i=1; i <= 10; i++){
    document.write(`<p>${i} x ${num} = ${i*num}</p>`)
}

/*Crear una página web que pinte por pantalla separado por comas 
las primeras 100 potencias de dos. Ejemplo: 1,2,4,8,16,32,64,...

let num1 = parseInt(prompt('introduce el numero'));


for (let i=0; i <= 100; i++ ){
    document.write(`${num1**i},`)
}

/*3.Crea un programa que recorra los números del 1-100 e imprima por pantalla :
    Fizz, si es multiplo de 3.
     Buzz, si es múltiplo de 5.
     FizzBuzz, si es múltiplo de 3 y 5 a la vez.


      let num3 = 100;
for(let i=1; i<=100; i++) {

         if(i % 3 ===0 && i%5 ===0) {
             document.write(`<p>Fizz</p>`)
         } else if(i % 3 === 0){
             document.write(`<p>Buzz</p>`)
         }else if (i %5 === 0){
                 document.write(`<p>BuzzFizz</p>`);
          } else {
                    document.write(`<p>${i}</p>`);
                }
            };

Escribir un programa que solicite al usuario
 el número de filas y el número de columnas. Dibujar una tabla con las filas y columnas introducidas, 
 usar etiquetas html " th, tr, td.."*/

let fila = parseInt(prompt('Introduce un numero de filas'));
let column = parseInt(prompt('Introduce un numero de columnas'));


document.write('<table>')

for (let i=1; i <= fila; i++){

    document.write ('<tr>');
    
    for (let j=1; j <= column; j++){

        document.write ('<td>h</td>')
    }

    document.write ('</tr>')
}

document.write('</table>')

/*Crear una página web que solicite al usuario una palabra 
y muestre un p con el número de vocales que hay.*/


let word = prompt('introduce una palabra');


let numeroVocales = word.match(/[aeiou]/gi).length;

document.write(numeroVocales);





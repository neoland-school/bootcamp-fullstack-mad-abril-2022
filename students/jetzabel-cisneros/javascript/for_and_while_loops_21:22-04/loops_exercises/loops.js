/* 1. Crea un programa que dado un numero mediante promt y usando el bucle for,
 te impirma por pantalla su tabla de multiplicar de la siguiente forma:
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

*/


const number = parseInt(prompt('Introduce un numero entero'));

for(let i = 1; i < 10; i++) {

    const result = i * number;

    document.write(`${number} * ${i} = ${result}<br>`);
};



/*
2. Crear una página web que pinte por pantalla separado por 
comas las primeras 100 potencias de dos. Ejemplo: 1,2,4,8,16,32,64,..
*/

//uso Math.pow()

for (let i = 0; i < 100; i++) {
    let i_cuadrado = Math.pow(2,i); //base y exponente, separadas por comas
    document.write(`${i_cuadrado}<br>`);
};

/*
3.Crea un programa que recorra los números del 1-100 e imprima por pantalla :

    Fizz, si es multiplo de 3.   //if (i % 3 == 0) ---> si multiplo de tres (si el resto de dividirlo por 3 es igual a 0)
    Buzz, si es múltiplo de 5.   //if (i % 5 == 0) ---> si multiplo de 5
    FizzBuzz, si es múltiplo de 3 y 5 a la vez.  //if (i % 3 == 0 && i % 5 == 0)
    */

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      document.write(`FizzBuzz<br>`);
    } else if (i % 5 == 0) {
      document.write(`Buzz<br>`);
    } else if (i % 3 == 0) {
      document.write(`Fizz<br>`);
    }else{ 
        document.write(`${i}` + `<br>`);
    }
};

/*
4. Escribir un programa que solicite al usuario el número de filas y el número de columnas. 
Dibujar una tabla con las filas y columnas introducidas, usar etiquetas html " th, tr, td.."
*/
// <tr>  fila
// <td>columna</td>
//</table>


const filas = prompt('Introduzca el número de filas que necesite');
const columnas = prompt('Introduzca el número de columnas que necesite');
//le doy un style (`<table style..
document.write(`<table style="width:80%;height:80%;border:1px solid black;">`);

//let i=0; i<filas; i++
// inicio i a 0, y voy sumando uno mientras sea inferior al número de filas del input (filas)
for (let i = 0; i<filas; i++) {
  document.write(`<tr>`); //por cada fila pinto la fila
  // después en cada fila, loop igual que antes pero con las columnas
  for (let z = 0; z<columnas; z++) { 

    // abro columna, pinto contenido, cierro columna <td></td>
    // `<td style="border:1px solid black;">texto fila ${i+1}, columna ${z+1}</td>` dentro de comillas torcidas!!!
    document.write(`<td style="border:1px solid black;">texto fila ${i+1}, columna ${z+1}</td>`);
  };
  document.write('</tr>');// cierro fila después de loop de columnas de cada fila (todavia dentro del bucle de filas)
};
document.write('</table>');//cierro tabla fuera del loop

   


/*
5. Crear una página web que solicite al usuario una palabra 
y muestre un P con el número de vocales que hay.
*/


input = prompt("Introduce texto");
// contador de vocales inicio a cero
let vocales = 0;

// le voy sumando 1 a i desde 0, mientras siga siendo menor que 
// la longitud del input (string introducido desde prompt) input.length
for (var i = 0; i < input.length; i++) {
  
  // srt[i] --> character en el punto i del string 
  // ex. hola[0] = 's' , hola[1] = 'o'
  //luego comparo ese caracter con a,e,i,o,u
   if (input[i] == "a" || input[i] == "e" || input[i] == "i" || input[i] == "o" || input[i] == "u" || input[i] == "ä" || input[i] == "ë" || input[i] == "ï" || input[i] == "ö" || input[i] == "ü" )
        // si coincide con a,e,i,o ó u, sumar uno a contador (vocales) iniciado antes del loop 
        vocales++; 
    } 

// En una <p> texto con resultado
document.write(`<p>El texto introducido contiene ${vocales} vocales</p>`);

/*
6. Imprime por pantalla el siguiente patron, el cual va a depender del numero que pases por prompt,
usaremos CSS para la maquetación 
(una vez terminado y mediante animation usando @keyframes haz que el triangulo
 se desplace hasta el otro punto de la pantalla de manera infinita).

- aquí empezaría la fase creciente, desde (n) pintando i bloque, lo hago con for
---
----
-----
------ suponiendo q esto es la img del triangulo,en este caso, esto sería la altura
----- aquí empezaría la fase decreciente, recorro dsd (n) hasta 1(decreciendo en 1), pintando i bloque, lo hago con otro for loop
----
---
--
-

//input: number q representa la altura del tringuanlo (n de bloques horizontales)
//salida: estructura de divs q tengo q definir

 */

const n = parseInt(prompt("introduce la altura de la flecha"));
if (n > 1) {

let outputHTML = '<div class="arrow>'; // aqui el html q voy a pintar
//fase creciente
for(let i=1; i<=n; i++){
    outputHTML += '<div class="arrow>';
    outputHTML = '<div class="block color-ascending></div>'.repeat(i); // pintar i bloques
    outputHTML = '</div>';
//console.log('-'.repeat(i));// con esto pinto i bloques
}
//fase decreciente
for(let i=n; i>=1; i--) {
    outputHTML += '<div class="block color-descending"></div>'.repeat(i); // pintar i bloques
    outputHTML+='</div>';

};
outputHTML+= '</div>';
document.wright(outputHTML);
}


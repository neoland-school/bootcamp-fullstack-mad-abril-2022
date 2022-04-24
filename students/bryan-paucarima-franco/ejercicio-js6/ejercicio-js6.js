/**1.Crea un programa que dado un numero mediante promt y usando el bucle for, te impirma por pantalla su tabla de multiplicar
 *  de la siguiente forma:
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
5 x 10 = 50 */


let number = prompt('Introduce un numero')

for (let i = 1 ; i<=10 ; i++ ){
    document.write(`<p> ${number} x ${i} = ${number*i}</p>`)
}


/**2. Crear una página web que pinte por pantalla separado por comas las primeras 100 potencias de dos.
 *  Ejemplo: 1,2,4,8,16,32,64,... */


for (let i = 0 ; i<=100 ; i++){
    document.write(`${2**i},`)
}


/**Crea un programa que recorra los números del 1-100 e imprima por pantalla :
        Fizz, si es multiplo de 3.
         Buzz, si es múltiplo de 5.
          FizzBuzz, si es múltiplo de 3 y 5 a la vez. */

for (let i = 1 ; i<=100 ; i++){
    if (i%15===0) {
        document.write(`<p>FizzBuzz</p>`)
    } else if (i%5===0) {
        document.write(`</p>Buzz</p>`)
    } else if (i%3===0){
        document.write(`<p>Fizz</p>`)
    } else{
        document.write(`<p>${i}</p>`)
    }

}

/**`4. Escribir un programa que solicite al usuario el número de filas y el número de columnas. 
 * Dibujar una tabla con las filas y columnas introducidas, usar etiquetas html " th, tr, td.." */

let filas = parseInt(prompt('Introduce numero de filas'))
let columnas = parseInt(prompt('Introduce numero de columnas'))

document.write(`<table>`)

for (let i = 1; i <= filas; i++) {
    document.write(`<tr>`)
    for (let j = 1; j <= columnas; j++) {
        document.write(`<td>${columnas}</td>`)
    }
    document.write(`</tr>`)
}

document.write(`</table>`)

/** Crear una página web que solicite al usuario una palabra y muestre un p con el número de vocales que hay. */

let palabra = prompt('Introduce una palabra')
let contadorVocales = 0;

for(let i=0;i<palabra.length;i++) {
    if ((palabra.charAt(i)==='a') || (palabra.charAt(i)==='e') || (palabra.charAt(i)==='i') || (palabra.charAt(i)==='o') || (palabra.charAt(i)==='u')){ 
       contadorVocales++;
     }
   }
document.write(`<p>La ${palabra} tiene ${contadorVocales} vocales <p>`)

//** 6. Imprime por pantalla el siguiente patron, el cual va a depender del numero que pases por prompt, 
/*usaremos CSS para la maquetación (una vez terminado y mediante animation usando @keyframes 
    haz que el triangulo se desplace hasta el otro punto de la pantalla de manera infinita).*/

    const n = parseInt(prompt("Introduzca la altura de la flecha"));

    if (n > 1) {
      let outputHTML = '<div class="arrow">';
      for (let i = 1; i <= n; i++) {
        outputHTML+='<div class="row">';
        outputHTML += '<div class="block asc"></div>'.repeat(i); // 
        outputHTML+='</div>';
      }

      for (let i = n; i >= 1; i--) {
        outputHTML+='<div class="row">';
        outputHTML += '<div class="block desc"></div>'.repeat(i); 
        outputHTML+='</div>';
      }

      outputHTML+='</div>';
      document.write(outputHTML);
    }










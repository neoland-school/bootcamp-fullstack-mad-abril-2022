/**Mediante el uso del bucle  while imprime 40 p's con los textos numerados de la siguiente manera:
1 hello world loop
2 hello world loop
3 hello world loop
...
37 hello world loop */

let contador = 1;

while (contador<=37){

    document.write(`<p>${contador} hello world loop </p>`)
    contador++
}


/** Mediante el uso de while crea 100 divs de color #F47732.
 *  Modificar el ejercicio para que los divs pares se sean de  color #F47732 y 
 * los impares #1148F3. Modificar para que  se muestren sobre un contenedor flex. */

let outputHTML = '<div class="container">';
let count = 1;

while (count<=100) { 
    if (count%2===1) {
        outputHTML += `<div style="background-color:#1148F3" class="square"></div>` 
    } else {
        outputHTML += `<div class="square"></div>`        
    }
    count++
}

outputHTML += '</div>'
document.write(outputHTML)

/** Solicitar el número al usuario un numero por prompt, e imprime en un P  el número al revés.*/

let numero = prompt('Introduce un numero')
let alReves = "";

for(let i = numero.length-1; i>=0; i--){
  alReves +=  numero.charAt(i)
}
document.write(`<p>El numero al reves es ${alReves}</p>`)

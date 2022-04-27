/* Mediante el uso del bucle  while imprime 40 p's con los textos numerados de la siguiente manera:
1 hello world loop
2 hello world loop
3 hello world loop*/
const saludo = "hello word loop"; 
let count = 0;
    while (count<40) {
    count++;
    document.write(`<p>${count}  ${saludo}<p/>`);
}


/* Mediante el uso de while crea 100 
divs de color #F47732. Modificar el ejercicio para que 
los divs pares se sean de  color #F47732 
y los impares #1148F3. Modificar para que  
se muestren sobre un contenedor flex.*/

// const saludo = "hello word loop"; 

            // let contador = 0;

            //     while (contador<100) {
            //         contador++;
            //         document.write(`<div style="background-color:#F47732; ">hola<div/>`);
            // }

let contador = 0;

      while (contador<100) {  // si no pones la llave que engloba todo t
            contador++;                  //e pone un bucle doble en el div impar 

            if (contador%2===0){
            document.write(`<div style="background-color: #F47732;">hola<div/>`);}
            else {(contador%2===1)
            document.write(`<div style="background-color: #1148F3;">adios<div/>`);
            }
      }
        // document.write(`<div class="rowodd" style=" ${div%2===1} background-color: #F47732;">hola<div/>
        // <div class="roweven"${a%2===0} background-color: #F47732;">hola<div/>`);




// Solicitar el número al usuario un numero por prompt, 
// e imprime en un P  el número al revés.

constata = 0;
let numeroRe = prompt('Introduzca un numero');
// nombreUsu.lastIndexOf(nombreUsu += constata);

while (constata<) {  // si no pones la llave que engloba todo t
    constata.charAt(0)
    numeroRe.length;
    
    document.write(nombreUsu);
}


/*for para recorrer tu string
 let vacia
 para agregar los caracteres inversos
 metodo charAt para devolver un string*/

    





// Crea un array de palabras e imprime por pantalla la segunda posicion.

let arrayPalabras = ['Hola', 'Hasta luego', 'Adios', 'Nos vemos'];
document.write(arrayPalabras[1]);

document.write(`<br>`);


// Introduce un numero por prompt y crea un array de números con la longitud 
// indicada de números  e imprímelo por pantalla.(easy).

let n = parseInt(prompt('Introduzca la longitud de un array'));
let numbers = [];
for (i=0; i<=n; i++) {
    numbers[i] = 'Que';
}

document.write(numbers); 
document.write(`<br>`);
/* si quieres q te imprima el resultado 
final saca el document write fuera del ciclo */


// Crea un array de géneros musicales [rock, pop, country], 
// rock debera ser un array de de subgeneros que contenga 
// [punk, metal, hardcore], Ahora crea un array de banda  
// que contenga un string ejmp "metallica" mas  el array 
// de géneros musicales y con ese array de banda muestra 
// por pantalla el nombre de la banda "metallica" 
// y el subgénero "metal".(easy).

let generos = ['rock','pop', 'country'];
let rock = ['punk', 'metal', 'hardcore'];
let banda = ['metallica', generos];
document.write(banda[0],' ', rock[1]);

document.write(`<br>`);
// document.write(rock[1]);



// Pasa por prompt 10 veces un numero para crear un  array de 10 números e imprima 
// por pantalla true si todos son mayor de 10 o false en caso contrario.



let vacio = [];
for (i=0; i<10; i++) {
    // let arrayLargo = parseInt(prompt('Introduzca un numero por favor'));
    vacio[i] = parseInt(prompt('Introduzca un numero por favor'));
     if (vacio[i]>10)
     document.write('true');
    else {
     document.write('false');
     }
 }


document.write[vacio]; 




// let numeros = parseInt(prompt('Introduzca una serie de numeros'));
// // let numMenoresQue = [1,2,3,4,5,6,7,8,9,4];
// let numbersVacio = [];
// for (i=0; i<=numeros; i++) {
//     if (numbersVacio[i]<10)
//     document.write('true');

//     else {
//     document.write('false');
//     }
// }



// Introduce una palabra por prompt  y crea  un array palabras,  y imprime  true o false si palabra 
// prompt  existe o no dentro del array.

let introducir = prompt('Introduzca una palabra por favor');
let palabras = [document.write(introducir)];

if (palabras.include(introducir))
    document.write('true');
else {
    document.write('false');
}
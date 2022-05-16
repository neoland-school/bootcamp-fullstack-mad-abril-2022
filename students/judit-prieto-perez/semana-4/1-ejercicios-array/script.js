/*PROBANDO ARRAYS.*/

/*Un array vacio
let num = []
/*Un  array de números
let num1 = [1,2,3,4];

/*Longitud de un array
num1.lenght;

console.log(num1.length);

/*Lista de 100 "0"
const num2 = Array (100).fill(0)

console.log(num2)

/*Acceder a un elemento del array
document.write(`<h3> ${num1 [2]}</h3>`);

/*Añadir un elemento

num1 [num1.lenght] =22;

console.log(num1)

/*EJERCICIOS DIA 1-ARRAYS

/*Crea un array de palabras e imprime por pantalla la segunda posicion.**/

document.write(`<h1>Ejercicios de Arrays.</h1>`)

document.write(`<h3>Ejercicio 1.</h3>`)


let primer_array= [1,2,3,4,5];

segunda_posicion= primer_array [2]

document.write (`<p>Este es mi array: ${primer_array} `)
document.write (`<p>Esta es la segunda posición del array: ${segunda_posicion} `)

document.write(`<h3>Ejercicio 2.</h3>`)
document.write(`<p>Introduce un numero por prompt y crea un array de números con la longitud indicada de números  e imprímelo por pantalla.</p>`)

/*
Tipos de datos:
**Entra** Strsing(por prompt)
Sale** Array de números.
------------------------
Paso 1: pedimos el número por prompt al usuario. Es tan largo como nos diga la variable del prompt.
iterar?? hasta que i sea = a la variable del prompt? */

const numero = parseInt(prompt('Introduce un número'));

const array_8 = Array(numero).fill(10);

document.write(`El array es: ${array_8}`);

document.write(`<h3>Ejercicio 3.</h3>`)

/*
Crea un array de géneros musicales [rock, pop, country], rock debera ser un array de de subgeneros que contenga 
[punk, metal, hardcore],*/
let array_generos = ['rock', 'pop', 'country'];//Creamos el array (tipo de dato: string)

document.write(`Array de géneros musicales: ${array_generos}`)

let array_rock = ['punk', 'metal', 'hardcore']; //creamos el segundo array. Usamos .concat (concatenar dos arrays)

let nuevo_array = array_generos.concat(array_rock);

document.write(`<p>Array nuevo: ${nuevo_array}</p>`)

 /*Ahora crea un array de banda  que contenga un string ejmp "metallica" mas  el array de géneros musicales y 
 con ese array de banda muestra por pantalla el nombre de la banda "metallica" y el subgénero "metal".(easy).
************************************************************************************************************
tipos de datos: seguimos con arrays de strings.
*/

'metallica' // Nos pide insertar otro string al array de generos musicales. 
//exList[exList.length] = 22; // Utilizando lenght añado el nuevo valor.
nuevo_array[nuevo_array.length]= 'metallica'

document.write(`<p>Hemos añadido el género metallica: ${nuevo_array}</p>`)

//Mostrar por pantalla el genero metallica y subgenero metal.//Nos pide que le indiquemos las posiciones del array 4 y 6 //

document.write (`El  genero y subgenero: ${array_rock [1]} ${nuevo_array[6]}`)

document.write(`<h3>Ejercicio 4.</h3>`)

document.write(`<p>Pasa por prompt 10 veces un numero para crear un  array de 10 números e imprima
 por pantalla true si todos son mayor de 10 o false
en caso contrario.
</p>`)
/*

/* Pasa por prompt 10 veces un numero para crear un  array de 10 números e imprima por pantalla true si todos son mayor de 10 o false
 en caso contrario.
/*Tipo de dato que entra: string del prompt //Tipo de dato que sale: booleano (true o false)

Paso 1: Pedir al usuario 10 números (haremos un bucle de prompts)

paso 2: comprobar si son TODOS mayor de 10 --> EVERY

Ej: [2,34,5,6,7] --> false
[23,12,34,56] --> true ¨*/

let array= new Array(10)

for (let i=0; i <9; i++){
    array [i] = parseInt(prompt('Introduce un numero')); //Funcion para pedir 10 veces un numero
}
document.write(array)

document.write(`<p>¿Son todos mayor que diez?`)

const mayor = array.filter(array => array > 10);

document.write(mayor);


/*

Introduce una palabra por prompt  y crea  un array palabras,  y imprime  
true o false si palabra prompt  existe o no dentro del array.

*/

document.write(`<h3>Ejercicio 5</p>`)

word= prompt('introduce una palabra');

const arra = ['platano', 'manzana', 'pera', 'ciruela']

const palabra = (arra.indexOf(word) > -1);


document.write(`<p>Array de frutas: ${arra}</p>`)
document.write(`<p>¿Existe la palabra introducida en el array? ${palabra}</p>`)


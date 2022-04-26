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

Crea un array de 5 números por prompt e imprimelo por pantalla.(easy).


let n = [];

for (let i=0; i<= 4; i++) {
    n [i] = parseInt(prompt('introduce un numero'));
}

document.write(`${n}`)

/*Crea un array de palabras e imprime por pantalla la segunda posicion.

let word = ['planta', 'arbol', 'mesa', 'silla']

document.write(`<h3> ${word [2]}</h3>`);

/*Introduce un numero por prompt y crea un array de números con la longitud indicada de números  e imprímelo por pantalla.*/

/*et aray = [parseInt(prompt('Introduce un numero de longitud'))]*/


const longitud = Array (parseInt(prompt('Introduce un numero'))).fill(2)

console.log(longitud);

document.write(`${longitud}`)

/*Crea un array de géneros musicales [rock, pop, country], rock debera ser un array
 de de subgeneros que contenga [punk, metal, hardcore], Ahora crea un array de banda  
 que contenga un string ejmp "metallica" mas  el array de géneros musicales y con ese 
 array de banda muestra por pantalla el nombre de la banda "metallica" y el subgénero "metal".(easy).

 let genero = ['rock', 'pop', 'country']

 let rockSub = ['punk', 'metal', 'hardcore']

 let generoSub = [genero, rockSub]


 Añadir string metallica al de genero Sub*

generoSub [6] = 'metallica'

document.write(`<h3> ${generoSub}</h3>`);

document.write(`<h3> ${generoSub [6]}; ${rockSub [1]}</h3>`);



Crear un array
- imprimir si es mayor de 10 --> If n>10
-recorrer el array - ¿es falso? True/false*/

let numeros = [];

for(let i = 0; i < 10; i++){
    numeros[i] = parseInt(prompt("Introduce un numero"));
}if(numeros > 10){
    console.log('true');
}
document.write(`${numeros}`)



/*
let busqueda = numeros.some(numeros => numeros >= 10);

document.write(`<p>${busqueda}</p>`);*/



/*

Introduce una palabra por prompt  y crea  un array palabras,  y imprime  
true o false si palabra prompt  existe o no dentro del array.


lea = prompt('Introduce una palabra para el array');

let array7 = ['manzana','platano','pera','fresa','kiwi'];

document.write(`${array7.includes('manzana')}`);
*/
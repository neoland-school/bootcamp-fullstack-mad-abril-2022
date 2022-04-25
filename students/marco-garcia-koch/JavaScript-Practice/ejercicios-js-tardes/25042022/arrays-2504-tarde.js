
// 1- Crea un array de palabras e imprime por pantalla la segunda posicion.


const strArray = ['hola', 'buenas', 'tardes', 'a', 'todos'];

document.write(`<p>${strArray[2]}</p>`);



// 2- Crea un array que tenga 5  números por prompt e imprimelo por pantalla.(easy).

const arrayNumOne = prompt('Escribe el primer número');
const arrayNumTwo = prompt('Escribe el segundo número');
const arrayNumThree = prompt('Escribe el tercer número');
const arrayNumFour = prompt('Escribe el cuarto número');
const arrayNumFive = prompt('Escribe el quinto número');


const arrayComplete = [];

arrayComplete[0] = arrayNumOne;
arrayComplete[1] = arrayNumTwo;
arrayComplete[2] = arrayNumThree;
arrayComplete[3] = arrayNumFour;
arrayComplete[4] = arrayNumFive;

document.write(`<p>${arrayComplete}</p>`);


// 2- Introduce un numero por prompt y 
// crea un array de números con la longitud indicada de números e imprímelo por pantalla.

const numGiven = parseInt(prompt('Escribe un número'));

const newArray = Array(numGiven).fill(1);

document.write(`El nuevo array es: ${newArray}`);


// 3- Crea un array de géneros musicales [rock, pop, country], 
// rock debera ser un array de de subgeneros que contenga [punk, metal, hardcore], 
// Ahora crea un array de banda  que contenga un string ejmp "metallica" mas  el array de géneros musicales 
// y con ese array de banda muestra por pantalla el nombre de la banda "metallica" y el subgénero "metal".(easy).

const musicStyle = [['punk', 'metal', 'hardocore'], 'pop', 'country'];

const banda = ['metallica', musicStyle];

document.write(`<p>Nombre de banda: ${banda[0]}. Subgénero: ${banda[1][0][1]}</p>`);


// 4- Usa el ejercicio 1 para crear un  array de 10 números e imprima por pantalla true 
// si todos son mayor de 10 o false en caso contrario.

const numArray = [11,2,13,14,15,16,17,18,19,15];

let counter = 0;

for (let i=0; i<numArray.length; i++) {
    if (numArray[i] > 10) {
        counter++;
    }
}

if (counter < 10) {
    document.write(`<p>FALSE</p>`);
} else {
    document.write(`<p>TRUE</p>`);
}


// Versión dos de este ejercicio

// let j = 0;
// let boo = false;
// while ((numArray[j] > 10) && (j < numArray.length)) {
//     boo = true;
//     j++;
// }

// document.write(`<p>${boo}</p>`);


// Introduce una palabra por prompt y crea un array palabras,  
// e imprime true o false si palabra prompt  existe o no dentro del array.

const word = prompt('Escribe una palabra');

const arrayOfWords = ['trabajar', 'con', 'arrays', 'desarrolla', 'el', 'pensamiento', 'lógico'];

let c = false;

for (let i=0; i<arrayOfWords.length; i++) {
    if (arrayOfWords[i] === word) {
        c = true;
        break;
    }
}

document.write(`<p>${c}</p>`)
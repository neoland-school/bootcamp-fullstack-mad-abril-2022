// /**
// Crea un array de palabras e imprime por pantalla la 
// segunda posicion. */

const words = ['cuaderno','regla','lapiz']
const array = []

document.write(`${words[1]}`)

// /**Introduce un numero por prompt y crea un array de números con
//  *  la longitud indicada de números  e imprímelo por pantalla.(easy).
//  */

const number = parseFloat(prompt('Introduce un numero'))
let arrays = []

for(let i = 0; i < number; i++){
    console.log(arrays[i]=i)
}
console.log(arrays)

// /**Crea un array de géneros musicales [rock, pop, country],
//  *  rock debera ser un array de de subgeneros que contenga
//  *  [punk, metal, hardcore], 
//  * Ahora crea un array de banda que contenga un string 
//  * ejmp "metallica" mas  el array de géneros musicales y 
//  * con ese array de banda muestra por pantalla el nombre de 
//  * la banda "metallica" y el subgénero "metal".(easy).
//  */

let generosMusicales = ['rock','pop','country']
generosMusicales[0] = ['punk','metal','hardcore']
let banda = ['metallica']
let bandaSubgenero = []

bandaSubgenero[0] = banda[0]
bandaSubgenero[1] = generosMusicales[0][1]

console.log(bandaSubgenero)


// /** Pasa por prompt 10 veces un numero para crear un  array 
// de 10 números e imprima por pantalla true si todos son mayor de 10 
// o false en caso contrario.
//  */


 let arraysTwo = []
 
 for(let i = 0; i <= 9; i++){
    const numberTwo = parseFloat(prompt('Introduce un numero'))
    arraysTwo[i]= numberTwo
 }

 console.log(arraysTwo)

 for(let i = 0; i <= 9 ; i++){
     
    document.write(`${arraysTwo[i]>10?true:false}`)

 }

 console.log(arraysTwo)



 /**Introduce una palabra por prompt  y crea   un array palabras, y 
  * imprime  true o false si palabra prompt  existe o no dentro del array. */

const palabra = prompt('Introduce una palabra')
 
const arrayPalabras = ['cuaderno','lapiz','regla','silla','mesa']

let result = false

for (let i = 0; i < arrayPalabras.length; i++) {
    if (arrayPalabras[i]===palabra) {
        result = true;
        
    }    
}
document.write(result)

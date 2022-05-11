
// // Crea una función que devuelva el tipo de parámetro de entrada y píntalo por pantalla , usar  arrow function function.

let parametroEntrada = a => typeof a
console.log(parametroEntrada(true))

//  Function que dado dos boleanos por prompt devuelva el AND de estos por pantalla,
//  usar function declaration

let boleanOne = (prompt('Introduce un boleano'))
let boleanTwo = (prompt('Introduce un boleano'))

function boleans(a,b) {
    let result = a && b
    return result
}
console.log(boleans(boleanOne,boleanTwo))

// Crea una función que dado un numero por prompt, devuelva el número al revés por pantalla, 
// usar function expression

let num = parseFloat(prompt("introduce un numero"))
let alreves = function (number){
    const convertAndReverse = number.toString().split("").reverse().join("")
    return convertAndReverse;
}
console.log(alreves(num))

// Crear una función para ordenar un array de números desordenados de mayor a menor.(easy)

let arayUntidy = [4,5,20,3,1,16,12,31]
const tidy = arayUntidy.sort((a,b) => b-a)
console.log(tidy)

// Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10.(easy)

let arrayNum = [4,5,11,12,21,9,16]

function mayorTEn (num) {
    let result = num.filter(a => a>10)
    return result
}
console.log(mayorTEn(arrayNum))

//optimizado//
// const result = arrayNum.filter( array => array>10)
// console.log(result)

// Crear una función que dado una URL (Se representa con un string) por prompt, 
// me diga o no si pertenece al dominio de github,  usar function declaration. 

let prompURL = prompt('Introduzca una URL')
function domGitHub (a) {
    result = a.includes("github.com") ? true : false
    return result
}
console.log(domGitHub(prompURL))

// Crear una función que calcule el Maximo Comun Divisor (Hint: Utilizar el algoritmo de euclides)
// y lo imprima por pantalla.

let numONe = parseFloat(prompt('Introduce un numero'))
let numTwo = parseFloat(prompt('Introduce un numero'))

// // function mcd (a,b){
// //     while (a!=b) {
// //         if (a>b) {
// //             a -= b;
// //         } else {
// //             b -=a
// //         }
// //     }
// //     return a
// // }
// // console.log(mcd(numONe,numTwo))

// const maximoComunDivisor = (a,b) => {
//     let temporal; //para no perder el segundo parametro
//     while (b!==0){
//         temporal = b;
//         b = a%b
//         a = temporal;
//     }
//     return a;
// }
// console.log(maximoComunDivisor(numONe,numTwo))

function mcd(a, b) {
    let major = a > b ? a : b;
    let minor = a > b ? b : a;

    while (major % minor !== 0) { 
        const aux = minor;
        minor = major%minor;
        major = aux;
    }

    return minor;
  }


//  (hard) La sucesión de fibonacci es una lista de números infinita muy presente en la vida real (https://www.neoteo.com/la-sucesion-de-fibonacci-en-la-naturaleza/).
//  Esta sucesión probablemente nos suene de la  película "El código Da Vinci". Consiste en calcular  el siguiente número teniendo en cuenta el valor   de los anteriores,
//  siguiendo la siguiente   fórmula. fib(n) = fib(n-1) + fib(n-2). Es decir   el fibonacci de 3 por ejemplo se calcula sumando    el fib(2) junto con el fib(1). 
//  Para los casos más    básicos tenemos que fib(0) = 0 y fib(1) = 1.    Construir una función que dado un numero entero    devuelva su número de fibonacci. Solicitar el     entero al usuario. Pista: Se puede hacer con un     unico bucle.

/**
       * La sucesión de fibonacci tiene la siguiente formula recursiva:
       *  - fib(n) = fib(n-1) + fib(n-2)
       *  - casos base:
       *      fib(0) = 0;
       *      fib(1) = 1;
       *
       * Entrada: 1 number
       * Salida: String con la sucesion separa por coma
       *
       * Ejemplos:
       *
       *      fib(2) = fib(1) + fib(0) = "0,1,1";
       *      fib(3) = fib(2) + fib(1) = "0,1,1,2";
       *      fib(5) = fib(4) + fib(3) = "0,1,1,2,3,5";
       *
       * Los primeros números son: '0,1,1,2,3,5,8,13,21,34,55,...'
       *
       * 1. crear dos variables con el fib(0) y el fib(1)
       * 2. Crear una variable string donde iremos concatenando la salida
       * 3. repetir hasta llegar a n
       *      a. En cada vuelta tenemos que concatenar a la salida el valor de la sucesion
       *      b. Actualizar las dos variables numéricas para la siguiente vuelta del bucle
       */

 function fib(n) {
    let fib_1 = 1; // representar fib(n-1)
    let fib_2 = 0; // representar el fib(n-2)
    let sucession = n===0 ? "0" : "0,1"; // cadena para los dos primeros valores

    for (let i = 2; i <= n; i++) {
      const fib_i = fib_1 + fib_2;
      sucession += `,${fib_i}`; // fib(i) = fib(i-1) + fib(i-2)
      // preparo la siguiente vuelta
      fib_2 = fib_1; // en la siguiente vuelta fib(i-2) es lo que en esta es fib(i-1)
      fib_1 = fib_i; // en la siguiente vuelta fib(i-1) es lo que en esta es fib(i)
    }

    return sucession;
  }

  const n = parseInt(prompt('Introduzca el numero de fibonacci'));
  document.write(`<p>La sucesión de fib(${n}) es: ${fib(n)}</p>`);


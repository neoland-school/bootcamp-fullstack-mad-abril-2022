/**Crear una función que reciba por parámetros 2 array. Esta función devolverá los 2 arrays concatenados y los mostrará en el navegador.(easy).*/

arrayOne = [2,4,5,6,7]
arrayTwo = [5,6,7,8]
function concatenar(array1,array2) {
    return array1.concat(array2)
}

console.log(concatenar(arrayOne,arrayTwo))


/**Crear una función que reciba un parámetro de entrada y que imprima por pantalla true si el parámetro es un array y false si es otro tipo de dato.(easy).*/

arrayThree = [2,4,5,6]

function isArrayThis(array){
   return Array.isArray(array)
}

console.log(isArrayThis(arrayThree))

/**Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10.(easy). */

// arrayFour = [4,10,15,16,2,3]

function mayorTen (array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i]>10) {
            result[result.length] = array[i]
        } 
    }
    return result;
}

console.log(mayorTen(arrayFour))

/**Escribir varias funciones que dada las medidas por prompt(radio, lados, etc) que calculen área y perímetro de diferentes figuras geométricas (Rectángulo, Cuadrado, triángulo y Círculo), 
 * para el circulo usaremos rectangulo y cuadrado usaremos arrow function.*/

let ladosAlturaRectangulo = parseInt(prompt('introduce la medida de la altura del rectangulo '))
let ladosBaseRectangulo = parseInt(prompt('introduce la medida de la base del rectangulo'))
let ladosAlturaTriangulo  = parseInt(prompt('introduce la medida de la altura del triangulo'))
let ladosBaseTriangulo = parseInt(prompt('introduce la medida de la base del triangulo'))
let ladosCuadrado = parseInt(prompt('introduce la medida del lado del cuadrado'))
let radioCirculo = parseInt(prompt('Introduce el radio del circulo'))

function areaRectangulo (ladosAlturaRectangulo,ladosBaseRectangulo) {
    return ladosAlturaRectangulo*ladosBaseRectangulo
}

function perimetroRectangulo(ladosAlturaRectangulo,ladosBaseRectangulo) {
    return (ladosAlturaRectangulo*2)+(ladosBaseRectangulo*2)  
}

function areaTriangulo(ladosAlturaTriangulo,ladosBaseTriangulo) {
    return (ladosAlturaTriangulo*ladosBaseTriangulo)/2
}

function perimetroTriangulo(ladosAlturaTriangulo,ladosBaseTriangulo) {
    return ladosAlturaTriangulo*3
}

function areaCuadrado(ladosCuadrado) {
    return ladosCuadrado**2    
}

function perimetroCuadrado(ladosCuadrado){
    return ladosCuadrado*4
}

function areaCirculo(radioCirculo) {
    return Math.PI*(radioCirculo**2)
}

function perimetroCirculo(radioCirculo){
    return 2*Math.PI*radioCirculo
}

console.log (areaRectangulo(ladosAlturaRectangulo,ladosBaseRectangulo))
console.log (perimetroRectangulo(ladosAlturaRectangulo,ladosBaseRectangulo))
console.log(areaTriangulo(ladosAlturaTriangulo,ladosBaseTriangulo))
console.log(perimetroTriangulo(ladosAlturaTriangulo,ladosBaseTriangulo))
console.log(areaCuadrado(ladosCuadrado))
console.log(perimetroCuadrado(ladosCuadrado))
console.log(parseInt(perimetroCirculo(radioCirculo)))
console.log(parseInt(areaCirculo(radioCirculo)))

/**Crear una función que reciba un array de strings e imprime por pantalla el array con los strings capitalized,(pista: substring) ejmp: let =[jose,maca,jorge], output [Jose,Maca,Jorge].*/

let arrayFive = ['joSe']

function capitalizarPrimeraLetra(array) {
    return array[0].toUpperCase().charAt(0) + array[0].substring(1).toLowerCase()
}

console.log(capitalizarPrimeraLetra(arrayFive))


/**Crear una función que dado un número y un array de números, te devuelva  por pantalla la posición 
 * donde se encuentra el número o  -1 si no lo encuentra.(medium)*/

let number = parseFloat(prompt("introduce un numero"))
let arrayNum = [2,4,3,5,6,7]
let encontrado = false;

// if (encontrado === true)
// if (encontrado)

// if (encontrado === false)
// if (!encontrado)

function findPosition(a,array) {
    let result= 0
    for (let i = 0; i < array.length && !encontrado; i++) {
        if (a === array[i]) {
            result = i
            encontrado = true;
        }
        else {
            result = -1
        }
    }
    return result;
}

document.write(`<p>La posicion en el array ${arrayNum} del numero introducido es : ${findPosition(number,arrayNum)}</p>`)



// /**una funcion que checkee si una string es palindromo (pudiendo ser una frase con espacios y tal) */

let palin = prompt('Introduce una palabra')
function palindromo(palin) {
    let stringInvertido = palin.split("").reverse().join("");

    return stringInvertido === palin ? "es palindromo" : "no es palindromo";
  }
  console.log(palindromo(palin));

/**una funcion q ordene un array de menor a mayor en el que solo puede haber 0, 1 y 2 sin usar sort */

const countValues = (arr, n) => arr.reduce((acc, v) => acc + (v === n ? 1 : 0), 0);

const generateArrayValues = (arr, n) => {
    const numberElements = countValues(arr, n);
    return Array(numberElements).fill(n);
};

// versión arrow function
const sortList = arr => generateArrayValues(arr, 0)
    .concat(
        generateArrayValues(arr, 1),
        generateArrayValues(arr, 2)
    );

function sortList(arr) {
    const zeroArray = generateArrayValues(arr, 0); // paso 1
    const oneArray = generateArrayValues(arr, 1); // paso 2
    const twoArray = generateArrayValues(arr, 2); // paso 3
    return zeroArray.concat(oneArray, twoArray); // paso 4
}


/**Una función que dado un string comprobar si una expresion de parentesis, corchetes y llaves juntas en string es correcta (ejemplo: ‘[({[]})]’ seria true // ‘[{}’ seria false) */


// Entrada: string
// Salida: boolean si la cadena es correcta
// Ejemplos:
//   - [({[]})] --> true
//   - [{} --> false
//   - () --> true
//   - ([)] --> false
//   - ()() --> true
//   - [(({}))}] --> false
  
// 1. recorro caracter a caracter.
//       a- Si el caracter de es de apertura lo apilo en un array de aperturas pendientes
//       b- Si el caracter es de cierre:
//           a- Si no hay aprturas pendientes --> false
//           b- Si hay aperturas pendientes:
//               a- Si la ultima apertura coincide con el caracter de cierre
//                   Quito la ultima apertura de mi array (desapilar)
//               b- Si la ultima apertura NO coincide --> false
// 2. Si quedan aperturas pendientes --> false
// 

function areBlocksValid(str){
  const stack = [];// creo una pila vacía

  for(let i=0; i<str.length; i++){ // recorro caracter a caracter. (paso 1)
      const nextSymbol = str.charAt(i);
      if(nextSymbol==='[' || nextSymbol==='{' || nextSymbol==='('){ // paso 1.a
          stack.push(nextSymbol); // 
      }else{
          // entonces es de cierre
          if(stack.length === 0){ // 1.b.a
              return false;
          }else{
              if( (nextSymbol === ']' && stack[stack.length-1] === '[')
               || (nextSymbol === ')' && stack[stack.length-1] === '(')
               || (nextSymbol === '}' && stack[stack.length-1] === '{')){
                  stack.pop(); // vamos bien, asi que desapilamos 1.b.b.a
              }else{
                  return false;
              }
          }
      }
  }

  return stack.length === 0; // paso 2, no hay pendientes
}
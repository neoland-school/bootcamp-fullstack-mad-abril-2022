
// 1- Crea una función que devuelva el tipo de parámetro de entrada y píntalo por pantalla , 
// usar  arrow function.

/**
 * La función dado un parámetro de entrada, devuelve que tipo de dato es ese parámetro.
 *  input: cualquier tipo de dato --> 'casa', 100, [1,2,4], false,...
 *  output: tipo de dato (typeof) del parámetro --> string, number, object, boolean,...
 * 
 *  Ejemplos:
 *  'casa' --> string
 *  100 --> number
 *  [1,2,3,4] --> object
 *  false --> boolean
 * 
 * 1. Comprobar que tipo de dato es el parámetro obtenido (Typeof).
 */

 const entryParameter = [];

 const identifyTypeOfData = data => typeof data;

 document.write(`<p>El tipo de dato del parámetro proporcionado es: ${identifyTypeOfData(entryParameter)}</p>`);



// 2- Function que dado dos boleanos por prompt devuelva el AND de estos por pantalla, 
// usar function declaration.

/**
 * La función dados dos parámetros booleanos, nos retorna el AND de estos.
 * 
 *  input: 2 booleanos
 *  output: 1 booleano
 * 
 * Ejemplos:
 *  true,true --> true
 *  true,false --> false
 *  false,true --> false
 *  false,false --> false
 * 
 *  1- Lee los dos parámetros de entrada
 *  2- Compara los parámetros y devuelve su AND
 */


const booleanOne = true;
const booleanTwo = true;

function booleanComparison (bOne, bTwo) {
    return booleanOne && booleanTwo;
};

const booleanComparisonResult = booleanComparison(booleanOne, booleanTwo);
document.write(`<p>El AND de los dos booleanos proporcionados es: ${booleanComparisonResult}</p>`);



// 3- Crea una función que dado un numero por prompt, 
// devuelva el número al revés por pantalla, usar function expression

/**
 * Función que dado un número como parámetro, devuelve el número al revés.
 * 
 *  input: number
 *  output: number
 * 
 *  Ejemplos:
 *  123 --> 321
 *  234590 --> 095432
 *  1 --> 1
 *  'marco' --> error
 * 
 *  1- Si el parámetro es un número:
 *      a- Convertimos el number a string
 *      b- Convertimos el string en un array de caracteres.
 *      c- Damos la vuelta al array
 *      d- Convertimos el array de nuevo en un string. 
 *      e- Convertimos de nuevo el string a number. --> Estos 5 pasos los podemos hacer en una linea.
 * 
 *  2- Si el parámetro es un número pero de tipo string.
 *      a- Convertimos el string en un array de caracteres.
 *      b- Damos la vuelta al array
 *      c- Convertimos el array de nuevo en un string. --> Estos 3 pasos los podemos hacer en una linea.
 */

// PARAMETRO DADO COMO STRING
const stringNumParameter = '23463';

const revertStringNumber = function (strNum) {
    reverse = strNum.split('').reverse().join('');
    return reverse;
};

const revertedStringNumber = revertStringNumber(stringNumParameter);
document.write(`<p>El número proporcionado (${stringNumParameter}) invertido es: ${revertedStringNumber}</p>`);

// PARAMETRO DADO COMO NUMBER

const numParameter = 23463;

const revertNumber = function (num) {
    reverse = Number(String(num).split('').reverse().join(''));
    return reverse;
};

const revertedNumber = revertNumber(numParameter);
document.write(`<p>El número proporcionado (${numParameter}) invertido es: ${revertedNumber}</p>`);


// 4- Crear una función para ordenar un array de números desordenados de mayor a menor.(easy)

/**
 * Función que dado un array de números, lo ordene de mayor a menor.
 * 
 *  input: array de números
 *  output: array de números
 * 
 *  Ejemplos:
 *  [2,3,4,1] --> [1,2,3,4]
 *  [5,8,1,3,0] --> [0,1,3,5,8]
 *  [3,3,3] --> [3,3,3]
 *  [] --> []
 * 
 *  1- Usamos el método sort y le aplicamos una función de comparación.
 */

const numArray = [2,5,9,1,1,0,3];

const sortingNumArray = arr => arr.sort((a,b) => a-b);

document.write(`<p>El array proporcionado [${numArray}] ordenado es: [${sortingNumArray(numArray)}]</p>`);

//5- Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10.(easy)

/**
 * Función que dado un array de números, devuelve un nuevo array SOLO con los números mayores de 10.
 * 
 *  input: array de números
 *  output: array de números
 * 
 *  Ejemplos:
 *  [2,13,14,1] --> [13,14]
 *  [55,8,11,3,10] --> [55,11]
 *  [33,33,3] --> [33,33]
 *  [] --> []
 * 
 *  1- Recorremos el array de principio a fin pasando por cada uno de los índices.
 *  2- Solo nos quedamos con aquellos valores que sean mayores que 10
 *  3- Retornamos el nuevo array.
 */

const numericArray = [55,8,11,3,10];

const extractNumbersOverTen = function (arr) {
    newArray = arr.filter(v => v>10);
    return newArray;
};

document.write(`<p>El array proporcionado [${numericArray}] tiene los siguientes 
                números mayores que 10: [${extractNumbersOverTen(numericArray)}]</p>`);




//6- Crear una función que dado una URL (Se representa con un string) por prompt,  
// me diga o no si pertenece al dominio de github,  usar function declaration.

/**
 * Función que dado un una URL (string), indique si pertenece o no al dominio de github.
 * 
 *  input: string
 *  output: boolean
 * 
 *  Ejemplos:
 *  https://www.github.com --> true
 *  https://www.google.com --> false
 *  https://github.com/MarcoGarciaKoch/bootcamp-fullstack-mad-abril-2022/ --> true
 * 
 * 1- Pasamos a lowercase todo el string para evitar complicaciones con mayúsculas. 
 * 2- Buscamos si la palabra github esta contenida en el string mediante includes.
 */

const urlParameter = 'https://www.github.com';

function isStrContainedInUrl (str) {
    let containUrlstring = str.toLowerCase().includes('github');
    return containUrlstring;
}

const result = isStrContainedInUrl(urlParameter);
document.write(`<p>¿El string proporcionado (${urlParameter}) pertenece al dominio
                de github?: ${result}</p>`);




// 7- Crear una función que calcule el Maximo Comun Divisor (Hint: Utilizar el algoritmo de euclides) 
// y lo imprima por pantalla.

/**
 * Función que calcule el MCD (Máximo Común Divisor) dados 2 o más números.
 * 
 *  input: 2 number
 *  output: 1 number
 * 
 *  Ejemplos:
 *  18,24 --> 6
 *  15,20 --> 5
 *  14,28 --> 14
 *  36, 120 --> 12
 *  0, 10 --> 10
 *  -2, 10 --> Error
 * 
 *  1- Aseguramos que los números son positivos.
 * 2- Si uno de los dos número es 0 retornamos el valor del otro número.
 *  3- Calculamos para cada número los divisores que nos dan resto 0 y los guardamos en un array.
 *  4- Comparamos los dos array y buscamos el número más alto que coincida en ambos arrays.
 *  5- Retornamos el MCD. De no haber coincidencia retornamos 1.
 */

const firstNum = 72;
const secondNum = 16;

function calculationMCD (num1, num2) {
    const arrNumOne = [];
    const arrNumTwo = [];
    let divisors = [];
    let mcd;

    if (num1 < 0 || num2 < 0){
        return 'Error. Número negativo proporcionado';
    }else if (num1 === 0 || num2 === 0) {
        return num1+num2;
    }else {
        for(i=1; i<=num1; i++) {
            if(num1%i===0) {
                arrNumOne.push(num1/i);
            }
        }
        for(i=1; i<=num2; i++) {
            if(num2%i===0) {
                arrNumTwo.push(num2/i);
            }
        }  
    }
    divisors = arrNumOne.filter(n => arrNumTwo.includes(n));
    mcd = divisors.sort((a,b) => b-a).shift();
    return mcd;
}

const resultMCD = calculationMCD(firstNum,secondNum);
document.write(`<p>El MCD de ${firstNum} y ${secondNum} es: ${resultMCD}</p>`);



// 8- un número n,  devuelva un string con  los números primos menores o iguales a n separados por , . 
// Un número primo es aquel que solo se puede dividir por el mismo o por 1.  
// Por ejemplo si n=30, entonces la función devuelve 2, 3, 5, 7, 11, 13, 17, 19, 23, 29


/**
 * Función que calcule los número primos que existen hasta llegar a ese número.
 * 
 *  input: number
 *  output: serie de number
 * 
 *  Ejemplos:
 *  3 --> 3
 *  10 --> 3,5,7
 *  20 --> 3,5,7,11,13,17,19
 *  -2 --> ''
 * 
 *  1- 
 */

let numberToGetPrimes = 20;
function PrimeCalc (n) {
let Arr = [];
for(let i=1; i<=n; i++){
    if(i%2 === 1){
        let count= 0;
        for(let j=1; j<=i; j++){
            if(i%j === 0){
                count++;
            }
        }
        if(count===2){
            Arr.push(i);
        }
        count=0;
    }
}
return Arr;
}
let resultPrimeCalc = PrimeCalc(numberToGetPrimes);
document.write(`<p>${resultPrimeCalc}</p>`);



//9- La sucesión de fibonacci es una lista de números infinita 
// muy presente en la vida real (https://www.neoteo.com/la-sucesion-de-fibonacci-en-la-naturaleza/). 
// Esta sucesión probablemente nos suene de la  película "El código Da Vinci". 
// Consiste en calcular  el siguiente número teniendo en cuenta el valor de los anteriores, 
// siguiendo la siguiente  fórmula. fib(n) = fib(n-1) + fib(n-2). 
// Es decir el fibonacci de 3 por ejemplo se calcula sumando el fib(2) junto con el fib(1). 
// Para los casos más básicos tenemos que fib(0) = 0 y fib(1) = 1.    
// Construir una función que dado un numero entero devuelva su número de fibonacci. 
// Solicitar el entero al usuario. Pista: Se puede hacer con un unico bucle.

/**
 * Función que dado un número n, te calcule los n primeros números de fibonacci.
 *  - fib(n) = fib(n-1) + fib(n-2)
 * 
 *  - Casos base:
 *      fib(0) = 0;
 *      fib(1) = 1;
 * 
 *  input: number
 *  output: string con la sucesión separada por `,`.
 * 
 *  Ejemplos:
 *  fib(2) --> 0,1,1
 *  fib(3) --> 0,1,1,2
 *  fib(5) --> 0,1,1,2,3,5
 *  fib(10) --> 0,1,1,2,3,5,8,13,21,34,55
 * 
 *  1- Crear dos variables con el fib(0) y el fib(1);
 *  2- Crear una variable string donde iremos concatenando la salida
 *  2- Repetir hasta llegar a fib(n)
 *      a- En cada vuelta tenemos que concatenar a la salida el valor de la sucesión.
 *      b- Actualizar las dos varibles númericas para la siguiente vuelta del bucle.
 *  3- Devolvemos el string.
 * 
 */

const givenNum = 20;

function calculateFibNumbers (n) {
    let fib_1 = 1; //representa fib(n-1)
    let fib_2 = 0; //representa fib(n-2)

    let sucession = n===0 ? '0' : '0,1'; //cadena para los dos primeros valores

    for(let i=2; i<=n; i++) {
        const fib_i = fib_1+fib_2;
        sucession += `, ${fib_i}`; //fib(i) = fib(i-1) - fib(i-2)

        fib_2 = fib_1; //En la siguiente vuelta fib(i-2) es lo que esta en fib(i-1)
        fib_1 = fib_i; //En la siguiente vuelta fib(i-1) es lo que esta en fib(i)
    }

    return sucession;
}

const resultFib = calculateFibNumbers(givenNum);
document.write(`<p>Los ${givenNum} primeros números de fibonacci son: ${resultFib}</p>`);
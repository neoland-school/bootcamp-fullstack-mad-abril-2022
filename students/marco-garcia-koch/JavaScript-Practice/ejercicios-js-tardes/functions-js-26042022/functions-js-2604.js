
// 1- Crear una función que reciba por parámetros 2 array. 
// Esta función devolverá los 2 arrays concatenados y los mostrará en el navegador.(easy).

 function concatArray (arrayOne, arrayTwo) {
    const newArr = arrayOne.concat(arrayTwo);
    return newArr;
 }

 const firstArr = ['Hola', 'mi', 'nombre', 'es'];

 const secondArr = ['Marco', 'Garcia', 'Koch']

 let result = concatArray(firstArr,secondArr);

document.write(`<p>${result}</p>`);



// 2- Crear una función que reciba un parámetro de entrada y 
// que imprima por pantalla true si el parámetro es un array y false si es otro tipo de dato.(easy).

function dataTypeCheck (data) {
    const result = typeof data;
    return result === 'object' ? true : false;
}

const dataInput = [1,2,3];

let dataType = dataTypeCheck(dataInput);

document.write(`<p>${dataType}</p>`);


// 3 -Crear una función que reciba un array de números y 
// devuelva un array con los que son mayores que 10.(easy).

function biggerThanTen (data) {
    return data.filter(v => v>10);
}

const numArray = [1,2,12,34,5,5,67];

let bigTen = biggerThanTen(numArray);

document.write(`<p>${bigTen}</p>`);



// 4 -Escribir varias funciones que dada las medidas por prompt(radio, lados, etc) 
// que calculen área y perímetro de diferentes figuras geométricas (Rectángulo, Cuadrado, triángulo y Círculo), 
// para el rectangulo y cuadrado usaremos arrow function.

const rectBase = parseFloat(prompt('Base del rectángulo'));
const rectAltura = parseFloat(prompt('Altura del rectángulo'));
const cuadradoLado = parseFloat(prompt('Lado del cuadrado'));
const trianguloLado = parseFloat(prompt('Lado del triangulo equilatero'));
const circuloRadio = parseFloat(prompt('Radio del círculo'));

const arrRectangulo = (base,altura) => {
    let resultado = [];
    resultado[0] = `Àrea: ${base * altura} cm2`;
    resultado[1] = `Perímetro: ${(base*2) + (altura*2)} cm`;
    return resultado;
}

const arrCuadrado = lado => {
    let resultado = [];
    resultado[0] = `Àrea: ${cuadradoLado**2} cm2`;
    resultado[1] = `Perímetro: ${cuadradoLado*4} cm`;
    return resultado;
}

const triangulo = function (lado) {
    let resultado = [];
    let altura = ((lado**2)-((lado/2)**2))
    resultado[0] = `Àrea: ${(lado*altura)/2} cm2`;
    resultado[1] = `Perímetro: ${lado*3} cm`;
    return resultado;
}

const circulo = function (radio) {
    let resultado = [];
    resultado[0] = `Àrea: ${(Math.PI)*(radio**2)} cm2`;
    resultado[1] = `Perímetro: ${2*Math.PI*radio} cm`;
    return resultado;
}

let arrTriangulo = triangulo(trianguloLado);
let arrCirculo = circulo(circuloRadio);

document.write(`<p>${arrRectangulo(rectBase,rectAltura)}</p>`);
document.write(`<p>${arrCuadrado(cuadradoLado)}</p>`);
document.write(`<p>${arrTriangulo}</p>`);
document.write(`<p>${arrCirculo}</p>`);




// 5- Crear una función que reciba un array de strings e imprime por pantalla el array con los strings capitalized,
// (pista: substring) ejmp: let =[jose,maca,jorge], output [Jose,Maca,Jorge].

function capitalizeStr (data) {
    let capStr = data.map(value => {
         return value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
    });     
    return capStr;
}

const strArray = ['marco','bryan','alberto','jose'];

let strCapitalized = capitalizeStr(strArray);

document.write(`<p>${strCapitalized}</p>`);



// 6- Crear una función que dado un número y un array de números, 
// te devuelva  por pantalla la posición donde se encuentra el número o  -1 si no lo encuentra.(medium)

function numPosition (n, array) {
    return array.findIndex(n => n === 10);
}

const n = 10;
const nArray = [1,2,3,10];

let numResult = numPosition(n, nArray);

document.write(`<p>${numResult}</p>`);





// 7- Una funcion que checkee si una string es palindromo (pudiendo ser una frase con espacios y tal)

 function checkPalindrome (string) {
     let originalStringCleaned = string.split(" ").join('').toLowerCase();
     originalStringCleaned = originalStringCleaned.replaceAll(/[àáäâ]/g,'a');
     originalStringCleaned = originalStringCleaned.replaceAll(/[èéëê]/g,'e');
     originalStringCleaned = originalStringCleaned.replaceAll(/[ìíïî]/g,'i');
     originalStringCleaned = originalStringCleaned.replaceAll(/[òóöô]/g,'o');
     originalStringCleaned = originalStringCleaned.replaceAll(/[ùúûü]/g,'u');
     let newStringToCompare = originalStringCleaned.split('').reverse().join('');

     return originalStringCleaned === newStringToCompare;
 }

let phrase = 'Dábale arroz a la zorra el abad';

let palindromeResult = checkPalindrome(phrase);

document.write(`<p>${palindromeResult}</p>`);



// 8- Una funcion que ordene un array de menor a mayor en el que solo puede haber 0, 1 y 2 sin usar sort

function arraySort (array) {
    let arrZero = [];
    let arrOne = [];
    let arrTwo = [];

    array.forEach((v,i) => {
        if (v === 0) {
            arrZero.push(0);
        }else if (v === 1){
            arrOne.push(1);
        }else {
            arrTwo.push(2);
        }
    });
    return arrZero.concat(arrOne,arrTwo)  
}

const numericArray = [0,1,0,2,0,2,1,1];

let sortedResult = arraySort(numericArray);

document.write(`<p>${sortedResult}</p>`);


// 9- Una función que dado un string comprobar si una expresion de parentesis, 
// corchetes y llaves juntas en string es correcta (ejemplo: ‘[({[]})]’ seria true // ‘[{}’ seria false)

/* 
        * Una función que dado un string comprobar si una expresion de parentesis, corchetes y llaves juntas es correcta 
          (ejemplo: ‘[({[]})]’ seria true // ‘[{}’ seria false)
          Entrada: string
          Salida: boolean si la cadena es correcta
          Ejemplos:
            - [({[]})] --> true
            - [{} --> false
            - () --> true
            - ([)] --> false
            - ()() --> true
            - [(({}))}] --> false
            
          1. recorro caracter a caracter.
                a- Si el caracter de es de apertura lo apilo en un array de aperturas pendientes
                b- Si el caracter es de cierre:
                    a- Si no hay aprturas pendientes --> false
                    b- Si hay aperturas pendientes:
                        a- Si la ultima apertura coincide con el caracter de cierre
                            Quito la ultima apertura de mi array (desapilar)
                        b- Si la ultima apertura NO coincide --> false
          2. Si quedan aperturas pendientes --> false
        */ 

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

const blockString = '[(({}))]';
const resultBlocksValid = areBlocksValid(blockString);

document.write(`<p>${resultBlocksValid}</p>`);
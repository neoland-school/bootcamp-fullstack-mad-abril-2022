//EXERCISES - 18/04/2022

// 1. Crea una variable de todos los tipos primitivos de javascript y mediante el document.write escribe 
//     por pantalla el tipo.

const number = 123;
const string = 'Hola Mundo';
const boolean = false;
const empty = undefined;
const noValue = null;
const infinite = Infinity;

document.write(typeof number + '<br>');
document.write(typeof string + '<br>');
document.write(typeof boolean + '<br>');
document.write(typeof empty + '<br>');
document.write(typeof noValue + '<br>');
document.write(typeof infinite + '<br>');

// 2. Introduce un texto en prompt y este debe aparecer en un alert.

const promptText = prompt('Escribe un texto');

alert(promptText);

// 3. Crear dos variables con tu nombre y apellido de tipo string y concatenalas con el operador y luego 
// repite  la operación con plantillas literales, pinta en un h1 mediante el write el resultado.

const nombre = 'Marco ';
const apellidos = 'García Koch';

const resultado = nombre + apellidos;

document.write(`<h1>${resultado}</h1>`);

// 4. Imprimir por pantalla la longitud del string resultante del ejercicio anterior.

document.write(resultado.length);

// 5. Mediante prompt guarda una variable de tipo string que sea un color,
//  pinta un div de 150 x 150 que contenga el color indicado en el prompt.

const color = prompt('Escribe un color');

document.write(`<div style="height:150px; width:150px; background-color:${color}"></div>`);


//EXERCISES - 19/04/2022


// 1- Crear dos variables numéricas y realiza su suma, resta multiplicación y división, 
// imprime  por pantalla los dos números con la operación, el igual y el resultado.

let firstNumber = 10;
let secondNumber = 41;

document.write(`<p>Suma: ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}</p>`);
document.write(`<p>Resta: ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}</p>`);
document.write(`<p>Multiplicación: ${firstNumber} x ${secondNumber} = ${firstNumber * secondNumber}</p>`);
document.write(`<p>División: ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}</p>`);


// 2 - Ejercicio que guarde en una variable mediante el uso de prompt, los grados Celsius (X) 
// e imprima por pantalla sus correspondientes grados Farenheit, ejemplo "X ºC son YºF".

let temp = prompt('Introduzca los grados Celsius que desee');

temp = parseFloat(temp);

document.write(`<p>${temp} °C son ${(temp*9 / 5) + 32} ºF</p>`);


// 3 - Con el ejercicio de la calculadora de grados celsius, imprime por pantalla  
// si una variable en ºC temperatura  es mayor de 87 ºF.

const calculator = (temp * 9 / 5) + 32;

document.write(`<p>${calculator > 87 ? calculator : 'La temperatura es menor de 87'} ºF</p>`);


// 4 - Crea una variable de tipo string que sea 55 y otra de tipo number que sea 55 con el uso de 
// operadores de comparación pintar por pantalla true y luego false.

let typeString = '55';
let typeNumber = 55;

document.write(`<p>${typeNumber == typeString}</p>`);
document.write(`<p>${typeNumber === typeString}</p>`);


// 5 - Introduce una número por prompt y mediante operadores incremento y decremento y operadores de asignación
// imprime por pantalla el número mas 1 y el número menos 1 el número multiplicado y divido por si mismo.

let IntNumber = prompt('Introduce un número');

IntNumber = parseFloat(IntNumber);

document.write(`<p>${++IntNumber}</p>`);
document.write(`<p>${--IntNumber}</p>`);
document.write(`<p>${IntNumber *= IntNumber}</p>`);
document.write(`<p>${IntNumber /= IntNumber}</p>`);


// 6 - Mediante el uso de prompt, crea dos variables que representen el peso y la altura e indicar por pantalla 
// si esa persona tiene "Obesidad de clase II" o no según la OMS.

let weight = prompt('Introduce tu peso');
let height = prompt('Introduce tu altura');

weight = parseFloat(weight);
height = parseFloat(height);

let imc = weight / (height**2);

document.write(`<p>${imc >= 35 && imc <= 39.9 ? 'Tienes obesidad de clase II según la OMS' : 
                'No tienes obesidad de clase II según la OMS'}</p>`);


// 7 - Crea  una variable mediante prompt y proporcionarle un valor numérico,  
// imprimir por pantalla si es par o impar.

let evenOdd = prompt('Introduce un número para ver si es par o impar');

evenOdd = parseFloat(evenOdd);

document.write(`<p>El número ${evenOdd} es ${evenOdd % 2 === 0 ? 'PAR' : 'IMPAR'}</p>`);


// 8 - Mediante prompt crear una variable que represente el numero de hijos e imprime por pantalla 
// si es familia numerosa o no (revisar que se considera familia numerosa) (

let familyNum = prompt('Introduce el número de hijos');

familyNum = parseFloat(familyNum);

document.write(`<p>${familyNum >= 3 ? 'Tienes familia numerosa' : 'No tienes familia numerosa'}</p>`);


// 9 - (HARD) Mediante prompt crear una variable que represente el saldo de tu cuenta, 
// luego crea  3 variables numéricas que cada una represente un item de tu cesta 
// (ej: tomates, pescado, etc) de la compra y dales un precio. Imprimir por pantalla  
// la siguiente imagen usando solo document write y css, si el numero ingresado es mayor 
// o igual que el total de la compra debera aparecer el boton de comprar de lo contrario no se mostrara.

let balance = prompt('Introduce el saldo de tu cuenta');

balance = parseFloat(balance);

const tomato = 3;
const eggs = 4;
const fish = 13; 
const totalPurchase = tomato + eggs + fish;

const buttonValidity = balance >= totalPurchase ? 'button' : 'button-none';

document.write(`<section>
                <div class="box">
                    <div class="title">Shopping Car</div>
                    <div class="product">
                        <span class="span_name">Tomates</span>
                        <span>Price</span>
                        <span>${tomato}</span>
                    </div>
                    <div class="product">
                        <span class="span_name">Huevos</span>
                        <span>Price</span>
                        <span>${eggs}</span>
                    </div>
                    <div class="product">
                        <span class="span_name">Pescado</span>
                        <span>Price</span>
                        <span>${fish}</span>
                    </div>
                    <div class="total">
                        <span class="span_name">Car Totals</span>
                        <span class="balance">Total ${tomato + eggs + fish}</span>
                    </div>
                    <button class="${buttonValidity}">Comprar</button>
                </div>
                </section>`);
                
               
                      
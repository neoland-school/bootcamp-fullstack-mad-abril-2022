// Crear dos variables numéricas y realiza su suma, 
// resta multiplicación y división,

const a = 2;
const b = 5;

document.write(`<p>Suma a + b = ${a+b}</p>`);
document.write(`<p>Resta a - b = ${a-b}</p>`);
document.write(`<p>Multiplicación a * b = ${a*b}</p>`);
document.write(`<p>Potencia b de a ${a**b}</p>`);
document.write(`<p>Resto b de a ${b%a}</p>`);

// Ejercicio que guarde en una variable mediante el uso 
// de prompt,  los grados Celsius (X) e imprima por pantalla sus 
// correspondientes grados Farenheit, ejemplo "X ºC son YºF".

// const gradosCelsius = parseFloat(prompt('Introduzca los grados centigrados'));
// document.write(centigrados * 1.8 + 32);

// Con el ejercicio de la calculadora de grados celsius, 
// imprime por pantalla  si una 
// ariable en ºC temperatura  es mayor de 87 ºF.

gradosCelsius = parseFloat(prompt('Introduzca los grados centigrados'));
const formulaFarenheit = (gradosCelsius * 1.8 + 32);
document.write(`${gradosCelsius} grados centigrados es igual a ${formulaFarenheit} grados Farenheit`);
document.write('<br>');
// document.write(farenheit * 1.8 + 32);
// let result = a>3 ? 1 : 0; 
// document.write(`<p>sube sube la temperatura: 
// ${farenheit >= 87 ? farenheit : }</p>`);



// -------
// Crea una variable de tipo string que sea 55 y otra de tipo 
// number que sea 55 con el uso de operadores de comparación 
// pintar por pantalla true y luego false.


const string = '55';
const numberr = 55;

// string == numberr;
// string === numberr;
// document.write(string === numberr);
// document.write(string == numberr);
// document.write(`<p></p>`);



// Introduce una número por prompt y mediante operadores incremento y 
// decremento y operadores de asignación  imprime por pantalla el número 
// mas 1 y el número menos 1 el número multiplicado y divido por si mismo.

let operadores = prompt('Introduzca tu numero el cual vamos a incrementar'); 
let suma = ++operadores;
document.write(`${suma}`);

// Mediante el uso de prompt, crea dos variables que representen el peso y la altura e indicar por pantalla si 
// esa persona tiene "Obesidad de clase II" o no según la OMS.


let peso = parseFloat(prompt('Introduzca el peso en kg'));
let altura = parseFloat(prompt('Introduzca la altura en metros'));
let imc = peso  / (altura**2);
// let resultado = imc >= 36 <= 39;
let obResultado = (imc>=35) && (imc<=39.9);
document.write(`Obesidad clase II ${obResultado}`);


// Crea  una variable mediante prompt y proporcionarle un valor numérico,  
// imprimir por pantalla si es par o impar.

let numePrompt = prompt('Introduzca tu numero que veremos si es par o impar'); ;
numePrompt = "El numero introducido es:  " + (numePrompt%2===0 ? "Par" : "Impar");
document.write(`<p>${numePrompt}</p>`); 



// Mediante prompt crear una variable que represente el numero de hijos
//  e imprime por pantalla si es familia numerosa o no 
//  (revisar que se considera familia numerosa)

const numeroHijos = prompt('Introduzca el número de hijos que tenga'); 
let familiaNumerosa = (numeroHijos>=3);
document.write(`${familiaNumerosa}`); 


// (HARD) Mediante prompt crear una variable que represente el saldo 
// de tu cuenta, luego crea  3 variables numéricas que cada una 
// represente un item de tu cesta (ej: tomates, pescado, etc) 
// de la compra y dales un precio. Imprimir por pantalla  la 
// siguiente imagen usando solo document write y css, si el 
// numero ingresado es mayor o igual que el total de la compra 
// debera aparecer el boton de comprar de lo contrario

let saldoCuenta = parseFloat(prompt('Introduzca el saldo de su cuenta')); 
let solomillo = 30;
let pipas = 2;
let berzas = 11;




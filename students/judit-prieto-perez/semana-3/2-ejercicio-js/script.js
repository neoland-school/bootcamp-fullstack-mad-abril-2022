/*Crear dos variables numéricas y realiza su suma, resta multiplicación y división, 
imprime  por pantalla los dos números con la operación, el igual y 
el resultado.*/


const a = 23;
const b = 4;


document.write(`<p> la suma de ${a} y ${b} es = ${a+b}</p>`);
document.write(`<p>La resta de ${a} y ${b} es = ${a-b}</p>`);
document.write(`<p>La multiplicacion de ${a} y ${b} es = ${a*b}</p>`);
document.write(`<p>La división de ${a} y ${b}es = ${a/b}</p>`);

document.write(`<p>Ejercicio DOS:</p>`);

/*Ejercicio que guarde en una variable mediante el uso de prompt,  los grados Celsius (X) e 
imprima por pantalla sus correspondientes grados Farenheit, ejemplo "X ºC son YºF".*/

/let grados =  prompt('Introduce el numero para convertir a Fahrenheit');
let fahrenheit = (grados*9/5) +32*1.8

document.write(`<p>La temperatura equivale a ${fahrenheit} grados Fahrenheit</p>`);

document.write(`<p>Ejercicio TRES:</p>`);

/*Con el ejercicio de la calculadora de grados celsius, imprime por pantalla  si una variable en 
ºC temperatura  es mayor de 87 ºF.*/

let  may= fahrenheit > 87 == true;
    may = fahrenheit  < 87 == false;

document.write(`¿Es el número introducido mayor a 87?${may}`);

document.write(`<p>Ejercicio CUATRO:</p>`);
/*
Crea una variable de tipo string que sea 55 y otra de tipo number
 que sea 55 con el uso de operadores de comparación pintar por pantalla 
 true y luego false.*/


const string = '55';
const number = 55;

const igual = string==number;
document.write(`Estas dos variables son: ${igual}`);

const noigual = string===number;

document.write(`Estos dos variables son: ${noigual}`);

document.write(`<p>Ejercicio CINCO:</p>`);

/*ntroduce una número por prompt y mediante operadores incremento y decremento y operadores de asignación 
 imprime por pantalla el número mas 1 y el número menos 1 el número multiplicado y divido por si mismo.*/

 let num1 = prompt('Introduce el numero del ejercicio 5: ');

 let result= ++num1;
 let result2 = result--;

 let result3 = (num1*num1)/num1
 
 document.write(`El resultado del incremento aplicado es:  ${result}`);
 document.write(`El resultado del decremento aplicado es:  ${result2}`);

 document.write(`El resultado de la operación final es:  ${result3}`);


 document.write(`<p>Ejercicio SEIS:</p>`);

/*Mediante el uso de prompt, crea dos variables que representen el peso y la altura e indicar por
 pantalla si esa persona tiene "Obesidad de clase II" o no según la OMS.*/


let peso = parseFloat(prompt('Introduce tu peso'));
let altura = parseFloat(prompt('Introduce tu altura'));

let imc = (peso/(altura*altura));

document.write(`Tu IMC es de ${imc}`);

let obeso = (imc >= 35) && (imc <= 39.9);

document.write(`Estas delgado: ${obeso}`);

document.write(`<p>Ejercicio SIETE:</p>`);

/*Crea  una variable mediante prompt y proporcionarle un valor
 numérico,  imprimir por pantalla si es par o impar.*/

 let var1 = parseFloat(prompt('Introduce el primer numero'));

let par = var1%2 === 0;

document.write(`<p>Es par: ${par}</p>`);

/*Mediante prompt crear una variable que represente el numero de hijos e imprime por pantalla si es familia numerosa o no (revisar que se considera familia numerosa) (
*/

document.write(`<p>Ejercicio ocho:</p>`);

let child = parseInt(prompt('Introduce el número de hijos'));

let numerosa = child >= 3;

document.write(`Tienes familia numerosa ${numerosa}`);

document.write(`EJERCICIO 9`);
/*Mediante prompt crear una variable que represente el saldo de tu cuenta, 
luego crea  3 variables numéricas que cada una represente un item de tu cesta
 (ej: tomates, pescado, etc) de la compra y dales un precio. Imprimir por pantalla 
  la siguiente imagen usando solo document write y css, si el numero ingresado es mayor
   o igual que el total de la compra debera aparecer el boton de comprar de lo contrario 
   no se mostrara.*/

let saldo = parseInt(prompt('Introduce el saldo de tu cuenta'));

let tomate = 4;
let zanahoria = 5;
let lechuga = 7;

let total= tomate+zanahoria+lechuga

let compra = saldo >= total

document.write(`El sistema te permite comprar?${compra}`)


document.write(`<div class="box"></div>`);


const mercado = `<div class="box ${compra ? 'button' : 'nobutton'}"></div>`;
document.write(mercado);











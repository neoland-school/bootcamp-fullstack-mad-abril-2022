// //Crea una variable de todos los tipos primitivos de javascript y mediante el document.write escribe por pantalla el tipo.
// let num = 1;
// let cadena ="cadenas";
// let boolean = true;


// document.write(`${num}`);
// document.write(`<br>${cadena}`);
// document.write(`<br>${boolean}`)

// //Introduce un texto en prompt y este debe aparecer en un alert.
// let ingreso = prompt('Ingresa tu ciudad');
// alert(ingreso);

// //Crear dos variables con tu nombre y apellido de tipo string y concatenalas con el operador y luego repite  la operación con plantillas literales, pinta en un h1 mediante el write el resultado.
// let nom='Luis'
// let ape='Gonzalez'
// let conca = (nom + " " + ape);
// document.write(`<br>${conca}`);
// let lite = `<h1>${nom } ${ape}</h1>`;
// document.write(`<br>${lite}`);


// //Imprimir por pantalla la longitud del string resultante del ejercicio anterior.
// let long = conca.length;
// document.write(`${long}<br>`);

// //Mediante prompt guarda una variable de tipo string que sea un color, pinta un div de 150 x 150 que contenga el color indicado en el prompt.

// let colo = prompt('Ingresa un color: ');

// document.write(`<div style="width:150px; height:150px; color:#fff; background-color:${colo}";></div>`)

/*
document.write("===========================================");

//Crear dos variables numéricas y realiza su suma, resta multiplicación y división, imprime  por pantalla los dos números con la operación, el igual y el resultado.
const num1=7;
const num2=8;

document.write(`<p>Sumar ${num1} y ${num2} da como resultado: ${num1+num2}</p>`);
document.write(`<p>Restar ${num1} y ${num2} da como resultado: ${num1-num2}</p>`);
document.write(`<p>Multiplicar ${num1} y ${num2} da como resultado: ${num1*num2}</p>`);
document.write(`<p>Dividir ${num1} entre ${num2} da como resultado: ${num1/num2}</p>`);

document.write("===========================================");

//Ejercicio que guarde en una variable mediante el uso de prompt,  los grados Celsius (X) e imprima por pantalla sus correspondientes grados Farenheit, ejemplo "X ºC son YºF".

let celsius = parseFloat(prompt(`Por favor ingresa la temperatura actual:`));
let farenheid=(celsius*33.8);
document.write(`<p> ${celsius}º Celsius son ${farenheid}º Farenheid.</p>`);

document.write("===========================================");

//Con el ejercicio de la calculadora de grados celsius, imprime por pantalla  si una variable en ºC temperatura  es mayor de 87 ºF.

let calc = celsius>=87;
document.write(`<p>¿La temperatura es mayor a 87º Farenheid?  ${calc}</p>`);

document.write("===========================================");
//Crea una variable de tipo string que sea 55 y otra de tipo number que sea 55 con el uso de operadores de comparación pintar por pantalla true y luego false.
let numerico = 55;
let stringcio ="55";

let numericoc =55===numerico;
let stringcioc =55===stringcio;

document.write(`<p>Con un número "${numericoc}"</p>`);
document.write(`<p>Con un string "${stringcioc}"</p>`);


document.write("===========================================");
//Introduce una número por prompt y mediante operadores incremento y decremento y operadores de asignación  imprime por pantalla el número mas 1 y el número menos 1 el número multiplicado y divido por si mismo.
let oper =parseFloat(prompt(`Ingresa un número por favor: `));
document.write(`<p>El número ingresado fue: ${oper} y si le sumamos 1 el resultado seria: ${++oper}</p>`);

let oper2 =parseFloat(prompt(`Ingresa un número por favor: `));
document.write(`<p>El número ingresado fue: ${oper2} y si le restamos 1 el resultado seria: ${--oper2}</p>`);

let oper3 =parseFloat(prompt(`Ingresa un número por favor: `));
document.write(`<p>El número ingresado fue: ${oper3} y si lo multiplicamos por el mismo el resultado seria: ${oper3**oper3}</p>`);

let oper4 =parseFloat(prompt(`Ingresa un número por favor: `));
document.write(`<p>El número ingresado fue: ${oper4} y si le restamos 1 el resultado seria: ${oper4/=oper4}</p>`);
document.write("===========================================");

//Mediante el uso de prompt, crea dos variables que representen el peso y la altura e indicar por pantalla si esa persona tiene "Obesidad de clase II" o no según la OMS.
let peso = parseFloat(prompt(`Ingrese el peso en Kg: `));
let altura = parseFloat(prompt(`Ingrese la altura en cm`));
let imc = (peso/altura**2);
document.write(`<p>Su IMC es de: ${imc}kg/m2</p>`);
imc>=39.99 ? document.write(`<p>Si sufre obecidad clase II</p>`) : document.write(`<p>No sufre obecidad clase II</p>`);

document.write("===========================================");
//Crea  una variable mediante prompt y proporcionarle un valor numérico,  imprimir por pantalla si es par o impar.

let ispar =parseInt(prompt(`Ingresa un numero entero: `));
let calculo = ispar % 2===0;
document.write(`<p>¿El ${ispar} es par? ${calculo}.</p>`);
document.write("===========================================");

//Mediante prompt crear una variable que represente el numero de hijos e imprime por pantalla si es familia numerosa o no (revisar que se considera familia numerosa) 
let hijos = parseInt(prompt(`¿Cuantos hijos tiene la familia?`));
let familia = hijos>=3 ? document.write(`Con ${hijos} hijos, Si es familia numerosa</p>`) : document.write(`<p>Con ${hijos} hijos, No es familia numerosa</p>`);
document.write("===========================================");*/

//(HARD) Mediante prompt crear una variable que represente el saldo de tu cuenta, luego crea  3 variables numéricas que cada una represente un item de tu cesta (ej: tomates, pescado, etc) de la compra y dales un precio. Imprimir por pantalla  la siguiente imagen usando solo document write y css, si el numero ingresado es mayor o igual que el total de la compra debera aparecer el boton de comprar de lo contrario no se mostrara.
let saldo = parseFloat(prompt(`¿Cuanto saldo te queda en tu cuenta?`));

let pan = 4.90;
let leche = 3.16;
let queso = 5.74;
let total =pan+leche+queso;

document.write(`<div style="border:50px solid greenyellow; width:600px;">
<h1 style="padding:0 0 20px 20px; border-bottom: 2px solid #ccc;">Shoping Car</h1>

<div style="display:flex; justify-content:space-around; border-bottom: 2px solid #ccc;">
<p>Pan</p>
<p>Price</p>
<p>${pan} €</p>
</div>

<div style="display:flex; justify-content:space-around; border-bottom: 2px solid #ccc;">
<p>Leche</p>
<p>Price</p>
<p>${leche} €</p>
</div>

<div style="display:flex; justify-content:space-around; border-bottom: 2px solid #ccc;">
<p>Queso</p>
<p>Price</p>
<p>${queso} €</p>
</div>

<div style="display:flex; height:120px; flex-direction:column; align-items:center; flex-wrap:wrap; margin-bottom:20px;">
<p style="margin:10px; ">Car Totals</p>
<p  style="margin:10px; border-bottom:2px solid #ccc; padding-bottom:15px;">Total: ${total} €</p>
<button style="cursor: pointer; background:rgb(116, 116, 236); height:25px; color:#fff; width:200px;">COMPRAR</button>
</div>



</div>`)
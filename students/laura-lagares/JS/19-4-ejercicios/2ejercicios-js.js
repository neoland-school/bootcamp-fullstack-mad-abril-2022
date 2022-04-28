// Crear dos variables numéricas y realiza su suma, resta multiplicación y división, imprime  por pantalla los dos números con la operación, el igual y el resultado.
const dos = 2
const siete = 7

document.write(`<p> ${dos}+${siete}=${dos+siete} </p>`);
document.write(`<p> ${dos}-${siete}=${dos-siete} </p>`);
document.write(`<p> ${dos}*${siete}=${dos*siete} </p>`);
document.write(`<p> ${dos}/${siete}=${dos/siete} </p>`);

// Ejercicio que guarde en una variable mediante el uso de prompt,  los grados Celsius (X) e imprima por pantalla sus correspondientes grados Farenheit, ejemplo "X ºC son YºF".

const gradosCelsius = prompt('Introduzce grados celsius:');
const formulaFarenheit = (gradosCelsius* 1.8 + 32);
document.write(`<p>${gradosCelsius} grados celsius es igual a ${formulaFarenheit} grados farenheit.</p>`);


// Con el ejercicio de la calculadora de grados celsius, imprime por pantalla  si una variable en ºC temperatura  es mayor de 87 ºF.

const mayorF = formulaFarenheit>87 ? 'es mayor que 87ºF': 'no es mayor que 87ºF';
document.write(`<p>${gradosCelsius} grados celsius ${mayorF}</p>`);

// Crea una variable de tipo string que sea 55 y otra de tipo number que sea 55 con el uso de operadores de comparación pintar por pantalla true y luego false.

const varString = '55';
const varNum = 55;

const iguales = varString==varNum;
document.write(`<p>${iguales}</p>`);

const noiguales = varString===varNum;
document.write(`<p>${noiguales}</p>`);


// Introduce una número por prompt y mediante operadores incremento y decremento y operadores de asignación  imprime por pantalla el número mas 1 y el número menos 1 el número multiplicado y divido por si mismo.

let numero = prompt('Introduce un número:');
let suma = ++numero;
let resta = --numero;
let mult = numero*numero;
let divi = numero/numero;

document.write(`<p>${suma}</p>`);

document.write(`<p>${resta}</p>`);

document.write(`<p>${mult}</p>`);

document.write(`<p>${divi}</p>`);


// Mediante el uso de prompt, crea dos variables que representen el peso y la altura e indicar por pantalla si esa persona tiene "Obesidad de clase II" o no según la OMS

let peso = parseFloat(prompt('Introduce tu peso:'));
let altura = parseFloat(prompt('Introduce tu altura'));
let imc = (peso / (altura**2));
let obTipoDos = (imc>=35) && (imc<=39.9);

document.write(`<p>Obesidad tipo dos ${obTipoDos}</p>`);


// Crea  una variable mediante prompt y proporcionarle un valor numérico,  imprimir por pantalla si es par o impar.

let numPar = prompt('Introduce número par o impar:')
let isEven = numPar%2===0 ? 'par' : 'impar';
document.write(`<p>El número ${numPar} es ${isEven}</p>`);


// Mediante prompt crear una variable que represente el numero de hijos e imprime por pantalla si es familia numerosa o no (revisar que se considera familia numerosa)

let numHijos = prompt('Introduce número de hijos:');
let famNum = numHijos>=3 ? 'numerosa' : 'no numerosa';
document.write(`<p> ${numHijos} es familia ${famNum} </p>`);

// (HARD) Mediante prompt crear una variable que represente el saldo de tu cuenta, luego crea  3 variables numéricas que cada una represente un item de tu cesta (ej: tomates, pescado, etc) de la compra y dales un precio. Imprimir por pantalla  la siguiente imagen usando solo document write y css, si el numero ingresado es mayor o igual que el total de la compra debera aparecer el boton de comprar de lo contrario no se mostrara.

let saldoCuenta = parseFloat(prompt(' Introduzca el saldo de la cuenta'));
let tomatoePrice = 1.50;
let fishPrice = 10.01;
let meatPrice = 12.12;

let total = tomatoePrice+fishPrice+meatPrice;
let saldoSuficiente = saldoCuenta >= total;

document.write(`
<section class="container">
        <div class="shopping__cart-container">
         <h1 class="shopping__cart-title">Shoping Car</h1>
         <ul class="list__items-container">
            <li>
                <p>Tomate</p>
                <p>Price</p>
                <p>${tomatoePrice}</p>
            </li>
            <li>
                <p>Pescado</p>
                <p>Price</p>
                <p>${fishPrice}</p>
            </li>
            <li>
                <p>Carne</p>
                <p>Price</p>
                <p>${meatPrice}</p>
            </li>
         </ul>
         <footer class="shopping__cart-footer">
            <h4>Car total</h4>
            <p>Total ${tomatoePrice+fishPrice+meatPrice}</p>
            <hr style="width: 25%;">
            <button type="button" class="shopping__cart-button
            ${saldoSuficiente ? '' : 'shopping__cart-button-hidden'}">Comprar</button>
         </footer>
        </div>
    </section>
`);




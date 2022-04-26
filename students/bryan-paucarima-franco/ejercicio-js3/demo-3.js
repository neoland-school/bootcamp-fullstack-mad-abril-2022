/** Crear dos variables numéricas y realiza su suma, resta multiplicación y división, imprime  por pantalla los dos números con la operación, el igual y el resultado.*/

let a = 5;
let b = 7;

const producto = a*b
const division = a/b;

document.write(`<p>La multiplicacion de ${a} por ${b} seria: </p>`)
document.write(`${a} * ${b} = ${producto} `)

document.write(`<p>La division de ${a} entre ${b} seria: </p>`)
document.write(`${a} / ${b} = ${division} `)

/** Ejercicio que guarde en una variable mediante el uso de prompt,  los grados Celsius (X) e imprima por pantalla sus correspondientes grados Farenheit, ejemplo "X ºC son YºF"*/

let grados = prompt(`Introduce los grados Celsius`)
let fahrenheit = (grados * 9 / 5) + 32

document.write(`<p>${grados}ºC equivale a ${fahrenheit}ºF</p>`)

/** Con el ejercicio de la calculadora de grados celsius, imprime por pantalla  si una variable en ºC temperatura  es mayor de 87 ºF. */

let mayorC = fahrenheit>87 ? "true" : "false" ;

document.write(`<p> ${grados}ºC es mayor que 87º F : ${mayorC} </p>`)

/**Crea una variable de tipo string que sea 55 y otra de tipo number que sea 55 con el uso de operadores de comparación pintar por pantalla true y luego false. */

let string = "55";
let n = 55;

let igual = string===n;
let dif = string!==n;

document.write(`<p>La variable s es igual a la variable n: ${igual}</p>`)
document.write(`<p>la variable s es diferente a la variable n:  ${dif} </p>`)

/**Introduce una número por prompt y mediante operadores incremento y decremento y operadores de asignación  imprime por pantalla el número mas 1 y el número menos 1 el número multiplicado y divido por si mismo. */

let d = prompt (`Introduce un numero`)


document.write(`<p>El numero: ${d} </p>`)
document.write(`<p>Mediante el operador incremento le sumamos 1 : ${++d}</p>`)
document.write(`<p>Mediante el operador decremento le restamos 1 : ${--d}</p>`)
document.write(`<p>Mediante el operador de multiplicacion, lo multiplicamos por si mismo : ${d*d}`)
document.write(`<p>Mediante el operador de division, lo dividimos entre si mismo : ${d/d}</p>`)


/**Mediante el uso de prompt, crea dos variables que representen el peso y la altura e indicar por pantalla si esa persona tiene "Obesidad de clase II" o no según la OMS.*/

let peso = parseFloat(prompt(`Introduce tu peso`))
let altura = parseFloat(prompt(`Introduce tu altura`))
let imc = peso/altura*2
let tiene = "Tiene obesidad grado II"
let noTiene = " No tiene obesidad grado II "

document.write(`<p> El resultado es : ${35<=imc<=39.9?tiene:noTiene}</p>`)


/**Crea  una variable mediante prompt y proporcionarle un valor numérico,  imprimir por pantalla si es par o impar.*/

let e = prompt(`Introduce un valor numerico`)
let numPar = "numero par"
let numImp = "numero impar"

document.write(`<p>El valor numerico que has introducido es un ${e%2===0?numPar:numImp} </p>`)


/**Mediante prompt crear una variable que represente el numero de hijos e imprime por pantalla si es familia numerosa o no (revisar que se considera familia numerosa)*/

let numHijos = prompt(`Introduce numero de hijos`)
let famNum = "Es una familia numerosa"
let famNoNum = "No es familia numerosa"

document.write(`<p>${numHijos < 3 ? famNoNum : famNum}</p>`)

/**Mediante prompt crear una variable que represente el saldo de tu cuenta, 
 * luego crea  3 variables numéricas que cada una represente un item de tu cesta (ej: tomates, pescado, etc) de la compra 
 * y dales un precio. Imprimir por pantalla  la siguiente imagen usando solo document write y css, 
 * si el numero ingresado es mayor o igual que el total de la compra debera aparecer el boton de comprar de lo contrario no se mostrara.*/

const saldo = parseFloat(prompt("Introduce tu saldo de cuenta"));
let tomates = 2
let pescado = 16
let carne = 7.5
const total = tomates + pescado + carne;
const hasSufficientBalance = saldo >= total;

document.write(`
    <section class="shopping-cart__container">
        <h1 class="shopping-cart__title">Shopping Cart</h1>
        <ul class="list__items-container">
            <li>
                <p>Tomate</p>
                <p>Price</p>
            <p>${tomates}</p>
            </li>
            <li>
                <p>Pescado</p>
                <p>Price</p>
                <p>${pescado}</p>
            </li>
            <li>
                <p>Carne</p>
                <p>Price</p>
                <p>${carne}</p>
            </li>
        </ul>
        <footer class="shopping-cart__footer">
            <h4>Cart Totals</h4>
            <p>Total ${total}</p>
            <hr style="width: 25%;">
            <button type="button" 
            class="shopping-cart__buy-button ${hasSufficientBalance ? '' : 'shopping-cart__buy-button--hidden'}"
            >Comprar</button>
        </footer>
    </section>
`)

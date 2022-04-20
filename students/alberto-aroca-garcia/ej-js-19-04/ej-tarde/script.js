// Crear dos variables numéricas y realiza su suma, resta multiplicación y división, imprime  por pantalla los dos números con la operación, 
// el igual y el resultado.
/*
const a = 17;
const b = 28;

document.write(`<p>Suma= ${a} + ${b} = ${a+b}</p>`);
document.write(`<p>Resta= ${a} - ${b} = ${a-b}</p>`);
document.write(`<p>Multiplicacion= ${a} * ${b} = ${a*b}</p>`);
document.write(`<p>Division= ${a} / ${b} = ${a/b}</p>`);



// Ejercicio que guarde en una variable mediante el uso de prompt,  los grados Celsius (X) e imprima por pantalla sus correspondientes 
// grados Farenheit, ejemplo "X ºC son YºF".

const gCel = prompt('Introduce los grados Celsius');
const gF = (gCel * 1.8 + 32);

document.write(`<p>${gCel} grados Celsius es igual a ${gF} grados Farenheit.</p>`);


// Con el ejercicio de la calculadora de grados celsius, imprime por pantalla  si una variable en ºC temperatura  es mayor de 87 ºF.

const mayor = (gF > 87);

document.write(`La variable en grados Celsius ${gCel} ¿Es mayor a 87 grados Farenheit? = ${mayor}. Es igual a ${gF}`);

// Crea una variable de tipo string que sea 55 y otra de tipo number que sea 55 con el uso de operadores de comparación pintar por pantalla true
// y luego false.

let numA = '55';
let numB = 55; 

document.write(`<p>${numA === numB}</p>`);
document.write(`<p>${numA == numB}</p>`);


// Introduce un número por prompt y mediante operadores incremento y decremento y operadores de asignación  
//imprime por pantalla el número mas 1 y el número menos 1 el número multiplicado y divido por si mismo.

let numX = prompt('Introduce un número: ');

document.write(`<p>${numX++}</p>`);
document.write(`<p>${numX--}</p>`);
document.write(`<p>${numX*numX}</p>`);
document.write(`<p>${numX/numX}</p>`);


// Mediante el uso de prompt, crea dos variables que representen el peso y la altura e indicar por pantalla si esa persona tiene 
//"Obesidad de clase II" o no según la OMS.

let peso = parseFloat(prompt('Introduce tu peso en kg')); 
let altura = parseFloat(prompt('Introduce tu altura en m')); 

let imc = (peso / (altura**2));

let obsesidadII = imc <= 39.9 && imc >= 35;

document.write(`<p>Segun la OMS tiene obesidad de clase II: ${obsesidadII}  </p>`);

// Crea una variable mediante prompt y proporcionarle un valor numérico, imprimir por pantalla si es par o impar.

let numP = parseFloat(prompt('Introduce un valor numerico: '));
let par = numP%2 == 0;
let impar = numP%2 !=0;

// document.write(`<p>${numP} ¿Es un número par?: ${numP%2 === 0}.</p>`);
// document.write(`<p>${numP} ¿Es un numero impar?:${numP%2 != 0}</p>`);

document.write(`<p>Este número es: ${numP ? par : impar}</p>`);

// Mediante prompt crear una variable que represente el numero de hijos e imprime por pantalla si es familia numerosa o no 
//(revisar que se considera familia numerosa) 

let famN = parseFloat(prompt('Introduce el número de hijos que tienes: '));

document.write(`<p>${famN} ¿Eres familia numerosa? ${famN >= 3}.</p>`);
*/


//(HARD) Mediante prompt crear una variable que represente el saldo de tu cuenta, luego crea  3 variables numéricas que 
//cada una represente un item de tu cesta (ej: tomates, pescado, etc) de la compra y dales un precio. Imprimir por pantalla  
//la siguiente imagen usando solo document write y css, si el numero ingresado es mayor o igual que el total de la compra 
//debera aparecer el boton de comprar de lo contrario no se mostrara.

let balance = parseFloat(prompt('Introduce el saldo de tu cuenta: '));
let tomate = 4;
let pescado = 8;
let carne = 10;
let total = tomate + pescado + carne;
const hasSufficientBalance = balance >= total;

// document.write(` 

//         <div class="fondo">
//         <div class="principal">
//         <div class="titulo">
//             <h1>Shopping Car</h1>
//         </div>
//         <div class="tomate">
//             <span>Tomate</span>
//             <span>Price</span>
//             <span>${tomate}</span>
//         </div>
//         <div class="pescado">
//             <span>Pescado</span>
//             <span>Price</span>
//             <span>${pescado}</span>
//         </div>
//         <div class="carne">
//             <span>Carne</span>
//             <span>Price</span>
//             <span>${carne}</span>
//         </div>
//         <div class="total">
//             <p>Car Totals</p>
//             <p>Total ${total}</p>
//         </div>
//         <button class="btcompar">Comprar</button>
//         </div>
//         </div>

// `);

document.write(`
        <section class="shopping-cart__container">
        <h1>Shopping Cart</h1>
        <ul class = "list__items-container">
            <li>
                <p>Tomate</p>
                <p>Precio</p>
                <p>${tomate}</p>
            </li>
            <li><p>Pescado</p>
                <p>Precio</p>
                <p>${pescado}</p>
            </li>
            <li><p>Carne</p>
                <p>Precio</p>
                <p>${carne}</p>
            </li>
        </ul>
        <footer class="shopping__cart-footer">
            <h4>Cart Totals</h4>
            <p>Total ${total}</p>
            <hr style="width: 30%;">
            <button type="button"
                 class=".shopping__cart-buy-button ${hasSufficientBalance ? '' : 'shopping-cart__buy-button--hidden'}">
                 Comprar
            </button>
        </footer>
        </section>
        
`);





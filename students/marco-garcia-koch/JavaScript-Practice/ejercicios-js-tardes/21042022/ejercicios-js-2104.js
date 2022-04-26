// 1. Crea un programa que dado un numero mediante promt y usando el bucle for, te impirma por pantalla 
// su tabla de multiplicar de la siguiente forma:
// Tabla de multiplicar de 5
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50


const n = parseInt(prompt('Escriba un número'));

for (let i=1; i<=10; i++) {
    document.write(`<p>${n} x ${i} = ${n*i}</p>`);
}


// 2. Crear una página web que pinte por pantalla separado por comas las primeras 100 potencias de dos. 
// Ejemplo: 1,2,4,8,16,32,64,...


for (let i=1; i<=100; i++) {
    document.write(`${2**i}, `);
}

// 3.Crea un programa que recorra los números del 1-100 e imprima por pantalla :
//         Fizz, si es multiplo de 3.
//          Buzz, si es múltiplo de 5.
//           FizzBuzz, si es múltiplo de 3 y 5 a la vez.

for (let i=1; i<=100; i++) {
    if ((i%3===0) && (i%5===0)) {
        document.write(`<p>FizzBuzz</p>`);
    }else if (i%5===0) {
        document.write(`<p>Buzz</p>`);
    }else if (i%3===0) {
        document.write(`<p>Fizz</p>`);
    }else {
        document.write(`<p>${i}</p>`);
    }
}



// 4. Escribir un programa que solicite al usuario el número de filas y el número de columnas. 
// Dibujar una tabla con las filas y columnas introducidas, usar etiquetas html " th, tr, td.."

const rows = parseInt(prompt('Introduzca el número de filas'));
const columns = parseInt(prompt('Introduzca el número de columnas'));

document.write(`<table class="table">`);
for (let r=1; r<=rows; r++) {
        document.write(`<tr class="table">`);
    for (let c=1; c<=columns; c++) {
        document.write(`<th class="table">hola</th>`);
    }
    document.write(`</tr>`);
}
document.write(`</table>`);

// 5. Crear una página web que solicite al usuario una palabra y 
// muestre un p con el número de vocales que hay.

const word = prompt('Escriba una palabra');
let count = 0;

for (let i=0; i<word.length; i++) {
    const c = word.charAt(i);
    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
        count++;
    }
}

document.write(`<p>La palabra que has puesto tiene ${count} vocales</p>`);


// 6. Imprime por pantalla el siguiente patron, el cual va a depender del numero que pases por prompt, 
// usaremos CSS para la maquetación (una vez terminado y mediante animation 
// usando @keyframes haz que el triangulo se desplace hasta el otro punto de la pantalla de manera infinita).

const patron = parseInt(prompt('Cuantos niveles quieres que tenga el triángulo'));

document.write(`<div class="background">`);

if (patron > 1) {
    for (let i=1; i<=patron; i++) {
        document.write(`<div class="red" style="width:${3*i}px;"></div>`);
    }
    
    for (let i=patron; i>=1; i--) {
        document.write(`<div class="green" style="width:${3*i}px;"></div>`);
    }
}else {
    document.write(`<p class="error">ERROR. El número mínimo necesario para representar el triangulo debe ser 3</p>`);
}

document.write(`</div>`);


// Segunda versión de mi flecha


const patrontwo = parseInt(prompt('Cuantos niveles quieres que tenga el triángulo'));


if (patrontwo > 1) {
    let output = `<div class="background">`;
    for (let i=1; i<=patrontwo; i++) {
        output += `<div class="red" style="width:${3*i}px;"></div>`;
    }
    
    for (let i=patrontwo; i>=1; i--) {
        output += `<div class="green" style="width:${3*i}px;"></div>`;
    }
    output += `</div>`;

    document.write(output);

}else {
    document.write(`<div class="background"><p class="error">ERROR. El número mínimo necesario para representar el triangulo debe ser 3</p></div>`);
}


// 7. Crear una página web que solicite al usuario 1 número (n) y cree en HTML  
// un tablero de ajedrez de nxn, teniendo  en cuenta los colores como en el ajedrez.

const chessCells = parseInt(prompt('Introduce un número que delimite cuántas celdas tendrá el tablero'));

document.write(`<div class="border">`);
for (let i=1; i<=chessCells; i++) {
    if (i===1 || i%2===1) {
        for (let j=1; j<=chessCells; j++) {
            if (j===1 || j%2===1) {
                document.write(`<div class="whitecell" style="width:${500/chessCells}px; height:${500/chessCells}px;"></div>`);
            }else {
                document.write(`<div class="blackcell" style="width:${500/chessCells}px; height:${500/chessCells}px;"></div>`);
            }
        }
    }else {
        for (let z=1; z<=chessCells; z++) {
            if (z===1 || z%2===1) {
                document.write(`<div class="blackcell" style="width:${500/chessCells}px; height:${500/chessCells}px;"></div>`);
            }else {
                document.write(`<div class="whitecell" style="width:${500/chessCells}px; height:${500/chessCells}px;"></div>`);
            }
        }
    }
}
document.write(`</div>`);
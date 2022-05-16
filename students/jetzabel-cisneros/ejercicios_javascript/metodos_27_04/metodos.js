/*
1.Crea una función que devuelva el tipo de parámetro de entrada y 
píntalo por pantalla , usar arrow function function.(ejemplo abajo)
*/
//let saludo = nombre => `Hola ${nombre}`;
//console.log( saludo('Maria Antonia') ); //Imprime Hola Maria Antonia

let nombre = prompt("Ecribe una palabra o un número?");

let devolverType = input => typeof input;

  document.write(devolverType(3) ); //Imprime number
  
  //document.write(devolverType("hola") ); //Imprime string
  document.write('<br>');


/*
2.Function que dado dos boleanos por prompt devuelva el AND (&&) de
 estos por pantalla, usar function declaration.

//Function declaration:
En estas, utilizamos la palabra reservada function al inicio para poder declarar la función:
//ejp
function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}
saludar('Ana');
*/

let input = prompt("Write here true or false");

let a = true;
let b = true;

function addBooleans (bol1,bol2) {
  return bol1 && bol2;
}

document.write(addBooleans(a,b));
document.write('<br>');

/*
3.Crea una función que dado un numero por prompt, devuelva el 
número al revés por pantalla, usar Function Expression

//Con las Function declaration, podemos mandar llamar la función antes de que ésta sea declarada, 
y con la Expresión de función,NO! tendríamos que declararla primero, y después mandarla llamar.

//Function Expression ejp:
var alias = function(alias){
    console.log(`Hola ${alias}`)
}
alias(Campanilla);
*/

let n = prompt("Untroduce un número");

// Function to reverse Number
let reverseNum = function(x) {
    return x.split('').reverse().join('');
  }
  document.write(reverseNum(n));
  
  document.write('<br>');

/*
4.Crear una función para ordenar un array de números desordenados
 de mayor a menor.  */
// .sort

let arrayNumeros = [99,13,56,7,20,0,66,38,2,40];

function ordenarArray(arr) {
    return arr.sort((a, b) => a - b);
};

// versión arrow:
// let ordenarArray = arr => arr.sort((a, b) => a - b);

document.write(ordenarArray(arrayNumeros));



/*
5.Crear una función que reciba un array de números y 
devuelva un array con los que son mayores que 10.(easy)
*/
let arrayNum = [2,4,6,8,35,18,24,88,101];

function greaterThan10(array){
    let resultNum =array.filter(number => number > 10);
    return resultNum
};
console.log(greaterThan10(arrayNum));

document.write('<br>');

/*
6. Crear una función que dado una URL (Se representa con un string) 
por prompt, me diga si pertenece o no al dominio de github, usar function declaration.
*/

//.include
//devuelve true si es dominio github o false si es otro dominio.
//Function declaration:


let url = prompt("Escribe una URL");

function urlContieneGithub (url) {
    return url.includes("github");
}
document.write(urlContieneGithub(url));
document.write('<br>');

   // console.log(urlContieneGithub(url));






/*
7. Crear una función que calcule el Maximo Comun Divisor 
(Hint: Utilizar el algoritmo de euclides) y lo imprima por pantalla.
*/



let max = prompt("Escribe un numerito");

var maximo_comun = function(a, b) {
    if (!b) {
      return a;
    }
    return maximo_comun(b, a % b);
  };
  
  document.write(maximo_comun(max));
  
 
  

/*8.
Un número n, devuelva un string con los números primos menores o 
iguales a n separados por coma (,)
Un número primo es aquel que solo se puede dividir por el mismo o por 1. 
 Por ejemplo si n=30, entonces la función devuelve 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
 */



//crear un array vacío, iterar desde el número que te dan hasta cero, 
//mirar cada uno de ellos si es primo; hago function pare ello, esto lo primero.Y si lo es añadirlo al array
//Hago Función que mire si un número es primo y devuelva true/false
//esPrimo (n) que devuelve true si un número lo es y false si no lo es

const inputt = prompt("Introduce un número (devuelvo todos los primos menores que él)")

function esPrimo(n) {
    if(n < 2) return false; // 1 y 0 no son primos
    for (var i = 2; i < n; i++) {  // iterar desde 2 hasta el número que haya recibido la función
                                   // si el input es divisible por cualquier número de los inferiores a él
                                   // --> no es primo
        if(n%i==0)
            return false;
    }
    // si no es menor de 2 ni divisible por todos los números inferiores a él --> es primo
    return true;
};

//loop desde 0 hasta el input, aplicando la función a cada uno e imprimiendo los que sean true (primos)
for(var i = 0; i < inputt; i++){
    if(esPrimo(i)) document.write(i + ',');
};

                               




/*
9.(hard) 
La sucesión de fibonacci es una lista de números infinita muy presente en la vida real
 (https://www.neoteo.com/la-sucesion-de-fibonacci-en-la-naturaleza/). 
 Consiste en calcular el siguiente número teniendo en cuenta el valor 
 de los anteriores, siguiendo la siguiente fórmula. 
 fib(n) = fib(n-1) + fib(n-2). 
 Es decir el fibonacci de 3 por ejemplo se calcula sumando el fib(2) junto con el fib(1). 
 Para los casos más básicos tenemos que 
 fib(0) = 0 y fib(1) = 1. 

 Construir una función que dado un numero entero devuelva su número de fibonacci. 
 Solicitar el  entero al usuario. 
 Pista: Se puede hacer con un unico bucle.

*/

fib(0) = 0;
fib(1) = 1;

//Entrada: un numero  Salida: String con la sucesion separada por coma.Entrada

//fib(2) = fib(1) = 1 fib(0) = 0,1,1;
//ib(3) = fib(2) = 1 fib(1) = 0,1,1,2;

//Crer dos variables con elfib(0) y elfib(1)
//crear variable string donde concatenar la salida
//repetir hasta llegar a n
// EN cada vuelta cocatenar a la salida el valor de la sucesion
//Actualizar las dos variables numéricas para la siguiente vuelat del bucle

function fib(n) {
    let fib_1 = 1; //es el fib(n -1)
    let fib_2 = 0; //representael fib(n -2)

    let succesion = '0,1';//cadana para los dos primeros valores

    for(let i=2; i<=n;i++){
        const fib_i = fib_1 +fib_2;
        succesion+=`,${fib_1+fib_2}`;
        //preparo proxima vuelta
        fib_2=fib_1;
        fib_1=fib_i;
    }
return succesion;
}
document.write(`<p>La succesion de fib${n} es: ${fib(n)} </p>`);
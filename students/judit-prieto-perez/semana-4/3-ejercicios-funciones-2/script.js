/* Crea una función que devuelva el tipo de parámetro de entrada y
 píntalo por pantalla , usar  arrow function function.*/

 /*qué entra: un parámetro
 qué sale: typeof
 let prueba= numero
 output tendria que ser el tipo de dato */

let prueba = 1;

let type = (a)  => typeof a;
 
console.log(type(prueba));

/*.Function que dado dos boleanos por prompt devuelva
 el AND de estos por pantalla, usar function declaration.*/

 /** entrans: dos booleanos//
  * salen: boobleanos

let bol_1 = true;
let bol_2 = true;

 function boolean (a,b) => a&&b
document.write(a,b)
 }

/**3. . Crea una función que dado un numero por prompt, devuelva el 
número al revés por pantalla, usar function expression

entra: numero 
sale: string (porque lo metemos por prompt)

1. lerr el numero 
2. revertir el numero
3. si lo convierto en un array puedo usar .reverse
*/


document.write(`<h3>Ejercicio 4</h3>`)

let str = prompt('introduce un numero');
let arr = str.split('');

document.write(`<p>El número introducido es ${str}</p>`)

function reverse (a){
let rev= a.reverse();
return rev
}
console.log(reverse(arr)); 

function reverse_2 (a){
   let rev_2= a.join('')
   return rev_2
}

document.write(`<p>El número al revés es ${reverse_2(arr)}</p>`)


/*Crear una función para ordenar un array de números desordenados de 
mayor a menor.(easy)

[3,34,65,4,345,6,].sort((a,b) => {
    if(a>b) return -1; 
    if(a<b) return 1; 
    return 0; 
});


/*Crear una función que reciba un array de números y devuelva un array 
con los que son mayores que 10.(easy)*/

document.write(`<p>Ejercicio 5:</p>`)


document.write(`El array es: [2,3,4,43,5,63]`)


 const numeros =[2,3,4,43,5,63]

 const mayor = numeros.filter(numeros => numeros > 10);

 document.write(mayor);

 /* Crear una función que dado una URL (Se representa con un string) por prompt,  
 me diga o no si pertenece al dominio de github,  usar function declaration.*/

/** Dato de entrada: string.
 * Dato de salida: booleano
 * 
 * 1- SI incluye GITHUB--> TRUE
 */

let url = prompt('introduce la URL')

function url_github (a){
    let link = a.includes('github')
return link
}

console.log(url_github(url))

/* . Crear una función que calcule el Maximo Comun Divisor (Hint: Utilizar el algoritmo de euclides)
 y lo imprima por pantalla.


 Datos de entrada: NUMBER
 datos de salida: NUMBER

 Algortimo euclides: 
 
/
 
/*
un número n,  devuelva un string con  los números primos menores o iguales a n separados por ,
 . Un número primo es aquel que solo se puede dividir por el mismo o por 1.  Por ejemplo si n=30,
  entonces la función devuelve 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
  
1. pide un numero (n)
2. devuelve un string
let n = 30;

function primo(n) {

    for (var i = 2; i < n; i++) {
  
      if (n % i === 0) {
        return false;
      }
  
    }
  
    return n !== 1;
  }

  console.log(primo(n));*/

  let numbers = new Array (30)

  a= [1,2,3,4,5,6,7,8,9,10,11,12,12,13,14]

function primo(a){

  for (let i = 0; i < 30; i++) {
    if (a % i === 0) {
      return false;
    }

  }
}
console.log(primo(a))



/*sucesión de fibonacci es una lista de números infinita muy presente en la vida real 
/*(https://www.neoteo.com/la-sucesion-de-fibonacci-en-la-naturaleza/). Consiste en calcular  el siguiente número teniendoen
 /*cuenta el valor   de los anteriores, 
siguiendo la siguiente   fórmula. fib(n) = fib(n-1) + fib(n-2). 
Es decir   el fibonacci de 3 por ejemplo se calcula sumando el fib(2) junto con el fib(1). Para los casos más 
   básicos tenemos que fib(0) = 0 y fib(1) = 1.    
Construir una función que dado un numero entero    devuelva su número de fibonacci.
 Solicitar el entero al usuario. Pista: Se puede hacer con un   unico bucle.

 document.write(`<h3>Ejercicio 9: serie de 20 números Fibonacci:`)
 let numero_entero = 20;

 document.write(`<p></p>`)
 function fibonacci(fibonacc){
     const fib = [0,1];
     for(let i = 2; i < fibonacc; i++){
         fib [i] = fib [i - 1] + fib [i - 2];
     }
     return fib;
 }

 const fibSerie = fibonacci(numero_entero)

 document.write(fibonacci(numero_entero))*/
 

// Ejercici 1 -Crea una función que devuelva el tipo de parámetro de 
// entrada y píntalo por pantalla , usar  arrow function function.
/* 
- Entrada: funcion arrow es igual v quiero el tipoof de v
- Salida: pintar el tipo de parametro.
 */

let parametroTipo = (v) => typeof v;
document.write('El tipo de dato es ');
document.write(parametroTipo(7));

document.write('<br>');


// Ejercicio 2 -Function que dado dos boleanos por prompt 
// devuelva el AND de estos por pantalla, usar function declaration.
// (tabla de verdad del AND)

let booleano1 = prompt('Introduzca true o false');
let booleano2 = prompt('Introduzca true o false');
// let booleano3 = booleano1 + booleano2;

function imprimeTablaVerdad(a,b) {
    // if(
        return a && b;
};

document.write(`<p>${imprimeTablaVerdad(booleano1,booleano2)}</p>`);

// document.write('Tabla de la verdad AND ');
// document.write(booleano3);
// document.write('<br>');
// document.write(booleano2);



// Crea una función que dado un numero por prompt, 
// devuelva el número al revés por pantalla, usar function expression

// Entrada -> numero por promptp
// Salida -> numero invertido en pantalla (document.write)

// var x = function(y) {
//     return y * y;
//  };

let number = parseInt(prompt('Introduzca un numero'));

  function turnit() {
    let cambio= number.toString().split("").reverse().join("");
    document.write(cambio);
}

turnit();



// Crear una función para ordenar un 
// array de números desordenados de mayor a menor.(easy)

[1,20,2,10,4,3].sort((a,b) => {
    if(a>b) return 1; // queremos que a esté desùes que b, ya que es mayor
    if(a<b) return -1; // queremos que a esté antes que b, ya que es menor
    return 0; // a===b entonces que mantenga el orden original
});

/*Se puede optimizar asi*/
[1,20,2,10,4,3].sort((a,b) => a-b);



// Crear una función que reciba un array de números 
// y devuelva un array con los que son mayores que 10.(easy)

let arrayNumbers = [1,5,78,63,22,700];
 
function arrayOrder(array){
    let getResult = array.filter( number => number > 10);
    return getResult;
 }
 console.log(arrayOrder(arrayNumbers))


//  Crear una función que dado una URL (Se representa con un string) por prompt,  
//  me diga o no si pertenece al dominio de github,  usar function declaration


/*  
1-prompt para indicar URL
2- funcion declaration ?¿que es
*/
document.write('<br>');
let direccion = prompt('Introduzca una URL de github');

function url(a){
    let getResult = a.includes('github.com');
    return getResult;
 }
 
 document.write(url(direccion));



//  Crear una función que calcule el Maximo Comun Divisor 
//  (Hint: Utilizar el algoritmo de euclides) y lo imprima por pantalla.
document.write('<br>');

    const maximoComunDivisorRecursivo = (a, b) => {
        if (b === 0) return a;
        return (b, a % b);
    };
    document.write(maximoComunDivisorRecursivo(2,10));



    // un número n,  devuelva un string con  los números primos menores o iguales 
    // a n separados por , . Un número primo es aquel que solo se puede dividir 
    // por el mismo o por 1.  Por ejemplo si n=30, entonces la función devuelve 
    // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29


    /* 
    numeros primos menores
    */
    


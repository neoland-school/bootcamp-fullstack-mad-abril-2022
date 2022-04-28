// // // Crear una función que reciba por parámetros 2 array. 
// // Esta función devolverá los 2 arrays concatenados 
// y los mostrará en el navegador.(easy).

    let numero = [1,2];
    let numeros = [3,4];


function dosParametros (array1, array2) {

   let array3 = array1.concat(array2);
   return array3;
}

document.write(dosParametros(numero,numeros));

document.write('<br>');
// document.write(array3);


// Crear una función que reciba un parámetro de entrada y que imprima por pantalla 
// true si el parámetro es un array y false si es otro tipo de dato.(easy).

const afirmacion = true;
const negacion = false;

function unParametro (a) {
    let correct = typeof a ==='object';
    return negacion;
    
   }

document.write(unParametro(1));

document.write('<br>');


// Crear una función que reciba un array 
// de números y devuelva un array con los que son mayores que 10.(easy).

let arrayNumeros = [1,2,22,4,5,29];

function mayoresDe10 (a) {
     arrayNumeros.some(a => a.lenght > 10);
    return arrayNumeros;
    
   }

   document.write(mayoresDe10(arrayNumeros));


//    Escribir varias funciones que dada las medidas por 
//    prompt(radio, lados, etc) que calculen área y 
//    perímetro de diferentes figuras geométricas 
//    (Rectángulo, Cuadrado, triángulo y Círculo), para el  
//    rectangulo y cuadrado usaremos arrow function.
document.write('<br>');

let largoRectangulo = prompt('Escriba el largo de un rectangulo');
let anchoRectangulo = prompt('Escriba el ancho de un rectangulo');
let areaRectangulo;
let perimetroRectangulo = (2*largoRectangulo) + (2*anchoRectangulo);

function rectangulo (a,b) {     /*area de un rectangulo*/
    areaRectangulo = a * b;
    return areaRectangulo;
}
document.write(rectangulo(largoRectangulo,anchoRectangulo));
document.write('<br>');
document.write(perimetroRectangulo);



document.write('<br>');

let ladoCuadrado = prompt('Escriba el lado de un cuadrado');
let areaCuadrado;
let perimetroCuadrado = ladoCuadrado * 4;

function cuadrado (a) {      /*area de un cuadrado*/
    areaCuadrado = a * a;
    return areaCuadrado;
}
document.write(cuadrado(ladoCuadrado));
document.write('<br>');
document.write(perimetroCuadrado)





document.write('<br>');

let baseTriangulo = prompt('Escriba la base de un Triangulo');
let alturaTriangulo = prompt('Escriba la altura de un Triangulo');
let areaTriangulo;
let perTriang = (2 * 10) + 3;

function triangulo (a, b) {      /*area de un triangulo*/
    areaTriangulo = (a * b) /2;
    return areaTriangulo;
}
document.write(triangulo((baseTriangulo*alturaTriangulo)/2));
document.write('<br>');
document.write(perTriang);

document.write('<br>');


let radioCuadrado = prompt('Introduzca el radio de un circulo');
let areaCirculo;


function circulo (a) {      /*area de un cuadrado*/
    areaCirculo = 2 * 3,1415 *ladoCuadrado;
    return areaCuadrado;
}
document.write(circulo(areaCirculo));
document.write('<br>');



// Ejercicio-5 -> Crear una función que reciba un array de strings 
// e imprime por pantalla 
// el array con los strings capitalized,(pista: substring) 
// ejmp: let =[jose,maca,jorge], output [Jose,Maca,Jorge].

/* Dado un string que devolveria capitalizado
* es decir con su primera letra en mayuscula.

- esta funcion para TODOS los strings de un ARRAY capitalizados
- Entrada: Array de strings
- Salida: array de strings capitalizados

EJEMPLOS:
let =[jose,maca,jorge]
output [Jose,Maca,Jorge]

paso 1 = recorro la lista uno a uno.
paso 2 = para cada string lo capitalizo
paso 3 = devuelvo el array capitalizado

*/

let capitalizar = [jose,maca,jorge];

function recibir (array1,array2) {
    let  = array1.toUpperCase();
    return array2;
 }
 
  document.write(recibir(capitalizar));
  document.write('<br>');







  
//   Ejercicio 7 prueba tecnica -- una funcion que checkee si una string es 
//   palindromo (pudiendo ser una frase con espacios y tal)




// Ejercicio 8 prueba tecnica --una funcion q ordene un array de menor 
// a mayor en el que solo puede haber 0, 1 y 2 sin usar sort




// Ejercicio 9  prueba tecnica--Una función que dado un string comprobar si una 
// expresion de parentesis, corchetes y llaves 
// juntas en string es correcta (ejemplo: ‘[({[]})]’ seria true // ‘[{}’ seria false)
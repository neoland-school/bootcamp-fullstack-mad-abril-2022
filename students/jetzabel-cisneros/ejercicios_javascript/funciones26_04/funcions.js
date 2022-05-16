/* 
1. Crear una función que reciba por parámetros 2 array.
 Esta función devolverá los 2 arrays concatenados y los mostrará en el navegador.(easy).
*/
a = [1,2];
b = [3,4];

function f (a,b) {
    return a.concat(b)
};

c = f(a,b);
document.write(c);
// ó document.write(f(a,b));


2./*
Crear una función que reciba un parámetro de entrada 
y que imprima por pantalla true si el parámetro es un array 
y false si es otro tipo de dato.(easy).
 */
//Método Array.isArray() determina si el valor pasado es un Array.

//- Primero que funcione con mis inputs
//- Después con inputs de usuario
//- Después convierto lo que haya hecho en una función
//- y después lo que pueda faltar (en este caso, el JSON.parse)

//da false porque un input de usuario SIEMPRE es string, aunque sea [1,2]
/*

let z = "1";
document.write(typeof z); // string
let z2 = JSON.parse(z);
document.write(typeof z2); // number

JSON.parse lo convierte en lo que realmente es

return Array.isArray(JSON.parse(input));
a esto se le llama 'parsear el input' */

//const fruits = ["manzana", "pera", "higo", "mango"];

let input = prompt("Introduce lo que quieras comprobar si es un Array");

//let result = Array.isArray(input); // convertir esto a fuction
function comprueba_array (result) {
    return Array.isArray(JSON.parse(result));
 //   return Array.isArray(result);
}
document.write(comprueba_array(input)); 



/* 
3.Crear una función que reciba un array de números y devuelva un array 
con los que son mayores que 10.(easy).
*/

let myArray = [2,4,6,8,10,12,14,16]

let array_mayores_diez = [];

//opcion con forEach
myArray.forEach(function(n){
    if(n > 10)
    {
        array_mayores_diez.push(n);
    }
});
document.write(array_mayores_diez);


//convertido a función 
function son_mayores_10(array){
    return array.filter(number => number > 10);
};
let array_resultante = son_mayores_10(myArray);
document.write(array_resultante);


// función corta
let func_comprobar_mayores_10 = (x) => x > 10;
let output = myArray.filter(func_comprobar_mayores_10);
document.write(output);

4./*
Escribir varias funciones que dada las medidas por prompt(radio, lados, etc) 
que calculen área y perímetro de diferentes figuras geométricas 
(Rectángulo, Cuadrado, triángulo y Círculo),  
para circulo y rectangulo funcion normal, 
y cuadrado y triangulo arrow function.
*/

//Area = base * altura
//Circumferencia (perímetro) = 2πr (2 * pi * radio)


//let baseRect = prompt('Introduce las medidas de la base')
//let alturaRect = prompt('Introduce las medidas de la altura')


/*
function rectangulo (b,a){
    let areaRectangulo= b*a;
    document.write(`${area}`);

    let perimetro =a*a*b*b
*/
    function calc_rectangulo (base,altura) {
        let area = base*altura;
        let perimetro = ((base*2)+(altura*2));
        let result = [area,perimetro];
        return result
      };
      
      data = calc_rectangulo(baseRect,alturaRect)
      document.write(`El area del rectángulo introducido es ${data[0]}, y su perímetro es ${data[1]}`);


///////////////////////////////////////////////////////////
const rectBase = parseFloat(prompt('Base del rectángulo'));
const rectAltura = parseFloat(prompt('Altura del rectángulo'));
const cuadradoLado = parseFloat(prompt('Lado del cuadrado'));
const trianguloLado = parseFloat(prompt('Lado del triangulo equilatero'));
const circuloRadio = parseFloat(prompt('Radio del círculo'));

const arrRectangulo = (base,altura) => {
    let resultado = [];
    resultado[0] = `Àrea: ${base * altura} cm2`;
    resultado[1] = `Perímetro: ${(base*2) + (altura*2)} cm`;
    return resultado;
}

const arrCuadrado = lado => {
    let resultado = [];
    resultado[0] = `Àrea: ${cuadradoLado**2} cm2`;
    resultado[1] = `Perímetro: ${cuadradoLado*4} cm`;
    return resultado;
}

const triangulo = function (lado) {
    let resultado = [];
    let altura = ((lado**2)-((lado/2)**2))
    resultado[0] = `Àrea: ${(lado*altura)/2} cm2`;
    resultado[1] = `Perímetro: ${lado*3} cm`;
    return resultado;
}

const circulo = function (radio) {
    let resultado = [];
    resultado[0] = `Àrea: ${(Math.PI)*(radio**2)} cm2`;
    resultado[1] = `Perímetro: ${2*Math.PI*radio} cm`;
    return resultado;
}

let arrTriangulo = triangulo(trianguloLado);
let arrCirculo = circulo(circuloRadio);

document.write(`<p>${arrRectangulo(rectBase,rectAltura)}</p>`);
document.write(`<p>${arrCuadrado(cuadradoLado)}</p>`);
document.write(`<p>${arrTriangulo}</p>`);
document.write(`<p>${arrCirculo}</p>`);





/*
5.Crear una función que reciba un array de strings e imprime por pantalla el array 
con los strings capitalized,
(pista: substring) ejmp: let =[jose,maca,jorge], output [Jose,Maca,Jorge].
*/

//pedir array de nombres por prompt
let arr = prompt(`Escribe nombre`);
nombres_capitalized = 
array_de_nombres_del_prompt.map( n => n.charAt(0).toUpperCase() + n.substr(1) );
document.write(nombres_capitalized);



/*
6.Crear una función que dado un número y un array de números, 
te devuelva por pantalla la posición donde se encuentra el número 
o  -1 si no lo encuentra.
*/

numero = 3;
array_de_numeros = [1,2,3,4,5];

function mirarsiestaelnumero (num,arr) {
    return arr.indexOf(num);
};

document.write(mirarsiestaelnumero(numero,array_de_numeros));


/*
7.Crea una funcion que checkee si una string es palindromo 
(pudiendo ser una frase con espacios y tal)
*/
 //entra un string y sale un booleano
 //radar dará true
 //roedor daré false
 //recorer caracter a caracter generando el string dado la vuelta y comparar los extremos

function checkPalindrom (str) {
    return str == str.split('').reverse().join('');
};

/*
8.Una funcion q ordene un array de menor a mayor en el que solo puede 
haber 0, 1 y 2 SIN usar sort
 */
//reduce me ayuda a devolver un valor dado un array

// declara array vacio (let resultado = [];)
// mirar si en el array (con forEach o some) existe el num 0 (indexOf(0) != -1), si existe -> resultado.push(i) 
// el array 'resultado' ahora sería [0,0,0] si hubiera 3 ceros, o vacío si ninguno
// hacer lo mismo con el 1 y el 2 


function arrayS (array) {
    let arrZero = [];
    let arrOne = [];
    let arrTwo = [];

    array.forEach((v,i) => {
        if (v === 0) {
            arrZero.push(0);
        }else if (v === 1){
            arrOne.push(1);
        }else {
            arrTwo.push(2);
        }
    });
    return arrZero.concat(arrOne,arrTwo)  
}

const numArray = [0,1,0,2,0,2,1,1];

let sResult = arrayS(numcArray);

document.write(`<p>${sResult}</p>`);









/*
9.Una función que dado un string, comprobar si una expresion de parentesis, corchetes 
y llaves juntas en string es correcta 
(ejemplo: ‘[({[]})]’ seria true // ‘[{}’ seria false)
/*
Entrada: string
        Salida: boolean si la cadena es correcta
        Ejemplos:
        - [({[]})] --> true
        - [{} --> false
        - () --> true
        - ([)] --> false
        - ()() --> true
        - [(({}))}] --> false
            
    1. recorro caracter a caracter.
        a- Si el caracter de es de apertura lo apilo en un array de aperturas pendientes
        b- Si el caracter es de cierre:
            a- Si no hay aprturas pendientes --> false
            b- Si hay aperturas pendientes:
                a- Si la ultima apertura coincide con el caracter de cierre
                Quito la ultima apertura de mi array (desapilar)
                b- Si la ultima apertura NO coincide --> false
          2. Si quedan aperturas pendientes --> false
        */ 

function areBlocksValid(str){
const stack = [];// creo una pila vacía

    for(let i=0; i<str.length; i++){ // recorro caracter a caracter. (paso 1)
        const nextSymbol = str.charAt(i);
        if(nextSymbol==='[' || nextSymbol==='{' || nextSymbol==='('){ // paso 1.a
            stack.push(nextSymbol); // 
        }else{
        // entonces es de cierre
        if(stack.length === 0){ // 1.b.a
             return false;
        }else{
            if( (nextSymbol === ']' && stack[stack.length-1] === '[')
             || (nextSymbol === ')' && stack[stack.length-1] === '(')
             || (nextSymbol === '}' && stack[stack.length-1] === '{')){
             stack.pop(); // vamos bien, asi que desapilamos 1.b.b.a
            }else{
             return false;
            }
            }
        }
    }

    return stack.length === 0; // paso 2, no hay pendientes
        }

const blockString = '[(({}))]';
const resultBlocksValid = areBlocksValid(blockString);

document.write(`<p>${resultBlocksValid}</p>`);


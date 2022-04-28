/*
// 1.-Crea una función que devuelva el tipo de parámetro de entrada y píntalo por pantalla , usar  arrow function function.
let x = '3';
//let kind =typeof x;
// function tipo(){
//     document.write(kind);
// }
// tipo()
//let tipo =>document.write(kind);

let tipo = x => typeof x;

document.write(`<p>${tipo(x)}</p>`);
*/

/*
// 2.-Function que dado dos boleanos por prompt devuelva el AND de estos por pantalla, usar function declaration.
let item1 = prompt ('Ingresa un booleano');
let item2 = prompt ('Ingresa otro booleano');

// function booleans (a,b){
    
//     document.write(a&&b)
// }
// booleans (item1,item2);

let boleans = (a,b) => a&&b;
document.write(`<p>${boleans(item1,item2)}</p>`);
*/

/*
// 3.-Crea una función que dado un numero por prompt, devuelva el número al revés por pantalla, usar function expression
//ENTRADAS:
//Un numero (parseIn/prompt)

//PROCESO:
//Revertir el número.
//1.-Converitir a array .split("")
//2.-Cambiar el orden de los elementos .reverse()
//3.-Juntar los elementos .join("")


//SALIDA:
//Numero invertido
//4.-Imprimir

 let numero=parseInt(prompt(`Ingresa un número`));

function cambiar(){
 let numInv = numero.toString().split("").reverse().join("");
document.write(numInv)
}
cambiar()
*/

/*
// 4.-Crear una función para ordenar un array de números desordenados de mayor a menor.(easy)
//ENTRADA:
//Un array

//PROCESO:
//Ordenar un array de mayor a menor

//SALIDA.
//Array ordenado de mayor a menor.

let array=[1,20,2,10,4,3].sort((a,b) =>{
    if(a<b) return 1;
    if(a>b) return -1;
    return 0;
})
document.write(array);
*/

/*
// 5.-Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10.(easy)
//DATOS:
//ENTRADA:
//1.-Un array.

//PROCESO:
//1.-hacer un array nuevo con los numeros mayores de 10.
//2.-Usare el metodo .filter

//SALIDA:
//1.-Array nuevo con numeros mayores de 10.

function prueba(){
let numeros=[123,23,4,28,76,3,09,52];
let nuevo = numeros.filter(element => element>10);
document.write(nuevo);
}
prueba()
*/

/*
// 6.-Crear una función que dado una URL (Se representa con un string) por prompt,  me diga o no si pertenece al dominio de github,  usar function declaration.
let urls = "https://github.com/neoland-school/bootcamp-fullstack-mad-abril-2022/pull/86";

function pertenece(){
let revisa = urls.includes("github");
revisa===true ? document.write(`La pagina pertenece a github`):document.write(`La pagina no pertenece a github`);
d
}
pertenece();
*/

// 7.- Crear una función que calcule el Maximo Comun Divisor (Hint: Utilizar el algoritmo de euclides) y lo imprima por pantalla.
// DATOS
// ENTRADA:
//1.-Dos números.

// PROCESO:
//1.-Aplicar el algoritmo de Euclides Aplicar.
//1.1.-Determinar el numero mayor  y menor. (bucle for)


// SALIDA:
//.-Imprimir el MCD.  

let num1= 20;
let num2 = 44;
let a;
    let b;
function mcd(){
    
    if(num1>num2){
        resultado =num2/num1;
        document.write(resultado);
    }else{
    resultado =num1/num2;
    document.write(resultado);
}

}
mcd()



//   (hard) La sucesión de fibonacci es una lista de números infinita muy presente en la vida real (https://www.neoteo.com/la-sucesion-de-fibonacci-en-la-naturaleza/). Esta sucesión probablemente nos suene de la  película "El código Da Vinci". Consiste en calcular  el siguiente número teniendo en cuenta el valor   de los anteriores, siguiendo la siguiente   fórmula. fib(n) = fib(n-1) + fib(n-2). Es decir   el fibonacci de 3 por ejemplo se calcula sumando    el fib(2) junto con el fib(1). Para los casos más    básicos tenemos que fib(0) = 0 y fib(1) = 1.    Construir una función que dado un numero entero    devuelva su número de fibonacci. Solicitar el     entero al usuario. Pista: Se puede hacer con un     unico bucle.
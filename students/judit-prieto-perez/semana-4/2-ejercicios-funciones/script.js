/*PROBANDO FUNCIONES.*/



document.write(`<h3>Ejercicio 1</h3>`)

/*Crear una función que reciba por parámetros 2 array. 
Esta función devolverá los 2 arrays concatenados y los mostrará en el navegador.(easy).*/

document.write(`<h3>Ejercicio 1: Función que concatene dos arrays:</h3>`)
//creamos dos arrays: paso 0

let array1= [1,2,3,4,5]
let array2 = [4,5,6,67,8]

document.write(`Este es el primer array:${array1}`)
document.write(`Este es el segundo: ${array2}`)
//Creamos la función que CONCATENA. 
function concatenar(a,b){
  let concat=  a.concat(b);
return concat
}

document.write(`<p>Este es el array concatenado: </p>${(concatenar(array1,array2))}`)
/*Crear una función que reciba un array de números
 y devuelva un array con los que son mayores que 10.(easy).*/

 document.write(`<h3>Ejercicio 2: Devolver el array con números mayores de 10</h3>`)

 document.write(`El array es: [2,3,4,43,5,63]`)
 const numeros =[2,3,4,43,5,63]

 const mayor = numeros.filter(numeros => numeros > 10);

 document.write(mayor);

 document.write(`<h3>Ejercicio 3</h3>`)
 /*Crear una función que reciba un parámetro de entrada y que imprima por pantalla true si el parámetro es un array
y false si es otro tipo de dato.(easy).*/


let parametro = [3,4,5,6,] //tendria que dar true porque es un objeto
let param2 = 'soy un string' // tendria que ser false por ser un string

function tipo (a){
    if (typeof a === 'object') // si parametro typeof === objeto
return true;
if (typeof a !== 'object')
return false
}

document.write(`<p>Parámetro de entrada: ${parametro}</p>`)
document.write(tipo(parametro))

document.write(`<p>Parámetro de entrada que no sea objeto: ${param2}`)
document.write(tipo(param2))

document.write(`<h3>Ejercicio 4</h3>`)
/*
Escribir varias funciones que dada las medidas por prompt(radio, lados, etc) que calculen área y perímetro
 de diferentes figuras geométricas (Rectángulo, Cuadrado, triángulo y Círculo), para el  rectangulo y cuadrado
  usaremos arrow function.*/

  document.write(`<p>Área rectangulo</p>`)
  
  let base_rect = parseFloat(prompt('Introduce la medida de la base'))
  let alt_rect = parseFloat(prompt('Introduce la medida de la altura'))

function rectangulo_area (a,b) {
    let area = a*b
return area
}

(rectangulo_area(base_rect,alt_rect));

document.write(rectangulo_area(base_rect,alt_rect))

document.write(`<p>Perímetro cuadrado:</p>`)

function rectangulo (a,b) {
    let perim = b*2+a*2
return perim
}

(rectangulo(base_rect,alt_rect));

document.write(rectangulo(base_rect,alt_rect))

document.write(`<p>Área y Perímetro del triángulo</p>`)
/* Cálculo del área y perímetro del rectáungulo */
let base_tri = parseFloat(prompt('Introduce la medida de la base'))
let lado_tri = parseFloat(prompt('Introduce la medida de la altura'))
let alt_tri = parseFloat(prompt('Introduce la medida de la altura'))

function triangulo (a,b) {
    let area = b*a/2
return area

}

function triangulo_p (c) {
    let perim = c*3
return perim
}

document.write(triangulo(base_tri,alt_tri,lado_tri));
document.write(`<p></p>`);
document.write(triangulo_p(lado_tri));

document.write(`<p>Área y Perímetro del círculo</p>`);

document.write(`<h3>Area del circulo</h3>`)

let radio = parseFloat(prompt('Introduce la medida del radio'))
let diam = parseFloat(prompt('Introduce la medida del diámetro'))

function  circulo_area (radio) {
 return 3.14*(radio**2);

}

function  circulo_perim (diam) {
return  diam*3.14*2;

}

document.write(circulo_area(radio));

document.write(`<h3>Perimetro del circulo</h3>`)
document.write(circulo_perim(diam));


document.write(`<h3>Ejercicio 5</h3>`)
/*  Crear una función que reciba un array de strings e imprime por pantalla el array 
  con los strings capitalized,(pista: substring) ejmp: let =[jose,maca,jorge], output [Jose,Maca,Jorge].
*/
document.write(`<h2>Ejercicio 5</h2>`)


let fruta = ['pera','manzana','fresa','melón']

const mayusc = (parameter) => {
    const primeraletra = parameter[0].splice(1,0,parameter[0].toUpperCase);
    const resto = [parameter].substring(1);
    const frutabien = primeraletra+resto;

    return frutabien
};

console.log(mayusc(fruta));

document.write(`<h3>Ejercicio 6</h3>`)

/*Crear una función que dado un número y un array de números, 
te devuelva  por pantalla la posición donde se encuentra el número o 
 -1 si no lo encuentra.(medium)
*/
let n = [23,2,34,56,3]

 let busq = parseInt(prompt('Introduce el número que quieres localizar en el array'))

let posicion = numeros.findIndex(n => n === busq );
if(posicion && posicion != -1){
    document.write(`<p>posicion de la busqueda${posicion}`)
}else{
    document.write(`<p>No se encuentra</p>`)
}

/*una funcion que checkee si una string es palindromo (pudiendo ser una frase con espacios y tal)*/

document.write(`<h3>Ejercicio 7: Palabra palíndroma</h3>`)

let palabra = prompt('introduce una palabra para saber si es palindroma')

function isPalindrome(str) {
    return str.split('').reverse().join('') === str;
}

document.write(isPalindrome(palabra))

/*document.write(`<h3>Ejercicio 7</h3>`)


una funcion q ordene un array de menor a mayor en el que solo puede haber 0, 1 y 2 sin usar sort*

let ar = [54,4,3,1,2,3,4,5,5]

arr.sort(function(a, b) {
  return a - b;
});
console.log(ar);


/*tengo que saber si la 1º posición es igual que la última// la segunda es la antepenultina, etc)*/

let st = prompt('introduce una palabra para comprobar si es palindroma');

/**Ultima posicion de un array --> str[str.lenght-1] 

/**Primera posicion: .find 
*/
/**cómo de largo es la palabra --> palabra.lenght //Bucle hasta str.lenght. En cada vuelta 
 * comprobamos si str.lenght-1 === str[0]+1??

function palindroma(a){
for (let i=0; i <str.length; i++){
    if(str[i] === str.length-1){
        return false
    }
}
    
}

console.log(palindroma(str))*/
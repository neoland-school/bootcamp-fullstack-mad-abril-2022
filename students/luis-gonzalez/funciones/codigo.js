/*
//1.-Crear una función que reciba por parámetros 2 array. Esta función devolverá los 2 arrays concatenados y los mostrará en el navegador.(easy).
let letra = ['a','b','c','d','e'];
let num = [1,2,3,4,5];

function primer(a,d){
    let juntar =a.concat(d);
document.write(juntar);
}

primer(letra,num);
*/

/*
//2.-Crear una función que reciba un parámetro de entrada y que imprima por pantalla true si el parámetro es un array y false si es otro tipo de dato.(easy).
let beta = [2,4];

function prue(){
    if(typeof beta === 'object'){
        document.write(`true`);
    }else{
        document.write(`false`);
    }    
}
prue()
*/

/*
//3.-Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10.(easy).
let ar = [1, 23, 45, 5, 7, 78];
let nar = [];

function mayores() {
  for (let i = 0; i < ar.length; i++) {
    //document.write(`${ar[i]}<br>`);
    if (ar[i] > 10) {
      nar.push(ar[i]);
      document.write(` - ${ar[i]} - `);
    }
  }
}
mayores();
*/

/*
//4.-Escribir varias funciones que dada las medidas por prompt(radio, lados, etc) que calculen área y perímetro de diferentes figuras geométricas (Rectángulo, Cuadrado, triángulo y Círculo), para el circulo usaremos rectangulo y cuadrado usaremos arrow function.
//Figuras (Rectángulo, Cuadrado, triángulo y Círculo)
//Calcular(área y perímetro)

let figurar = prompt('Dime que figura');
let firgura =figurar.toLowerCase;

switch (figurar){

case 'rectangulo':
let br = parseFloat(prompt(`Dame la base`));
let hr = parseFloat(prompt(`Dame la altura`));
function recta(){
let arear = br*hr;
document.write(`<p>El area de este rectangulo es: ${arear}</p>`);
let perimetror = (br*2)+(hr*2);
document.write(`<p>El perimetro de este rectangulo es: ${perimetror}</p>`);
}
recta()
break;

case 'cuadrado':
  let lado = prompt(`Dame la longitud de un lado`);

function cuada(){
let areac = lado*2;
document.write(`<p>El area de este cuadrado es: ${areac}</p>`);
let perimetroc = (4*lado);
document.write(`<p>El perimetro de este cuadrado es: ${perimetroc}</p>`);
}
cuada()
break;

case 'triangulo':
let bt = parseFloat(prompt(`Dame la base`));
let ht = parseFloat(prompt(`Dame la altura`));
function triana(){
let areat = (bt*ht)/2;
document.write(`<p>El area de este triangulo es: ${areat}</p>`);
let perimetrot = (ht*2)+bt;
document.write(`<p>El perimetro de este rectangulo es: ${perimetrot}</p>`);
}
triana()
break;

case 'circulo':
let rad = parseFloat(prompt(`Dame el radio`));
function cira(){
let areac = (rad**2)*3.1416;
document.write(`<p>El area de este circulolo es: ${areac.toFixed(2)}</p>`);
let perimetroc = rad*2*3.1416;
document.write(`<p>El perimetro de este rectangulo es: ${perimetroc.toFixed(2)}</p>`);
}
cira()
break;

default:

window.alert(`Opción Erronea`);


}
*/

/*
//5.-Crear una función que reciba un array de strings e imprime por pantalla el array con los strings capitalized,(pista: substring) ejmp: let =[jose,maca,jorge], output [Jose,Maca,Jorge].
let parole = prompt (`Ingresa una palabra cualquiera:`);

function capita (){
let parolecap = parole.charAt(0).toUpperCase()+parole.slice(1);
document.write(parolecap);
}
capita();
*/


/*
//6.-Crear una función que dado un número y un array de números, te devuelva  por pantalla la posición donde se encuentra el número o  -1 si no lo encuentra.(medium)

let numer = 6;

let conj =[1,2,3,4,5];

function buscar(){
conj.push(numer);
let buscador = conj.find(ele => ele >3);
document.write(buscador);
}
buscar();
*/

/*
//7.-una funcion que checkee si una string es palindromo (pudiendo ser una frase con espacios y tal)
let =palind = 'ollo';

function palindromico(){

  let trans =palind.split("").reverse().join("");

if(palind === trans){

  document.write(`${palind} es un palindromo.`);
}else{
  document.write(`${palind} no es un palindromo.`)
}
}
palindromico()
*/


//8.-Una funcion q ordene un array de menor a mayor en el que solo puede haber 0, 1 y 2 sin usar sort

let arra = [1,4,9,2,6,3,8,7,5,0,];

function orden(){

arra.sort()
document.write(arra);
}
orden()

//lo intente,pero...

//9.-Una función que dado un string comprobar si una expresion de parentesis, corchetes y llaves juntas en string es correcta (ejemplo: ‘[({[]})]’ seria true // ‘[{}’ seria false)

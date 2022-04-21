/*
//Crea  un programa que dado dos números mediante prompt  imprima el mayor de ellos por pantalla.
let num1 = parseFloat(prompt(`Dame un número`));
let num2= parseFloat(prompt(`Dame un número`));

if(num1>num2){
    document.write(`El primero es mayor "${num1}"`);
}else{
    document.write(`El segundo es mayor "${num2}"`);
};
*/
//========================================
/*
document.write(`<br>============================<br>`);

//Mediante prompt introduce tu nombre y tu apellido e imprime por pantalla la ultima letra de tu nombre y la primera de tu apellido.
let nomb = prompt(`Ingresa tu primer nombre y primer apellido: `);
let seleN = nomb.charAt(3);
let seleA = nomb.charAt(5);
document.write(`<br>${nomb}`);
document.write(`<br>${seleN}`);
document.write(` y ${seleA}`);
*/
//========================================
//Crea un programa que imprima por pantalla  un saludo en el idioma que le indiques, los idiomas serán ingles, español y francés,  el idioma debe ser pasado por prompt y el saludo por default será en ingles.
/* 
document.write(`<br>============================<br>`);

let idioma = prompt(`¿En que idioma quieres que te salude? Ingles/Castellano/Frances`);

switch (idioma){

    case 'castellano':
document.write('Hola');
break;

case 'frances':
    document.write('Salut');
    break;

default:
document.write('Hello');

}
*/
// ========================================
// document.write(`<br>============================<br>`);

//Crea un programa donde incluyas una frase y este te diga si la frase incluye malas palabras, debes elegir 4 malas palabras que tu programa debe buscar y de encontrarlo va pintar en pantalla que la frase contiene malas palabras y de no ser así pintara que la frase esta limpia, debe dar igual si introduces la frase con mayúsculas  o minisculas .
/*let fraser = prompt(`Ingresa una frase: `);
let frase = fraser.toLowerCase();


let rev1 = frase.includes(`coño`);
let rev2 = frase.includes(`jodas`);
let rev3 = frase.includes(`verga`);
let rev4 = frase.includes(`marico`);


if(rev1 === true || rev2 === true ||rev3 === true || rev4 === true){
   document.write(`La frase tiene malas palabras`);
}else{
   document.write(`La frase esta limpia`);
}
document.write(`<br>============================<br>`);
//Crea un algoritmo que te imprima por pantalla,  si tienes la edad suficiente para entrar a un local nocturno o no, el algoritmo debe usar operador ternario.
let edad = parseInt(prompt('Ingresa tu edad'));

edad>18 ? document.write('Puedes entrar al local nocturno.') : document.write('No puedes entrar al local nocturno.');

document.write(`<br>============================<br>`);
//Crea un algoritmo para determinar si un año es bisiesto o no, para esto el año que se pase por prompt deberá ser divisible entre 4 y no divisible entre 100, o ser divisible entre 400, del resto seria un año común, para este algoritmo usaremos operador ternario, pinta por pantalla el resultado.
let bisiesto = parseInt(prompt(`Ingresa tu año de nacimiento`));
let año = bisiesto % 4;

año===0 && año!=100 ? document.write('Es bisiesto') : document.write('No es bisiesto');

document.write(`<br>============================<br>`);*/

//La luz de trafico puede ser 'verde',   "ambar"  o "rojo". Crea un algoritmo que dado la luz de tráfico actual por prompt, pinte por pantalla  un semaforo  con la luz indicada y que indique si el coche puede pasar o debe parar.
/*
let cambior = prompt(`Ingresa un color:
<br>Verde/Ambar/Rojo`);
let cambio = cambior.toLowerCase();

switch (cambio){

   case 'verde':
document.write(`
<div id="wrap">
       <div class="circulo" id="rojo"></div>
       <div class="circulo" id="amarillo"></div>
       <div class="circulo" id="verde" style="background:#00AC00"></div>
   </div>
`)
break;

case 'amarillo':
document.write(`
<div id="wrap">
       <div class="circulo" id="rojo"></div>
       <div class="circulo" id="amarillo" style="background:#E6BE00"></div>
       <div class="circulo" id="verde"></div>
   </div>
`)
break;

case 'rojo':
document.write(`
<div id="wrap">
       <div class="circulo" id="rojo" style="background-color:#CB0000"></div>
       <div class="circulo" id="amarillo"></div>
       <div class="circulo" id="verde"></div>
   </div>
`)
break;

default:
   document.write(`
   <div id="wrap">
           <div class="circulo" id="rojo"></div>
           <div class="circulo" id="amarillo"></div>
           <div class="circulo" id="verde"></div>
       </div>
   `)



}

document.write(`<br>============================<br>`);*/
//Vamos a crear una calculadora que haga las operaciones básicas de suma, resta, multiplicación y división, en este caso usaremos el condicional SWITCH,  el usuario debe ingresar mediante prompt el primer numero, el operador y el segundo numero y el algoritmo pintara por pantalla los dos números el operador y  el resultado ejmp= "2 + 2 = 4".
/*
let nume1 = parseFloat(prompt(`Ingresa un número: `));
let operadorr = prompt(
 `¿que operacion quieres realizar?
   <br>+ , - , * , /`
);
let nume2 = parseFloat(prompt(`Ingresa otro número: `));
let operador = operadorr.toLowerCase();

switch (operador) {
 case "+":
   let sum = nume1 + nume2;
   document.write(`${nume1} + ${nume2} = ${sum}`);
   break;

 case "-":
   let rest = nume1 - nume2;
   document.write(`${nume1} - ${nume2} = ${rest}`);
   break;

 case "*":
   let mult = nume1 * nume2;
   document.write(`${nume1} x ${nume2} = ${mult}`);
   break;

 case "/":
   let divi = nume1 / nume2;
   document.write(`${nume1} / ${nume2} = ${divi}`);
   break;

 default:
   document.write(`Ingrese campos requeridos.`);
   break;
}

document.write(`<br>============================<br>`);*/
//Creemos un algoritmo para saber si un estudiante puede optar o no a una beca, para eso debera pasar  mediante prompt un total de 7 calificaciones, y se deberá imprimir por pantalla la cantidad de asignaturas aprobadas, la nota media y si puede optar o no a la beca, para saber si un estudiante puede optar a la beca deberá tener el mínimo de asignaturas aprobadas( solo puede tener dos reprobadas,  usar operador de asignación para esta operación), y una nota media superior a 6, PD:" la nota mínima para aprobar una asignatura  es de 5".
/*
let alumno = prompt(`Ingresa el nombre del alumno`);
let adicion=0;

let cast = parseFloat(prompt(`Nota de Castellano:`));
let soci = parseFloat(prompt(`Nota de Sociales:`));
let mate = parseFloat(prompt(`Nota de Matematica:`));
let fisi = parseFloat(prompt(`Nota de Fisica:`));
let quim = parseFloat(prompt(`Nota de Quimica:`));
let hist = parseFloat(prompt(`Nota de Historia:`));
let cate = parseFloat(prompt(`Nota de Catedra:`));


document.write(alumno.toLocaleUpperCase());

if (cast > 5) {
 document.write(`<br>Castellano: ${cast} "APROBADO"`);
 adicion++;
} else {
 document.write(`<br>Castellano: ${cast} "Reprobado"`);
}

if (soci > 5) {
 document.write(`<br>Sociales: ${soci} "APROBADO"`);
 adicion++;
} else {
 document.write(`<br>Sociales: ${soci} "Reprobado"`);
}

if (mate > 5) {
 document.write(`<br>Matemáticas: ${mate} "APROBADO"`);
 adicion++;
} else {
 document.write(`<br>Matemáticas: ${mate} "Reprobado"`);
}

if (fisi > 5) {
 document.write(`<br>Fisica: ${fisi} "APROBADO"`);
 adicion++;
} else {
 document.write(`<br>Fisica: ${fisi} "Reprobado"`);
}

if (quim > 5) {
 document.write(`<br>Quimica: ${quim} "APROBADO"`);
 adicion++;
} else {
 document.write(`<br>Quimica: ${quim} "Reprobado"`);
}

if (hist > 5) {
 document.write(`<br>Historia: ${hist} "APROBADO"`);
 adicion++;
} else {
 document.write(`<br>Historia: ${hist} "Reprobado"`);
}

if (cate > 5) {
 document.write(`<br>Catedra: ${cate} "APROBADO"`);
 adicion++;
} else {
 document.write(`<br>Catedra: ${cate} "Reprobado"`);
}

document.write(`<br>============================<br>`);
document.write(`El Alumno ha Aprobado "${adicion}" materias.`);

let promedio = ((cast+soci+mate+fisi+quim+hist+cate)/7);
document.write(`<br>El promedio del alumno es de: "${promedio}".`)

if(adicion>4 && promedio>=6){
   document.write(`<br>El alumno es candidato a optar a la beca.`);
}else{
   document.write(`<br>El alumno no es candidato a optar a la beca.`);
}
document.write(`<br>============================<br>`);
//Fin.
*/

// 1. Crea un programa que dado un numero mediante promt y usando el bucle for, te impirma por pantalla su tabla de multiplicar de la siguiente forma:
// Tabla de multiplicar de 5
//  5 x 1 = 5
//  5 x 2 = 10
//  5 x 3 = 15
//  5 x 4 = 20
//  5 x 5 = 25
//  5 x 6 = 30
//  5 x 7 = 35
//  5 x 8 = 40
//  5 x 9 = 45
//  5 x 10 = 50
/*
let numer = parseInt(prompt(`Ingresa un número`));

for(i=0; i<10; i++){
   let resu=numer*i;
document.write(`${numer} x ${i} = ${resu}<br>`);
}
document.write(`<br>============================<br>`);
*/

/*
//2. Crear una página web que pinte por pantalla separado por comas las primeras 100 potencias de dos. Ejemplo: 1,2,4,8,16,32,64,...
document.write(`<br>============================<br>`);
for(i=0; i<=100;i++){
let pote = 2**i;
document.write(` ${pote}, `);
}
*/

/*
// 3.Crea un programa que recorra los números del 1-100 e imprima por pantalla :
// Fizz, si es multiplo de 3.
// Buzz, si es múltiplo de 5.
// FizzBuzz, si es múltiplo de 3 y 5 a la vez.
document.write(`<br>============================<br>`);

for(i=1; i<=100; i++){
   let opc1 = i%3;
   let opc2 = i%5;
   if (opc1 == 0 && opc2 !==0){
      document.write(` fizz `);
   }else if(opc1!==0 && opc2==0){
      document.write(` Buzz `);
   }else{
      document.write(` fizzBuzz `);
   }
}
*/
/*
//4. Escribir un programa que solicite al usuario el número de filas y el número de columnas. Dibujar una tabla con las filas y columnas introducidas, usar etiquetas html " th, tr, td.."
 //document.write(`<br>============================<br>`);
 let filas = parseInt(prompt(`Ingresa un numero de filas`));
 let columnas = parseInt(prompt(`Ingresa un numero de filas`));
 
 document.write(`<table>`)
for(let i=1; i<=filas; i++){

   document.write(`<tr>`)
for(let e=1; e<=columnas; e++){
   document.write(`<td></td>`)
}
document.write(`</tr>`)

}
document.write(`</table>`)
*/

// document.write(`<br>============================<br>`);
//5. Crear una página web que solicite al usuario una palabra y muestre un p con el número de vocales que hay.

// program to count the number of vowels in a string // defining vowels const vowels = ("a", "e", "i", "o", "u") function countVowel(str) ( // initialize count let count = 0; // loop through string to test if each character is a vowel for (let letter of str.toLowerCase()) ( if (vowels.includes(letter)) ( count++; ) ) // return number of vowels return count ) // 
const parole = prompt('Enter a string: ');
let count = parole.length;

for(let i = 0; i <=count; i ++){
   let letter = parole.charAt(i);
document.write(` ${letter} `);
}

// if(letter == a /*|| letter == e || letter == i || letter == o || letter == u*/){
//    j++;
//    document.write(j);

document.write(`<br>============================<br>`);
/*
//6. Imprime por pantalla el siguiente patron, el cual va a depender del numero que pases por prompt, usaremos CSS para la maquetación (una vez terminado y mediante animation usando @keyframes haz que el triangulo se desplace hasta el otro punto de la pantalla de manera infinita).
document.write(`<br>============================<br>`);
*/
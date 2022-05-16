/*1. Crea un array de palabras e imprime por pantalla la segunda posicion.*/ 

let frutas = ['pera', 'cereza', 'manzana', 'sandia'];
document.write(`${frutas[1]}`);
document.write(`<br>`);


/*2. Introduce un numero por prompt y crea un array de números con la longitud indicada de números  
e imprímelo por pantalla. */


//push(i+1)

let input = prompt("Introduce la longitud del array");
array_creado = [];

for (var i=0 ;i < input; i++) {
    array_creado[array_creado.length] = i+1
  //array_creado.push(i+1);  SIN USAR push
}
document.write(array_creado);



/* 
3. Crea un array de géneros musicales [rock, pop, country], 
rock debera ser un array de de subgeneros que contenga [punk, metal, hardcore], 

Ahora crea un array de banda que contenga un string ejmp "metallica" mas  
el array de géneros musicales y con ese array de banda muestra por pantalla el 
nombre de la banda "metallica" y el subgénero "metal".(easy).
 */

const rock = ["punk", "metal", "hardcore"];//rock = 3 strings; //primero hago este array porque irá dentro del otro
const generos = [rock, "pop", "country"];//generos = un array y dos strings. 

//con esto, el array generos ahora contiene también el array rock
//[["punk","metal","hardcore"],"pop","country"]

//creo un array de banda que contenga un string ejmp "metallica" mas el array de géneros musicales
banda = ["Metallica",generos];
//banda sería ["Metallica",["punk","metal","hardcore"],"pop","country"]

// banda es otro array que tiene, un string "Metallica", y el otro array con todo lo demás
// banda = ["Metallica",[["punk","metal","hardcore"],"pop","country"]]

document.write(banda[0] + ' ' + banda[1][0][1]);

//metal es la posición [1] del primer array (generos), 
//la posición [0] dentro de ese array (rock), y la posición [1] dentro de éste (metal)



/*4.Usa el ejercicio 1 para crear un array de 10 números 
e imprima por pantalla true si todos son mayor de 10 o false en caso contrario.
*/

//every(elemento => elemento condición)
numeros = [1,2,3,4,5,6,7,8,9,0];
numeros.every(elemento => elemento > 10) ? document.write("true") : document.write("false");


/*5.Introduce una palabra por prompt y crea un array palabras, 
y imprime true o false si palabra prompt existe o no dentro del array.
 */

//array.some(elemento => elemento condición)
let p = prompt("Introduce una palabra");
palabras = ['tierra', 'agua', 'cielo', 'árbol', 'mesa'];
palabras.some(elemento => elemento == p) ? document.write("true") : document.write("false");


//la diferencia es que el includes no permite condiciones, includes es como un 'some' con ==
//palabras.includes(p) ? document.write("true") : document.write("false");

//palabras.indexOf(p) > -1
//indexOf me devuelve la posición de lo que pido en el array, por ejemplo
//palabras.indexOf("tierra") sería 0



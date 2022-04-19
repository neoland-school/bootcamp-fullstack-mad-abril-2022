// Crea una variable de todos los tipos primitivos de 
// javascript y mediante el document.write escribe 
// por pantalla el tipo.

let string = 'hola';
let number = 123;
let boolean = true;
let strNum = '123';
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];


document.write(typeof string);
document.write(typeof number);
document.write(typeof boolean);
document.write(typeof strNum);
document.write(typeof dias);


// Introduce un texto en prompt y este debe aparecer en un alert.

let diAlgo = prompt("Di algo");

alert(diAlgo);

/* Crear dos variables con tu nombre y apellido de tipo string 
y concatenalas con el operador +  y luego repite
  la operación de concatenación pero con plantillas 
  literales, el resultado debes pintarlo en un h1 mediante el write.*/
  

  let nombre = 'Victor';
  let apellido = 'Martin';

  document.write('<br>');
  document.write(nombre + ' ' +apellido);

  document.write('<br>');
  document.write(`Mi nombre es ${nombre} ${apellido}`);

//   console.log("Me llamo " + nombre + " y mi apellido es " + apellido + ".");
  //  lo que esta mal:  <script>document.write("<h1>("Me llamo. " + nombre + " y me apellido " + apellido + ".")</h1>");</script>


  /*Imprimir por pantalla la longitud del string resultante del ejercicio anterior.*/
  document.write('<br>');

  let longitud = nombre.length;
  document.write(nombre.length);

  /*   Mediante prompt guarda una variable de tipo string 
que sea un color, pinta un div de 150 x 150 que contenga 
el color indicado en el prompt. */

let varRed = `red`;
let colorin = prompt(varRed);
let varDiv = `<div style="width:150px; height:150px; background-color:${colorin};"> </div>`;

document.write(varDiv);
// document.write`<div style="width:150px; height:150px; background-color: ${colorin};"> </div>`;
//esto de arriba estaba mal , es un error que cometia yo


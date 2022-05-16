/*
1.En un HTML crear un botón. 
Escuchar el evento click de ese botón y pintar en la consola de JS Hello world eventos
*/

//const button = document.querySelector("button");
//button.addEventListener("click", () => {
//console.log('Hello world eventos')
// });

/*
2.Modificar el anterior para cuando se haga click, se pinte un un div de 100x100 px con el color #EA22F3
*/


const button = document.querySelector("button");
button.addEventListener("click", () => {
console.log('Hello world eventos')
let new_div = document.createElement("div");
new_div.classList.add("div");
document.body.appendChild(new_div);

});

/*
3.Crear un formulario con un input. Cuando se haga click al botón de submit, que el sintetizador 
de voz cuente el texto por el altavoz.
 Ejemplo de hola mundo
    let voices = window.speechSynthesis.getVoices();
    let utterance = new SpeechSynthesisUtterance('Hola mundo');
    utterance.voice = voices[96];
    speechSynthesis.speak(utterance);
*/

/*let form = document.getElementById(form_one);
submit.addEventListener("submit", (e) => {
    let voices = window.speechSynthesis.getVoices();
    let utterance = new SpeechSynthesisUtterance(e.target.input_one.value);
    utterance.voice = voices[96];
    speechSynthesis.speak(utterance);

})*/

// grab the UI elements to work with
const textEl = document.getElementById('text');
const speakEl = document.getElementById('speak');

// click handler
speakEl.addEventListener('click', speakText);

function speakText() {
  // stop any speaking in progress
  window.speechSynthesis.cancel();

  // speak text
  const text = textEl.value;
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}






/*
4. Crear un input. Cuando vaya pulsando teclas pintar lo que el usuario haya escrito en un <p> debajo del input.
*/
//input modificando el <p> a de salir debajo del input
// keyup
//El preventDefault() método cancela el evento si es cancelable, 
//lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.
//Por ejemplo, esto puede ser útil cuando: 
// Al hacer clic en un "Submit" botón, evitar que enviar un formulario


let input = document.createElement("input");
document.body.appendChild(input);

input.addEventListener("keyup", (evento) => {

    evento.preventDefault();
    let parrafo = document.createElement("p");
    let texto_parrafo = document.createTextNode(input.value);
    parrafo.appendChild(texto_parrafo);
    document.body.appendChild(parrafo);

});




/*
5. Crear dos divs (100x100px) uno rojo y otro verde. Cuando pase el ratón por encima del rojo, 
cambiará a verde y el verde cambiará a rojo. 
Cuando salga volverá al estado normal. (Hacerlo con JS)
*/

let red = document.getElementsByClassName("red")[0]; // creo div red
let green = document.getElementsByClassName("green")[0]; // creo div green

red.addEventListener("mouseenter", () => {
  red.style.backgroundColor ='green';
  green.style.backgroundColor ='red';
});

red.addEventListener("mouseleave", () => {
  red.style.backgroundColor ='red';
  green.style.backgroundColor ='green';
});





/*Exercise in speechecognition.js & indexsr.html/*

6. Vamos a construir un creador de notas por voz. Esta aplicación utilizará el API de reconocimiento de voz 
para pasar de voz a texto. 
La aplicación tendrá un botón que al pulsar indicará al usuario que está grabando y 
el todo lo que diga el usuario hasta que le pulse stop, se guardará en una card. 
Cada vez que el usuario inicia y pare, se generará una nueva card con lo que ha dicho.
 Cada card además tendrá 3 botones. Uno para borrar la card, Otro para copiar el texto en el clipboard 
 y otro para decir en voz alta el texto que hay escrito en la card (parecido al ejercicio 3).

Para copiar el texto en el clipboard, podéis  utilizar el API de clipboard del BOM.
 Ej que copia hello world en el clipboard: navigator.clipboard.writeText('hello world')

Para poder escuchar y guardar el texto que dice un usuario, tenéis un tutorial en el siguiente 
URL:  (https://www.section.io/engineering-education/speech-recognition-in-javascript/). 
Ojo con los eventos de start, stop y result que son muy necesarios entenderlos para este ejercicio.

Cuando estemos grabando deberemos cambiar el texto a recording. 
Cambiar el color del botón a rojo y un div con una animación de onda.
 Por ejemplo:  https://codepen.io/yomateo/pen/ypbNrJ
Opcional: Que la animación de onda muestre exactamente cuando el usuario está hablando, 
sino se vería una linea sin más. Ej: https://codepen.io/ayaos/pen/wvPBbdX. 
PAra hacer esta parte como pista, hay que entender muy bien el objeto que tenemos en la función onresult.

*/
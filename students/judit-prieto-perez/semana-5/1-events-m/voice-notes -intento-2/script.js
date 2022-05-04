
//Primero se crea la condición para que se ejecute la variable speechrecognition.

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const text = document.getElementById('text');


let record = new webkitSpeechRecognition();
record.lang= 'es_Es';
record.continuous = true;
record.interimResults = true;



start.addEventListener('click', () => {
  record.start();

record.onstart = () => {
  document.getElementById('start');
          }

});


stop.addEventListener('click', () => {
record.stop();

record.onend = () => {
  document.getElementById('stop');

          }});



record.onresult = (evt) => {
  const results = evt.results;
  const grabacion = results [results.length -1] [0].transcript; ///Esto es lo que se graba 
  text.value += grabacion;
  document.getElementById('text').innerHTML = grabacion;

  }


  navigator.clipboard.writeText('grabacion').then(
  clipText => document.getElementById("#clip").innerText += clipText);

const div_color=document.getElementById("stop");
div_color.addEventListener("click", (e) => {     //Aquí va lo que ejecuta al hacer click en el button con id click// Se crea la card
const card_grabacion= document.createElement("div");
document.body.appendChild(card_grabacion);
card_grabacion.textContent = e.target;
card_grabacion.classList.add("card-note");
});


  
/////////






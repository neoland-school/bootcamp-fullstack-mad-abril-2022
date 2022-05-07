// 1. En un HTML crear un botón. Escuchar el evento click de ese botón 
// y pintar en la consola de JS Hello world eventos


// Obtener referencia a botón
// Recuerda: el numeral o # indica id
const boton = document.querySelector("#button");
// Agregar listener
boton.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	console.log("Hello world eventos");
});


// 2. Modificar el anterior para cuando se haga click, 
// se pinte un un div de 100x100 px con el color #EA22F3
const propiedad = {
    a: "hola",
};
propiedad.a='adios';


const modifBoton= document.querySelector("#button");
// Agregar listener
modifBoton.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    let etiquetas = document.createElement("div");  //creo elemento
    // etiquetas.textContent = "Titulo H2";  //Añado texto
        etiquetas.style.width ="100px";
        etiquetas.style.height = "100px";
        etiquetas.style.backgroundColor= "#EA22F3";   //Añado estilo color
        document.body.appendChild(etiquetas);   //imprime en el hijo del body

        
});


// 3. Crear un formulario con un input. Cuando se haga click al botón de submit, 
// que el sintetizador de voz cuente el texto por el altavoz. 
// Ejemplo de hola mundo

let formulario = document.getElementById("form1");  //recogo el formulario de html
formulario.addEventListener("submit", (e) => {     //añado el evento a la variable y la funcion

    let voices = window.speechSynthesis.getVoices();
    let utterance = new SpeechSynthesisUtterance(e.target.inpu.value);
    utterance.voice = voices[96];
    speechSynthesis.speak(utterance);
})


// 4. Crear un input. Cuando vaya pulsando teclas pintar lo que el usuario haya escrito 
// en un p debajo del input. Se debe utilizar el mismo p no crear párrafos nuevos. 
// Hint: keyupo input o changeserían buenos para este ejercicio

let input3 = document.getElementById('writeText');
input3.addEventListener("input", (e) => {
let text = document.getElementById('putText');
text.textContent = input3.value;

})


// 5. Crear dos divs (100x100px) uno rojo y otro verde. Cuando pase el ratón por encima del rojo, 
// cambiará a verde y el verde cambiará a rojo. Cuando salga volverá al estado normal. 
// (Hacerlo con JS). Hint: mouseenter y mouseleavepueden ser un buen par de eventos para este ejercicio 
// (editado) 

/*
-1  crear dos divs 100x100
-2  al hacer onmouseover
*/
    let divRed = document.createElement("div");
    divRed.classList.add("red");
    divRed.id= "changeRed";
    document.body.appendChild(divRed);

    let divGreen = document.createElement("div");
    divGreen.classList.add("green");
    divGreen.id= "changeGreen";
    document.body.appendChild(divGreen);

    let green = document.getElementById("changeGreen");
    let red = document.getElementById("changeRed");
    red.addEventListener("mouseenter", () => {
        red.style.backgroundColor = "green";
        green.style.backgroundColor = "red";
    })
    
    red.addEventListener("mouseleave", () => {
        red.style.backgroundColor = "red";
        green.style.backgroundColor = "green";
    })

    // const Divv1 = document.getElementById("red");
    // const Divv2 = document.getElementById("green");
    // Divv1.addEventListener("onmouseenter", function(evento){
    
    

    
 // 6. Vamos a construir un creador de notas por voz. Esta aplicación utilizará el API de 
// reconocimiento de voz para pasar de voz a texto. 

// La aplicación tendrá un BOTÓN que al pulsar 
// indicará al usuario que está grabando y el todo lo que diga el usuario hasta que le pulse stop, 
// se guardará en una card. 

// Cada vez que el usuario inicia y pare, se generará una nueva card con lo 
// que ha dicho. Cada CARD además tendrá 3 BOTONES. 

// Uno para (borrar la card, Otro para copiar el 
// texto en el clipboard y otro para decir en voz alta el texto que hay escrito en la card) 
// (parecido al ejercicio 3).

        
        

if ("webkitSpeechRecognition" in window) {
    // Initialize webkitSpeechRecognition
    let speechRecognition = new webkitSpeechRecognition();
  
    // String for the Final Transcript
    let final_transcript = "";
  
    // Set the properties for the Speech Recognition object
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang = "es_ES";
  
    // Callback Function for the onStart Event
    speechRecognition.onstart = () => {
      // Show the Status Element
      document.querySelector("#start").style.display = "block";
    };
    speechRecognition.onerror = () => {
      // Hide the Status Element
      document.querySelector("#status").style.display = "none";
    };
    speechRecognition.onend = () => {
      // Hide the Status Element
      document.querySelector("#status").style.display = "none";
    };
  
    speechRecognition.onresult = (event) => {
      // Create the interim transcript string locally because we don't want it to persist like final transcript
      let interim_transcript = "";
  
      // Loop through the results from the speech recognition object.
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        // If the result item is Final, add it to Final Transcript, Else add it to Interim transcript
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
        } else {
          interim_transcript += event.results[i][0].transcript;
        }
      }
  
      // Set the Final transcript and Interim transcript.
      document.querySelector("#final").innerHTML = final_transcript;
      document.querySelector("#interim").innerHTML = interim_transcript;
    };
  
    // Set the onClick property of the start button
    document.querySelector("#start").onclick = () => {
      // Start the Speech Recognition
      speechRecognition.start();
    };
    // Set the onClick property of the stop button
    document.querySelector("#stop").onclick = () => {
      // Stop the Speech Recognition
      speechRecognition.stop();
    };
  } else {
    console.log("Speech Recognition Not Available");
  }
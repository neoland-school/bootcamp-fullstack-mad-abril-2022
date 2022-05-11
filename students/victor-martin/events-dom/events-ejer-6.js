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
      document.querySelector("#start");
    };
    // speechRecognition.onerror = () => {
    //   // Hide the Status Element
    //   document.querySelector("#status").style.display = "none";
    // };


    speechRecognition.onend = () => {
      // Hide the Status Element
      document.querySelector("#finish");
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
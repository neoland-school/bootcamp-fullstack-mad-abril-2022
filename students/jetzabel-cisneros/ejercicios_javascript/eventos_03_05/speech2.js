try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
  }
catch(e) {
  console.error(e);
  //     var app_div = document.getElementsByClassName("voice-app")[0].style.display = 'none';
  //$('.no-browser-support').show();
  //$('.voice-app').hide();
}

let noteTextarea = document.getElementById("note-textarea");
let instructions = document.getElementById("recording-instructions");
let notesList = document.getElementById("notes");
  //var notesList = $('ul#notes');

var noteContent = '';


/*-----------------------------
      Voice Recognition 
------------------------------*/

// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses. 
recognition.continuous = true;

// This block is called every time the Speech APi captures a line. 
recognition.onresult = function(event) {

  // event is a SpeechRecognitionEvent object.
  // It holds all the lines we have captured so far. 
  // We only need the current one.
  var current = event.resultIndex;

  // Get a transcript of what was said.
  var transcript = event.results[current][0].transcript;

  // Add the current transcript to the contents of our Note.
  // There is a weird bug on mobile, where everything is repeated twice.
  // There is no official solution so far so we have to handle an edge case.
  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

  if(!mobileRepeatBug) {
    noteContent += transcript;
    noteTextarea.value = noteContent;
    //noteTextarea.val(noteContent);
  }

};

recognition.onstart = function() { 
    var text = document.createTextNode('Grabación iniciada. Prueba a hablar al micrófono.');
    var pt = document.createElement("p");
    //instructions.text('Voice recognition activated. Try speaking into the microphone.');
    instructions.appendChild(pt);
    instructions.appendChild(text);
}

recognition.onspeechend = function() {
    let text = document.createTextNode('Grabación detenida.');
    var pt = document.createElement("p");
    //instructions.text('You were quiet for a while so voice recognition turned itself off.');
    instructions.appendChild(pt);
    instructions.appendChild(text);
}

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    let text = document.createTextNode('No speech was detected. Try again.');
    //instructions.text('No speech was detected. Try again.');  
    instructions.appendChild(text);
  };
}



/*-----------------------------
      App buttons and input 
------------------------------*/

const start_record_btn = document.getElementById("start-record-btn");
start_record_btn.addEventListener('click', function(e) {
  if (noteContent.length) {
    noteContent += ' ';
  }
  recognition.start();
});

const pause_record_btn = document.getElementById("pause-record-btn");

pause_record_btn.addEventListener('click', function(e) {
  recognition.stop();
  let text = document.createTextNode("Voice recognition paused.");
  instructions.appendChild(text);
});

// Sync the text inside the text area with the noteContent variable.
noteTextarea.addEventListener('input', function() {
  noteContent = noteTextarea.value;
  //noteContent = $(this).val();
});


  
  
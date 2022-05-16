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

// Get all notes from previous sessions and display them.
var notes = getAllNotes();
renderNotes(notes);



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
  }

};

recognition.onstart = function() { 
  var text = document.createTextNode('Voice recognition activated. Try speaking into the microphone.');
  //instructions.text('Voice recognition activated. Try speaking into the microphone.');
  instructions.appendChild(text);
}

recognition.onspeechend = function() {
    let text = document.createTextNode('You were quiet for a while so voice recognition turned itself off.');
  //instructions.text('You were quiet for a while so voice recognition turned itself off.');
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
})

const save_note_btn = document.getElementById("save-note-btn");


save_note_btn.addEventListener('click', function(e) {
  recognition.stop();

  if(!noteContent.length) {
    let text = document.createTextNode("Could not save empty note. Please add a message to your note.");
    instructions.appendChild(text);
    //instructions.text('Could not save empty note. Please add a message to your note.');
  }
  else {
    // Save note to localStorage.
    // The key is the dateTime with seconds, the value is the content of the note.
    saveNote(new Date().toLocaleString(), noteContent);

    // Reset variables and update UI.
    noteContent = '';
    renderNotes(getAllNotes());


    noteTextarea.value = "";
    //noteTextarea.val('');
    let text = document.createTextNode("Note saved successfully.");
    instructions.appendChild(text);
    //instructions.text('Note saved successfully.');
  }
      
})


notesList.addEventListener('click', function(e) {
  e.preventDefault();
  let target = e.target;

  // Listen to the selected note.
  if(target.hasClass('listen-note')) {
    var content = target.closest('.note').find('.content').text();
    readOutLoud(content);
  }

  // Delete note.
  if(target.hasClass('delete-note')) {
    var dateTime = target.siblings('.date').text();  
    deleteNote(dateTime);
    target.closest('.note').remove();
  }
});



/*-----------------------------
      Speech Synthesis 
------------------------------*/

function readOutLoud(message) {
    var speech = new SpeechSynthesisUtterance();

  // Set the text and voice attributes.
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
  
    window.speechSynthesis.speak(speech);
}



/*-----------------------------
      Helper Functions 
------------------------------*/

function renderNotes(notes) {
  var html = '';
  if(notes.length) {
    notes.forEach(function(note) {
      html+= `<li class="note">
        <p class="header">
          <span class="date">${note.date}</span>
          <a href="#" class="listen-note" title="Listen to Note">Listen to Note</a>
          <a href="#" class="delete-note" title="Delete">Delete</a>
        </p>
        <p class="content">${note.content}</p>
      </li>`;    
    });
  }
  else {
    html = '<li><p class="content">You don\'t have any notes yet.</p></li>';
  }
  notesList.html(html);
}


function saveNote(dateTime, content) {
  localStorage.setItem('note-' + dateTime, content);
}


function getAllNotes() {
  var notes = [];
  var key;
  for (var i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);

    if(key.substring(0,5) == 'note-') {
      notes.push({
        date: key.replace('note-',''),
        content: localStorage.getItem(localStorage.key(i))
      });
    } 
  }
  return notes;
}


function deleteNote(dateTime) {
  localStorage.removeItem('note-' + dateTime); 
}
  
  
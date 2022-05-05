// utilizo el operador de nullish coalescing operator para inicializar cuando tengo null o undefined en el local
const tasks = JSON.parse(localStorage.getItem('tasks')) ?? []; // variable que me va a almacenar la información y NO la visualización

tasks.forEach(t => printTaskToHTML(t)); // pintamos las tareas que tengamos guardadas


// borra la card con un evento click
function removeTask(e,text) {
    const parentLi = e.path.find(e => e.classList.contains('tasks__item')); // Array de HTML Elements
    parentLi.remove(); // elimino el li padre
    const i = tasks.findIndex(t => t === text); // busco la posicion donde está mi tarea a borrar
    tasks.splice(i,1); // eliminar la posicion encontrada
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
    // actualizar el local con el nuevo del array --> lo que habia antes MENOS la tarea que he eliminado
}

// hablamos con laura
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

function generateHTMLTaskFooter(text) {
    const actionCopy = document.createElement('button');
    actionCopy.textContent = 'C'; // TODO: change to icons
    actionCopy.classList.add('action__copy');
    actionCopy.addEventListener('click', () => navigator.clipboard.writeText(text));

    const actionSpeak = document.createElement('button');
    actionSpeak.textContent = 'S'; // TODO: change to icons
    actionSpeak.classList.add('action__speak');
    actionSpeak.addEventListener('click', () => speak(text));

    const actionDelete = document.createElement('button');
    actionDelete.textContent = 'D'; // TODO: change to icons
    actionDelete.classList.add('action__delete');
    actionDelete.addEventListener('click', e => removeTask(e,text)); // asignamos la funcion de borrar

    const actions = document.createElement('footer');
    actions.classList.add('task__actions');

    actions.appendChild(actionCopy);
    actions.appendChild(actionSpeak);
    actions.appendChild(actionDelete);

    return actions; // devuelvo el contenedor con sus hijos ya hechos append
}

function printTaskToHTML(text) {

    const title = document.createElement('h2');
    title.textContent = 'Text:';

    const content = document.createElement('p');
    content.textContent = text;

    const actions = generateHTMLTaskFooter(text); // el footer con los botones

    const cardContainer = document.createElement('article');
    cardContainer.classList.add('task__container');
    cardContainer.appendChild(title);
    cardContainer.appendChild(content);
    cardContainer.appendChild(actions);

    const listItem = document.createElement('li');
    listItem.classList.add('tasks__item');
    listItem.appendChild(cardContainer);

    document.querySelector('.tasks__list').appendChild(listItem);
}

// crea un task dentro de mi app
function createTask(text){
    printTaskToHTML(text);
    tasks.push(text); // lo guardo en mi variable de datos
    localStorage.setItem('tasks', JSON.stringify(tasks)); // guardo en el local
}

const recordBtn = document.querySelector('.record__button');
let recording = false; // state var para saber si estamos grabando o no
let speechRecognition; // objeto que lee el micro
let recordingText = ''; // texto donde voy guardando la grabación

if ("webkitSpeechRecognition" in window) {
    speechRecognition = new webkitSpeechRecognition();
    speechRecognition.continuous = true;
    speechRecognition.lang = 'es-ES';

    speechRecognition.onstart = () => {
        recording=true;
        recordingText = '';
        document.querySelector("#record_text").style.display = "none";
        document.querySelector("#listening_text").style.display = "block";
    };

    speechRecognition.onend = () => {
        recording=false;
        document.querySelector("#record_text").style.display = "block";
        document.querySelector("#listening_text").style.display = "none";
    };

    speechRecognition.onError = console.error; // le asocion la función que pinta errores en la consola

    speechRecognition.onresult = e => recordingText += e.results[e.resultIndex][0].transcript;
} else {
    console.log("Speech Recognition Not Available")
}

recordBtn.addEventListener('click', () => {
    recordBtn.classList.toggle('record__button--recording');
    if (!recording) {
        // empezar a grabar
        speechRecognition.start()
    } else {
        // terminar de grabar
        speechRecognition.stop();
        // creo una task en mi app
        createTask(recordingText);
    }
});
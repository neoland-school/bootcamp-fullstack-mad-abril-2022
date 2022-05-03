
//1- En un HTML crear un botón. Escuchar el evento click de ese botón y 
// pintar en la consola de JS Hello world eventos

const buttonOne = document.querySelector('.button-ejer1')
buttonOne.addEventListener('click', (e) => {
    console.log('Hello World Eventos');
});

//2- Modificar el anterior para cuando se haga click, se pinte un un div de 100x100 px con el color #EA22F3

buttonOne.addEventListener('click', (e) => {
    let div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.backgroundColor = '#EA22F3';
    document.body.appendChild(div);
});


//3- Crear un formulario con un input. Cuando se haga click al botón de submit, 
// que el sintetizador de voz cuente el texto por el altavoz. Ejemplo de hola mundo
// let voices = window.speechSynthesis.getVoices();
// let utterance = new SpeechSynthesisUtterance('Hola mundo');
// utterance.voice = voices[96];
// speechSynthesis.speak(utterance);


const formEjerThree = document.querySelector('.form-ejer3');

formEjerThree.addEventListener('submit', (e) => {
    e.preventDefault();

    let voices = window.speechSynthesis.getVoices();
    // En vez de formEjerThree, podría no crear la constante y directamente acceder al form con e.target
    let utterance = new SpeechSynthesisUtterance(formEjerThree.textInput.value);
    utterance.voice = voices[2];
    speechSynthesis.speak(utterance);
});


//4- Crear un input. Cuando vaya pulsando teclas pintar lo que el usuario haya escrito en un p debajo del input.

const inputPPainter = document.querySelector('.pPainter');
let textFromInput = document.querySelector('.text-from-input')

inputPPainter.addEventListener('input', (e) => {
    textFromInput.textContent = e.target.value;
});


//5- Crear dos divs (100x100px) uno rojo y otro verde. Cuando pase el ratón por encima del rojo, 
// cambiará a verde y el verde cambiará a rojo. Cuando salga volverá al estado normal. (Hacerlo con JS)

const redDiv = document.querySelector('.red');
const greenDiv = document.querySelector('.green');

redDiv.addEventListener('mouseenter', (e) => {
    redDiv.style.backgroundColor = '#008000';
    greenDiv.style.backgroundColor = '#ff0000';
});

redDiv.addEventListener('mouseleave', (e) => {
    redDiv.style.backgroundColor = '#ff0000';
    greenDiv.style.backgroundColor = '#008000';
});
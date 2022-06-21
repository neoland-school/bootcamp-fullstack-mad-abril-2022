// 1. En un HTML crear un botón. Escuchar el evento click de ese botón y pintar en la consola de JS Hello world eventos

const buttonEvent = document.createElement('button')
buttonEvent.textContent = 'Enviar'


buttonEvent.addEventListener('click',() => {
console.log(`JS Hello world eventos`)
}),

document.body.appendChild(buttonEvent)

// 2. Modificar el anterior para cuando se haga click, se pinte un un div de 100x100 px con el color #EA22F3

buttonEvent.addEventListener('click',() => {
const div = document.createElement('div')
div.style.height = "100px"
div.style.width = "100px"
div.style.backgroundColor = "#EA22F3"
document.body.appendChild(div)
})

// 3. Crear un formulario con un input. Cuando se haga click al botón de submit, 
// que el sintetizador de voz cuente el texto por el altavoz. Ejemplo de hola mundo

const applyForm = document.createElement('form')
const printImput = document.createElement('input')
const buttonEventTwo = document.createElement('button')
buttonEventTwo.textContent = 'Enviar'

document.body.appendChild(applyForm)
applyForm.appendChild(printImput)
applyForm.appendChild(buttonEventTwo)

buttonEventTwo.addEventListener('click', () => {
    let voices = window.speechSynthesis.getVoices();
    let utterance = new SpeechSynthesisUtterance(printImput.value);
    utterance.voice = voices[96];
    speechSynthesis.speak(utterance);
})

// 4.Crear un input. Cuando vaya pulsando teclas pintar lo que el usuario haya escrito 
// en un p debajo del input.

const printImputTwo = document.createElement('input')
const printKeyOnP = document.createElement('p')
printKeyOnP.id = 'print-keyup'

printImputTwo.addEventListener('keyup',() => {
    const getKeyOnP = document.querySelector('#print-keyup')
    getKeyOnP.textContent = printImputTwo.value

})
document.body.appendChild(printImputTwo)
document.body.appendChild(printKeyOnP)


// 5. Crear dos divs (100x100px) uno rojo y otro verde. Cuando pase el ratón por encima del rojo,
// cambiará a verde y el verde cambiará a rojo. Cuando salga volverá al estado normal. (Hacerlo con JS).
// Hint: mouseenter y mouseleave pueden ser un buen par de eventos para este ejercicio

const divOne = document.createElement('div')
divOne.style.width = '100px'
divOne.style.height = '100px'
divOne.style.backgroundColor = 'red'
divOne.id = '#div-one'
const divTwo = document.createElement('div')
divTwo.style.width = '100px'
divTwo.style.height = '100px'
divTwo.style.backgroundColor = 'green'
divTwo.id = '#div-two'

document.body.appendChild(divOne)
document.body.appendChild(divTwo)

divOne.addEventListener('mouseenter', () => {
    divOne.style.backgroundColor = 'green'
})

divOne.addEventListener('mouseleave', () => {
    divOne.style.backgroundColor = 'red'
})

divTwo.addEventListener('mouseenter', () => {
    divTwo.style.backgroundColor = 'red'
})

divTwo.addEventListener('mouseleave', () => {
    divTwo.style.backgroundColor = 'green'
})

// 6. Vamos a construir un creador de notas por voz. Esta aplicación utilizará el API de reconocimiento de voz 
// para pasar de voz a texto. La aplicación tendrá un botón que al pulsar indicará al usuario que está grabando 
// y el todo lo que diga el usuario hasta que le pulse stop, se guardará en una card. 
// Cada vez que el usuario inicia y pare, se generará una nueva card con lo que ha dicho. 
// Cada card además tendrá 3 botones. Uno para borrar la card, Otro para copiar el texto en el clipboard 
// y otro para decir en voz alta el texto que hay escrito en la card (parecido al ejercicio 3).
//  . Para copiar el texto en el clipboard, podéis  utilizar el API de clipboard del BOM. 
//    Ej que copia hello world en el clipboard: navigator.clipboard.writeText('hello world')
//  . Para poder escuchar y guardar el texto que dice un usuario, tenéis un tutorial en el siguiente 
//    URL:  (https://www.section.io/engineering-education/speech-recognition-in-javascript/). 
//    Ojo con los eventos de start, stop y result que son muy necesarios entenderlos para este ejercicio.
//  . Cuando estemos grabando deberemos cambiar el texto a recording. Cambiar el color del botón a rojo y 
//    un div con una animación de onda. Por ejemplo:  https://codepen.io/yomateo/pen/ypbNrJ
//  * Opcional: Que la animación de onda muestre exactamente cuando el usuario está hablando, 
//    sino se vería una linea sin más. Ej: https://codepen.io/ayaos/pen/wvPBbdX. 
//    PAra hacer esta parte como pista, hay que entender muy bien el objeto que tenemos en la función onresult.

const apiVoicetoText = document.createElement('div')
apiVoicetoText.className = 'api-voice-text'
const recordVoice = document.createElement('button')
recordVoice.textContent = 'START'
recordVoice.id = 'start'
const stopRecordVoice = document.createElement('button')
stopRecordVoice.textContent = 'STOP'
stopRecordVoice.id = 'stop'
const recording = document.createElement('p')
recording.id = 'status'

document.body.appendChild(apiVoicetoText)
apiVoicetoText.appendChild(recordVoice)
apiVoicetoText.appendChild(stopRecordVoice)
apiVoicetoText.appendChild(recording)

const cardRecordedVoice = document.createElement('div')
cardRecordedVoice.className = 'container'
const textRecordedVoiceOne = document.createElement('h1')
textRecordedVoiceOne.textContent = 'Speech to Text'
const loudText = document.createElement('button')
loudText.className = 'loud-text'
loudText.textContent = 'Loud text'
const textRecordedVoiceTwo = document.createElement('p')
textRecordedVoiceTwo.textContent = 'Tap to record'

document.body.appendChild(cardRecordedVoice)
cardRecordedVoice.appendChild(textRecordedVoiceOne)
cardRecordedVoice.appendChild(loudText)
cardRecordedVoice.appendChild(textRecordedVoiceTwo)

const divText = document.createElement('div')
divText.className = 'text-button'
const textOne = document.createElement('p')
textOne.textContent = 'Text'
const textTwo = document.createElement('p')
textTwo.id = 'result'
const divButtons = document.createElement('div')
divButtons.className = 'buttons'
const removeButton = document.createElement('button')
removeButton.textContent = 'remove'
const copyTextButton = document.createElement('button')
copyTextButton.textContent = 'copy'

cardRecordedVoice.appendChild(divText)
divText.appendChild(textOne)
divText.appendChild(textTwo)
divText.appendChild(divButtons)
divButtons.appendChild(removeButton)
divButtons.appendChild(copyTextButton)

let final_transcript = '';

if ("webkitSpeechRecognition" in window) {
    let speechRecognition = new webkitSpeechRecognition();
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang = 'es-ES';

    speechRecognition.onstart = () => {
       document.querySelector('#start').style.backgroundColor = 'red'
        document.querySelector('#status').textContent = 'Recording ...'
    }
    document.querySelector('#start').onclick = () =>{
        speechRecognition.start();
    }

    speechRecognition.onend = () => {
        document.querySelector('#start').style.backgroundColor = '';
        document.querySelector('#status').textContent = ''
        
    }
    document.querySelector("#stop").onclick = () => {

        speechRecognition.stop();

    }
    speechRecognition.onresult = (event) => {
        let transcript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {

                final_transcript += event.results[i][0].transcript;
            } else {
                transcript += event.results[i][0].transcript;
            }
        }

        document.querySelector('#result').textContent = final_transcript + transcript
    }
} else {
    console.log("Speech Recognition Not Available");
}


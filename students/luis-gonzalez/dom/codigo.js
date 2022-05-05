/*
//1.- En un HTML crear un botón. Escuchar el evento click de ese botón y pintar en la consola de JS Hello world eventos

const boton = document.createElement('button');
boton.id ='boton';
let botonT = document.createTextNode('Enviar');
boton.appendChild(botonT);

boton.addEventListener("click", () =>{
    console.log('Hellow World Eventos');
})

document.body.appendChild(boton);

//==============================================
*/

/*
////2.-Modificar el anterior para cuando se haga click, se pinte un un div de 100x100 px con el color #EA22F3

const boton = document.createElement('button');
boton.id ='boton';
let botonT = document.createTextNode('Enviar');
boton.appendChild(botonT);

boton.addEventListener("click", () =>{

let cuadro = document.createElement('div');
cuadro.id='cuadro';

document.body.appendChild(cuadro);
    
})

document.body.appendChild(boton);
*/


//3.-Crear un formulario con un input. Cuando se haga click al botón de submit, que el sintetizador de voz cuente el texto por el altavoz. Ejemplo de hola mundo

let formulario = document.getElementById("formulario")
formulario.addEventListener("submit", (e)=>{
e.preventDefault();
    let voices = window.speechSynthesis.getVoices();
let utterance = new SpeechSynthesisUtterance(e.target.entrada.value);
utterance.voice = voices[11];
utterance.rate = .7;
speechSynthesis.speak(utterance);
})


/*
//4. Crear un input. Cuando vaya pulsando teclas pintar lo que el usuario haya escrito en un p debajo del input. Se debe utilizar el mismo p no crear párrafos nuevos. Hint: keyupo input o change serían buenos para este ejercicio

let entrada = document.createElement("input");
entrada.type = "text";
entrada.name = "entrada";
entrada.id = "entrada";
document.body.appendChild(entrada);


entrada.addEventListener("keyup", (e) => {
    e.preventDefault();
    
    creando()

    });




function creando(){
    let salidaP = document.createElement("p");
    let salidaPT = document.createTextNode(entrada.value);
    salidaP.appendChild(salidaPT);
    document.body.appendChild(salidaP);

}

*/
//=======================OJO TERMINAR==========================

/*
//5. Crear dos divs (100x100px) uno rojo y otro verde. Cuando pase el ratón por encima del rojo, cambiará a verde y el verde cambiará a rojo. Cuando salga volverá al estado normal. (Hacerlo con JS). Hint: mouseenter y mouseleavepueden ser un buen par de eventos para este ejercicio (editado)

let cRojo = document.createElement('div');
cRojo.id = 'cRojo';
document.body.appendChild(cRojo);

let cVerde = document.createElement('div');
cVerde.id = 'cVerde';
document.body.appendChild(cVerde);

cRojo.addEventListener('mouseenter', e =>{
    cRojo.style.background = 'green';
    cVerde.style.background ='red';
});

cRojo.addEventListener('mouseleave', e =>{
    cRojo.style.background = 'red';
    cVerde.style.background ='green';
});
*/


//6. Vamos a construir un creador de notas por voz. Esta aplicación utilizará el API de reconocimiento de voz para pasar de voz a texto. La aplicación tendrá un botón que al pulsar indicará al usuario que está grabando y el todo lo que diga el usuario hasta que le pulse stop, se guardará en una card. Cada vez que el usuario inicia y pare, se generará una nueva card con lo que ha dicho. Cada card además tendrá 3 botones. Uno para borrar la card, Otro para copiar el texto en el clipboard y otro para decir en voz alta el texto que hay escrito en la card (parecido al ejercicio 3).
//Para copiar el texto en el clipboard, podéis  utilizar el API de clipboard del BOM. Ej que copia hello world en el clipboard: navigator.clipboard.writeText('hello world')
//Para poder escuchar y guardar el texto que dice un usuario, tenéis un tutorial en el siguiente URL:  (https://www.section.io/engineering-education/speech-recognition-in-javascript/). Ojo con los eventos de start, stop y result que son muy necesarios entenderlos para este ejercicio.
//Cuando estemos grabando deberemos cambiar el texto a recording. Cambiar el color del botón a rojo y un div con una animación de onda. Por ejemplo:  https://codepen.io/yomateo/pen/ypbNrJ
//Opcional: Que la animación de onda muestre exactamente cuando el usuario está hablando, sino se vería una linea sin más. Ej: https://codepen.io/ayaos/pen/wvPBbdX. PAra hacer esta parte como pista, hay que entender muy bien el objeto que tenemos en la función onresult.
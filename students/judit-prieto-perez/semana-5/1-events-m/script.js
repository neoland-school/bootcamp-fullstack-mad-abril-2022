/* 
1.En un HTML crear un botón. Escuchar el evento click de ese botón y pintar en la consola de JS Hello world eventos*/




    const button_click= document.getElementById("submit");
    button_click.addEventListener("click", () => {
        console.log('Hello World');
    });

/*Modificar el anterior para cuando se haga click, se pinte un un div de 100x100 px con el color #EA22F3*/

   
        const div_color=document.getElementById("submit");
        div_color.addEventListener("click", () => {     //Aquí va lo que ejecuta al hacer click en el button con id click
        
        const div_rosa= document.createElement("div");
        document.body.appendChild(div_rosa);
        div_rosa.textContent = "Esto es un Div";
        div_rosa.classList.add("special") 
        
        //crear el div- hijo de container
        
    });

    /*3. Creamos un formulario con un input*/

/*
const form= document.createElement("form") /// Paso 0. crear el formulario
document.body.appendChild(form)
const input= document.createElement("input") //Input del formulario
form.appendChild(input)*/

/*Cuando se haga click al botón de submit, que el sintetizador de voz cuente el texto por el altavoz.*/

const form_=document.getElementById("submit");

form_.addEventListener("click", () => {   //Aquí va lo que ejecuta al hacer click en el button con id click
   /*
    let voices = window.speechSynthesis.getVoices(); //funcion de entrar voz
    let utterance = new SpeechSynthesisUtterance('Hola');
    utterance.voice = voices[96];
    speechSynthesis.speak(utterance);*/
 
});
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault(); 
    let voices = window.speechSynthesis.getVoices(); //funcion de entrar voz
    let utterance = new SpeechSynthesisUtterance(e.target.name.value);
    utterance.voice = voices[96];
    speechSynthesis.speak(utterance);
   
});


/*ejercicio4

4. Crear un input. Cuando vaya pulsando teclas pintar lo que el usuario haya escrito en un p debajo del input. 
Se debe utilizar el mismo p no crear párrafos nuevos. Hint: keyupo input o changeserían buenos para este ejercicio*/
/*

*/


const input = document.querySelector('input');  //Seleccionamos el ELEMENTO input 
const parrafo = document.getElementById('parrafo');//Seleccionamos el ID=parrafo

input.addEventListener('input', textoParrafo); //son los dos parámetros para que se produza el evento sobre INPUT

function textoParrafo(e) {
  parrafo.textContent = e.target.value; // FUNCION QUE EJECUTA EL ELEMENTO
}

/*5. Crear dos divs (100x100px) uno rojo y otro verde. Cuando pase el ratón por encima del rojo,
 cambiará a verde y el verde cambiará a rojo. Cuando salga volverá al estado normal. (Hacerlo con JS).
 Hint: mouseenter y mouseleavepueden ser un buen par de eventos para este ejercicio*/

 const mouseEventRed = document.getElementById('mouseEventRed');
 
 mouseEventRed.addEventListener('mouseenter', e => {
    mouseEventRed.style.background = 'red';
  });

  mouseEventRed.addEventListener('mouseleave', e => {
    mouseEventRed.style.background = 'green';
  });
  

  const mouseEventGreen = document.getElementById('mouseEventGreen');
  mouseEventGreen.addEventListener('mouseenter', e => {
    mouseEventGreen.style.background = 'green';
  });

  mouseEventGreen.addEventListener('mouseleave', e => {
    mouseEventGreen.style.background = 'red';
  });
  






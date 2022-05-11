/*
//1.-Colocar un botón en el navegador que al pulsarlo nos dibuje los números del 0 al 10. Entre elemento y elemento debe transcurrir 0.5 segundos. Para poder parar un intervalo, necesitamos la función clearInterval


let boton = document.createElement('button');
let botonT = document.createTextNode('Procesar');
boton.appendChild(botonT);
document.body.appendChild(boton);

let contador=0;

boton.addEventListener("click",()=>{

    setInterval(myfuncion,500);

    function myfuncion(){
        //console.log('esto')
        if(contador<=10){
        let parrafo = document.createElement('p');
            parrafo.textContent=contador;
           
                document.body.appendChild(parrafo);
                
            }
            contador++;
    }

});
*/


/*
//2.-Crear una función que se ejecute cada 1 segundo y pinte en Html un reloj con el formato hh:mm:ss.

let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

let hora = 1;
let minutos = 1;
let segundos = 0;




function reloj(){
    setInterval(()=>{
if(segundos<=60){
    sec.textContent=segundos;
}
segundos++;

if (segundos===60){
    segundos=0;
    min.textContent=minutos;
    minutos++;
}

if (minutos===60){
    minutos=0;
    hour.textContent=hora;
    hora++;
}

    },1000);
    
    
    
}
 reloj();



 /*
function reloj(){
    setInterval(()=>{
if(segundos<60){
    sec.textContent=segundos;
}else{
    sec.textContent=segundos;
}
segundos++;


    },500);
    
    
    
}
 reloj();
 */







// 3.-Crea una Aplicación web para mostrar la información de la bateria.
//  Mostrar la informacion actual sin reaionar a cambios de estad de la batería.
//  Si el nivel de la bateria cambia mostrarlo en el HTML (reaccionar al cambio de nivel)
//  Si el estado de la batería cambia mostraarlo en el HTML (reaccionar al cambio de estado).
//  Pintar en la pila del battery_cell el nivel de bateria adecuado.










//4.-(hard) Mini version de Google Meet. Google meet es una aplicación para la realizacion de videollamadas.. Vamos a crear una versión local de la misma. En la imagen se encuentra un ejemplo de objetivo final. Los pasos para serán los siguientes:
// Debemos generar la siguiente estructura en nuestro documento HTML
// La primera parte será poder visualizar la cámara de nuestra cam. Para ello debemos investigar sobre el uso de la siguiente función del api de Media Devices (https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia). Esta función nos permite meter en un video del HTML el Stream de video de nuestra cam. Nota: Debemos desactivar nuestra cam del zoom para probarla.
// Los botones que vemos en el video debemos pintarlos en HTML, aunque no serán funcionales.
// A continuación vamos a ver que podemos hacer con el botón Join Video. En este caso vamos a aprender posicionar por encima de cualquier aplicación un video y poder irnos a otras aplicaciones mientras ese video se mantiene flotante. A esto se le conoce como "Picture in Picture". JavaScript tiene un API para poder hacerlo y sería la siguiente (https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API). Cuando pulsemos ese botón verde, deberá llevar el video del HTML flotante por el ordenador. (hay una imagen de ejemplo)
// Como último paso vamos a implementar el botón de compartir pantalla. Para ello tenemos que investigar la siguiente función del API de Media Devices. (https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia). Es un API muy parecida a la del punto 2 pero que permite poner el Stream de compartición de pantalla dentro de un Video HTML. Cuando pulsemos el botón debemos sustituir nuestra cam con nuestra pantalla compartida. Cuando se deje de presentar, deberemos volver a ver nuestra cámara. Al pulsar en el botón verde mientras compartimos. También podemos ver el video de compartición flotante flotante
// Vamos a recrear el clone de github, nuestro botón del copy deberá copiar en el enlace al darle click .
// Para comprobar que se ha copiado bien, debemos crearnos debajo un botón de paste y darle click aparecerá  debajo en nuestro HTML, esta opción también nos debe permitir pegar imágenes que copiemos.

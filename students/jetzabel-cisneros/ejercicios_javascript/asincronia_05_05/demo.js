/*
1. Colocar un botón en el navegador DOM que al pulsarlo nos dibuje los números 
del 0 al 10. 
Entre elemento y elemento debe transcurrir 0.5 segundos. 
Para poder parar un intervalo, necesitamos la función clearInterval
*/

//To clear an interval, use the id returned from setInterval():

//myInterval = setInterval(function, milliseconds);
//Then you can to stop the execution by calling clearInterval():

//clearInterval(myInterval);
//setInterval(xx,500);

//setInterval(getcounter,500);


let mydiv = document.getElementById("cuenta");
let time = setInterval(getcounter,500);

function getcounter(){
	if(mydiv.textContent==10)
		{
			mydiv.textContent="Finalizado";
			clearInterval(time);
		}
	else{
		mydiv.textContent++;
	}
}


/*
2.Crear una función que se ejecute cada 1 segundo y pinte en Html un reloj con el formato hh:mm:ss.
*/

function relojDigital(){
    
    // separar date en horas,mins,y secs
    let fecha_completa = new Date();
    let hora = fecha_completa.getHours(); 
    let minuto = fecha_completa.getMinutes(); 
    let segundo = fecha_completa.getSeconds(); 
    
    // 0s extras en números de un dígito
    //sino las 7 y 2 de la mañana me quedaría: 7:2:59
    hora = (hora < 10) ? "0" + hora : hora;
    minuto = (minuto < 10) ? "0" + minuto : minuto;
    segundo = (segundo < 10) ? "0" + segundo : segundo;
     
    //junto las 3 cosas con dos puntos ":"
    let tiempo = hora + ":" + minuto + ":" + segundo;
    //insertar hora en div
    document.getElementById("reloj").textContent = tiempo;
    //repetir esta misma función cada segundo
    setTimeout(relojDigital, 1000);
    
        }

    relojDigital();
/*
OTRA MANERA
let h = document.getElementById("h");
let m = document.getElementById("m");
let s = document.getElementById("s");

let horas= 0;
let minutos= 0;
let segundos= 0;

funcion reloj (){
setInterval() => ´
if(segundos <= 60 ){
    s.textContent = segundos
}
segundos++

if(segundos === 60){
    segundos = 0;
    m.textContent = minutos
minuto ++
   
}
if(minutos === 60){
    minutos = 0;
    h.textContent = horas
horas ++

if (segundos < 10) {
    s.textContent = '0'+ segundos
} else {
    s.textContent = segundos

}

}, 500)
reloj()




*/

 /*
3.Crea una Aplicación web para mostrar la información de la bateria.
a.Mostrar la informacion actual sin reaccionar a cambios de estado de la batería.
b.Si el nivel de la bateria cambia mostrarlo en el HTML (reaccionar al cambio de nivel)

c.Si el estado de la batería cambia mostraarlo en el HTML (reaccionar al cambio de estado).
d.Pintar en la pila del battery_cell el nivel de bateria adecuado.
*/

battery.addEventListener('chargingchange', actualizarEstadoCarga);





const info_bateria = document.querySelector('.battery_container .info');
const cargando = info_bateria.querySelector('.battery-cargando');
const nivel = info_bateria.querySelector('.battery-nivel');

//función del navegador getBattery(), async
navigator.getBattery().then(function(battery) {
  
      // comprobación de carga o no convertido a función abajo
      actualizarEstadoCarga();
      actualizarNivelCarga();
      // listener al método de la función del navegador 'chargingcharge', cuando mande evento
      // lanzamos de nuevo la función que comprueba y pinta sí o no
      battery.addEventListener('chargingchange', actualizarEstadoCarga);
      battery.addEventListener('levelchange', actualizarNivelCarga);
  
      function actualizarEstadoCarga() {
        
        // anchor después de la pregunta en el html
        let value = cargando.querySelector('.carga');
        // pinta sí o no dependiedo de si la batería devuelve true o false al método charging
        battery.charging ? value.innerHTML = 'Sí' : value.innerHTML = 'No';
        
      }
  
      function actualizarNivelCarga() {
        
        // anchor después de la pregunta en el html
        let value2 = nivel.querySelector('.restante');
        // devuelve 0.3 para 30%, multiplicar por 100
        let perc = battery.level * 100;
        // pintar junto con el símbolo %
        value2.innerHTML = (perc.toFixed(2) + '%');
        
      }
              
});
/* UNA MANERA
const info_bateria = document.querySelector('.battery_container .info');
const cargando = info_bateria.querySelector('.battery-cargando');
const nivel = info_bateria.querySelector('.battery-nivel');

//función del navegador getBattery(), async
navigator.getBattery().then(function(battery) {
    // anchor después de la pregunta en el html
    let value = cargando.querySelector('.carga');
    // pinta sí o no dependiedo de si la batería devuelve true o false al método charging
    battery.charging ? value.innerHTML = 'Sí' : value.innerHTML = 'No';
    
    // anchor después de la pregunta en el html
    let value2 = nivel.querySelector('.restante');
    // devuelve 0.3 para 30%, multiplicar por 100
    let perc = battery.level * 100;
    // pintar junto con el símbolo %
    value2.innerHTML = (perc.toFixed(2) + '%');
         
});
*/



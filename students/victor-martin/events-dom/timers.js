
//TIMERS

// 1. Colocar un botón en el navegador que al pulsarlo nos dibuje los números 
// del 0 al 10. Entre elemento y elemento debe transcurrir 0.5 segundos. 
// Para poder parar un intervalo, necesitamos la función clearInterval

/*
-colocar boton html
-pulsarlo evento pintar numeros
-clearInterval

*/

let count = 0;

boton.addEventListener("click", () => {

    setInterval(contar,500);

    function contar () {

        if(count<=10){
        let parrafo = document.createElement('p');
        parrafo.textContent=count;

        document.body.appendChild(parrafo);
        
        }

        count++;
    }
});


// numbers = [0,1,2,3,4,5,6,7,8,9,10];
// const printNumbers = document.querySelector("#button");
// // Agregar listener
// printNumbers.addEventListener("click", function(n){
// 	// Aquí todo el código que se ejecuta cuando se da click al botón
// 	setInterval
//     clearInterval
// });

// setInterval
// variable contador
// cleanInterval

// let intervalID = setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');
// setInterval(function () {element.innerHTML += "Hello"}, 1000);

            // let printNumbers= document.querySelector(".boton");
            // printNumbers.onclick.
            // function initElement() {
            //     var p = document.getElementById("foo");
            //     // NOTE: showAlert(); or showAlert(param); will NOT work here.
            //     // Must be a reference to a function name, not a function call.
            //     p.onclick = showAlert;
            //   };




// 2. Crear una función que se ejecute cada 1 segundo y pinte en Html un reloj 
// con el formato hh:mm:ss.


let h = document.getElementById("h");
let m = document.getElementById("m");
let s = document.getElementById("s");

let hour = 0;
let minute = 0;
let seconds = 0;

function watch () {

    setInterval(() => {
        if (seconds < 60) {
                    // seconds++;
            s.textContent = seconds;

        }500;
        
        watch();

        if (minute<60) {
        minute++;
        m.textContent = minute;
        
        }
        if (minute<24) {
            hour++;
            h.textContent = hour;
            
            }

    }, 1000)
}
   

//                 // let horario = document.createElement('p');
//                 // horario.textContent=count;
//                 // document.body.appendChild(horario);
    



// 3. Crea una Aplicación web para mostrar la información de la bateria.
//  Mostrar la informacion actual sin relacionar a cambios de estado de la batería.
// Si el nivel de la bateria cambia mostrarlo en el HTML (reaccionar al cambio de nivel)
// Si el estado de la batería cambia mostraarlo en el HTML (reaccionar al cambio de estado).
// Pintar en la pila del battery_cell el nivel de bateria adecuado.

/*
-mostrar la informacion de la bateria del portatil
-mostrar informacion actual sin relacionar a cambios de % de bateria
-si el % de la bateria cambia mostrarlo en HTML
-si cambia el estado reaccionar a ello
-pintar el nivel de bateria adecuado (HTML supongo, y no en console.log)
*/


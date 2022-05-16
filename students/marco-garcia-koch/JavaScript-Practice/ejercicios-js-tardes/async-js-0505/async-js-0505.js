
//1- Colocar un botón en el navegador que al pulsarlo nos dibuje los números del 0 al 10. Entre elemento y 
// elemento debe transcurrir 0.5 segundos. Para poder parar un intervalo, necesitamos la función clearInterval.

const buttonEjerOne = document.querySelector('.button-ejer1');
const sectionOne = document.querySelector('.section-one');
let interval;
let i = 0;

buttonEjerOne.addEventListener('click', () => {
                interval = setInterval(() => {
                    if (i<=10) {
                        let p = document.createElement('p');
                        p.textContent = i;
                        sectionOne.appendChild(p)
                        i++
                    }
                    },500);
})


// 2- Crear una función que se ejecute cada 1 segundo y pinte en Html un reloj con el formato hh:mm:ss.

const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let secondsCounter = 0;
let minutesCounter = 0;
let hoursCounter = 0;

function clock () {
    setInterval (() => {
        if(secondsCounter < 60) {
            seconds.textContent = secondsCounter;
            secondsCounter++
        } else if (secondsCounter === 60) {
            secondsCounter = 0;
            minutesCounter++;
            minutes.textContent = minutesCounter;
        } else if (minutesCounter === 60) {
            minutesCounter = 0;
            hoursCounter++;
            hours.textContent = hoursCounter;
        }
    },1)
}

// clock();


//3- Crea una Aplicación web para mostrar la información de la bateria.
//  Mostrar la informacion actual sin reacionar a cambios de estad de la batería.

const batteryInfo = document.querySelector('.battery-info');

navigator.getBattery().then(b => {
    batteryInfo.textContent = `Battery Level: ${b.level*100}%,
                               Is it currently charging?: ${b.charging},
                               Charging time: ${b.charging},
                               Time to run out of battery: ${b.dischargingTime}.`
})

// Si el nivel de la bateria cambia mostrarlo en el HTML (reaccionar al cambio de nivel)

const batteryLevel = document.querySelector('.battery-level');

navigator.getBattery().then(b => {

    batteryLevel.textContent = `Porcentaje: ${b.level*100}%`;

    b.addEventListener('levelchange', () => {
        batteryLevel.textContent = `Procentaje: ${b.level*100}%`;
    });
    
});


// Si el estado de la batería cambia mostraarlo en el HTML (reaccionar al cambio de estado).

const batteryState = document.querySelector('.battery-state');

navigator.getBattery().then(b => {

    batteryState.textContent = `Charging State: ${b.charging}`;

    b.addEventListener('chargingchange', () => {
        batteryState.textContent = `Charging State: ${b.charging}`;
    });
    
});



// Pintar en la pila del battery_cell el nivel de bateria adecuado.

const batteryCell = document.querySelector('.battery-cell');
const greenStatus = document.querySelector('.green');
const orangeStatus = document.querySelector('.orange');
const redStatus = document.querySelector('.red');


navigator.getBattery().then(b => {

    if(b.level > 0.5) {
        greenStatus.style.backgroundColor = 'green';
        orangeStatus.style.backgroundColor = 'green';
        redStatus.style.backgroundColor = 'green';
    }

    if(b.level < 0.5 && b.level > 0.25) {
        greenStatus.style.backgroundColor = 'white';
        orangeStatus.style.backgroundColor = 'orange';
        redStatus.style.backgroundColor = 'orange';
    }

    if(b.level < 0.25) {
        greenStatus.style.backgroundColor = 'white';
        orangeStatus.style.backgroundColor = 'white';
        redStatus.style.backgroundColor = 'red';
    }


    b.addEventListener('levelchange', () => {
        batteryLevel.textContent = `Procentaje: ${b.level*100}%`;
    });
    
});

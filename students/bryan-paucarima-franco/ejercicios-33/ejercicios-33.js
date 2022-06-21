// Colocar un botón en el navegador que al pulsarlo nos dibuje los números del 0 al 10. Entre elemento y elemento debe transcurrir 0.5 segundos. Para poder parar un intervalo, necesitamos la función clearInterval
const inputOne = document.createElement('input')
inputOne.type = 'submit'
const printP = document.createElement('p')
printP.id = 'id-p'

document.body.appendChild(inputOne)
document.body.appendChild(printP)

const element = document.getElementById("id-p");
let contador = 0;

inputOne.addEventListener ('click', () => {
   setInterval(printOneToTen,500)
})
function printOneToTen() {
    if (contador<=10) {
    element.append(contador)
    contador++
}}

// 2. Crear una función que se ejecute cada 1 segundo y pinte en Html un reloj con el formato hh:mm:ss.

let countHours = 0
let countMinutes = 0 
let countSeconds =  0

const hour = document.createElement('span')
hour.id = 'hour'
const minutes = document.createElement('span')
minutes.id = 'minutes'
const seconds = document.createElement('span')
seconds.id = 'seconds'

function printTime(time) {
    return time < 10 ? `0${time}` : time;
}

function printHourMinSec() {
    hour.textContent = printTime(countHours) + ':'
    minutes.textContent = printTime(countMinutes) + ':'
    seconds.textContent = printTime(countSeconds)
}

document.body.appendChild(hour)
document.body.appendChild(minutes)
document.body.appendChild(seconds)

function upHourMinSec() {
    setInterval(() => {
        countSeconds++
        if (countSeconds >= 60) {
            countSeconds = 0;
            countMinutes++;
        }
        if (countMinutes >= 60) {
            countMinutes = 0;
            countHours++;
        }

        printHourMinSec();
    },100)
}

upHourMinSec()


// 3. Crea una Aplicación web para mostrar la información de la bateria.
// . Mostrar la informacion actual sin reaionar a cambios de estad de la batería.
// . Si el nivel de la bateria cambia mostrarlo en el HTML (reaccionar al cambio de nivel)
// . Si el estado de la batería cambia mostraarlo en el HTML (reaccionar al cambio de estado).
// . Pintar en la pila del battery_cell el nivel de bateria adecuado.

let batteryLevel = 0;

const divBattery = document.createElement('div')
divBattery.id = 'battery'
const divStatus = document.createElement('div')
divStatus.id = 'battery-status'
const levelStatus = document.createElement('p')
levelStatus.id = 'level-status'

document.body.appendChild(divBattery)
document.body.appendChild(levelStatus)
divBattery.appendChild(divStatus)

function displayBatteryLevel(level) {
    levelStatus.textContent = `Estado: ${level}%`
    divStatus.style.width = `${level}%`
    if (level < 20) {
        divStatus.style.backgroundColor = 'red'
    } else if (level < 60) {
        divStatus.style.backgroundColor = 'orange'
    }
}

navigator.getBattery().then(function(battery) {
    updateChargeInfo()
    updateLevelInfo()
  
    battery.addEventListener('chargingchange', function(){
      updateChargeInfo()
    })
    function updateChargeInfo(){
        console.log("La batería esta cargando? "
                  + (battery.charging ? "Si" : "No"))
    }
  
    battery.addEventListener('levelchange', function(){
      updateLevelInfo()
    })
    function updateLevelInfo(){
        displayBatteryLevel(battery.level * 100)
    }
  })


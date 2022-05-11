// // 1. Crear un objeto que tenga dos propiedades ('demo'  de tipo string)  y ('hello' de tipo boolean). Los valores serán 'hola' para demo y true para 'hello'.

const demo = {
    demo: 'hola',
    hello: true,
}

// 2. Cambiar el valor de 'hello' a false.

demo.hello = false


// // 3. Crear un objeto que tenga dos propiedades , entre ellas una  de tipo number, Imprime por pantalla el objeto y luego imprime por pantalla solo la propiedad de tipo number. 
// //  Repetir el proceso pero con propiedades que tengan los tipos de datos string, boolean, null, undefined , array, function, objects.(easy).

const objectOne = {
    number: 25,
    str: 'hello',
    isOverAge: true,
    null: null,
    unDefined: undefined,
    arrayOne: [2,5,7,3],
    functionOne : (a) => {},
    objectTwo: {
        aa: 'aa',
    }
}

console.log(objectOne)
console.log(objectOne.number)
console.log(objectOne.str)
console.log(objectOne.isOverAge)
console.log(objectOne.null)
console.log(objectOne.unDefined)
console.log(objectOne.arrayOne)
console.log(objectOne.functionOne)
console.log(objectOne.objectTwo)

// 4. Crea una función que dado un string con una hora (ej: 14:36:57) devuelva un objeto con la propiedad hora, minutos y segundos e imprimelo por pantalla.(medium)

let hour = parseFloat(prompt('Introduce la hora'))
let min = parseFloat(prompt('Introduce los minutos'))
let sec = parseFloat(prompt('Introduce los segundos'))

function returnHourMinSec(a,b,c) {
    const objectDemo = {
        hours: a,
        minutes: b,
        seconds: c,
    }
    return objectDemo
}
    
console.log(returnHourMinSec(hour,min,sec))


// 5. Crea una función que imprima por pantalla el 'nombre: valor' de cada propiedad del objeto  (buscar mertodos de objeto ejmp Object Keys).(easy).

const teslaS = {
    brand: 'Tesla',
    model: 'S',
    fab: 2020,
    color: '#594939',
}

function returnNameValor (a) {

    document.write(Object.keys(a),Object.values(a))
    console.log(Object.keys(a),Object.values(a))
    console.log(Object.entries(a))
}
Object.keys(teslaS).forEach(p => console.log(`${p} : ${teslaS[p]}`))
console.log(returnNameValor(teslaS))

//otra forma
// Object.entries(teslaS).forEach(v => console.log(`${v[0]}:${v[1]}`));










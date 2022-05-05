# Asincronía

JavaScript solo puede ejecutar UNA línea de código a la vez. Esto implica que cuando tenemso que esperar por alguna acción, debemos evitar bloquear el hilo.

Para ello se le puede decir a JS que espere sin bloquear. Este tipo de espera se llama `Asincronía` y la web está completamente LLENA de este tipo de esperas.

Mención especial al entendimiento del `Event Loop`

![Event Loop](https://programmerclick.com/images/370/0344b65d6494687b9a3d961fc67a4f22.png)

## ¿Como JS me permite gestionar la asincronía?

### Callbacks

Este mecanismo consiste en pasar una función a la espera, para que ésta sea ejecutada cuando haya terminado dicha espera.

¿Quien utiliza este mecanimos actualmente?

- timers: `setTimeout` y `setInterval`.
- Eventos: `addEventListener`.
- Funciones del BOM. Speech, [geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)

### Promises

Son la evolución de los callbacks.

Este mecanismo es un nuevo tipo de datos (Objeto de tipo [Promise](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise))

Este Promise tiene estados:

1. Es el estado cuando se crea la Promesa. Se le llama `pending`. Una vez que salga de este estado, la promesa NUNCA volvera a estar en `pending`.
2. Cuando termina la espera de la asincronía, podemos pasar a dos posibles estados:
    1. Que la espera termine correctamente. `fulfilled`. Una vez que la promesa llegue, NO se moverá de este estado.
    2. Que la espera no se ha completado correctamente. `rejected`. Una vez que la promesa se encuentra en este estado, NO se moverá de aqui.

![States](https://mdn.mozillademos.org/files/8633/promises.png)

¿Como creo una promesa?

```js
// reject y resolve, su tipo de datos es funcion
const p = new Promise( (resolve, reject) => {
    // Indicamos el código asincrono que queremos ejecutar, en este caso esperamos 3 segundos antes de pasar a fulfilled la promesa
    setTimeout(() => {
        resolve('Esto es que estamos fulfilled'); // segun creo la promesa, la paso directamente a `fulfilled`
    }, 3000)
});

p.then(
    d => console.log('Esto serían los datos del resolve', d), // fulfilled
    () => {} // rejected
)

```

¿Como escucho el resultado de una promesa? (La cree yo u otra función)

Todos los objetos promesa, tienen una función que se llama `then` (es un método de una promesa)

```js

// supongamos que tenemos un objeto promesa llama `myPromise`
myPromise.then(
    resolveData => { /* Esto será la función que se ejecute cuando la promise esté fulfilled */},
    rejectData => { /* Esto será la función que se ejecute cuando la promise esté rejected */}
).catch(() => { /* Esta función se ejecuta cuando hay PETES */ })
 .finally(() => { /* Esta función se ejecuta siempre, esté fulfilled o reject o pete */ })


console.log('Antes del then');
myPromise.then(() => console.log('Fulfilled'));
console.log('Despues del then');

// suponiendo que la promesa myPromise se resuelve (fulfilled). ¿Que orden de ejecución tienen los console.log?
/**
 * `Antes del then`
 * `Despues del then`
 * `Fulfilled`
 */

// supongamos que la promesa myPromise se rechaza (rejected). ¿Que orden de ejecución tenemos?
/**
 * `Antes del then`
 * `Despues del then`
 * 
 */

```

¿Quien usa esto?

- Llamadas al servidor: `fetch`
- Muchos elementos del BOM asínconos. getBattery, MediaStream (Web Cam, audio).

Ejemplo del battery

```js
// se debería usar createElement, appendChild , etc
navigator.getBattery().then(b => {

    document.write(`Procentaje: ${b.level*100}%`);

    b.addEventListener('levelchange', () => {
        // esto se ejecuta cuando se produzca un cambio en el nivel
        document.write(`Procentaje: ${b.level*100}%`);
    });
    
});

```
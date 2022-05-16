# Fetch

Es una función que nos ayuda a descargar información de un servidor (imagenes, archivos, texto, HTML, JSON,...) utilizando JavaScript.

- El tipo de dato del fetch es `function`
- Tiene dos posibles parámetros de entrada:
    1. **Obligatorio** de tipo string. `URL` del recurso que quiero descargar/operar.
    2. **Opcional** Un Objeto donde vamos a escribir las propiedades de la solicitud al servidor
- Fetch devuelve como salida una `Promesa`. Que se resuelve cuando el servidor responda. Si el servidor NO responde, entonces la promesa se rechaza con el error.

```js

fetch('https://www.lipsum.com/feed/html') // hacemos una solicitud de tipo GET
.then(r => r.text()) // el primer then procesa la respuesta y devuelve una promesa con el formato que hemos elegido
.then(d => console.log(d)) // ya tendríamos disponible los datos que devuelve el servidor en el formato que hemos elegido.

// version async/await
async function requestLoremIpsum(){
    const r = await fetch('https://www.lipsum.com/feed/html');
    const d = await r.text();
    // `d` en este ejemplo es un string
}


// Ejemplo de paises
const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
const countries = await r.json();

```

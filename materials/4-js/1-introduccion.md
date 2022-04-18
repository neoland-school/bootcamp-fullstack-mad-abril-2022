# Introducción

JavaScript es un lenguaje interpretado de alto nivel. Surge en el año 1995 y se utiliza para poder reaccionar a las interacciones del usuario con la página web (al menos en el origen del lenguaje de programación).

## Formas de incluir JS en una web

Principalmente tenemos dos formas:

1. Utilizando la etiqueta `script`, en el HTML, con el código JS dentro.

    ```html
     <script>
         /*Codigo JavaSript (JS)*/
     </script>
    ```

2. Crear un archivo con extensión `.js` y enlazarlo en la página HTML a través de la etiqueta `script`, pero esta vez con un atributo `src` que tiene la URL del archivo. Nosotros de momento lo pondremos al final del `body` como última etiqueta del mismo.

    ```html
        <script  src="URL_ARCHIVO_JS" ></script>
    ```

    ```js
      /* Archivo JS con código JS */
    ```

## ¿Como se programa en JS?

El código JS es un código **secuencial** y consiste en una serie de instrucciones a la máquina con una estructura determinada y diferentes tipos de instrucción.

Las instrucción terminan (casi siempre) con el caracter `;`.

**Secuencial** significa que la máquina ejecutará la instrucción que haya en la línea 1 de nuestro código y cuando termine, ejecutará la siguiente instruccion, pero SOLO cuando termine.

```js
alert('Hello world from file'); // primero se ejecuta esta
let c = 3; // luego esta
console.log(c+3); // por último esta orden
```

## Algunas instrucciones útiles que vamos a utilizar

### Pintar un mensaje en la consola de las devtools

```js
// pinta un mensaje en las devtools
console.log('El mensaje a pintar');
// otras variantes en función de la tipología del mensaje
console.info('Mensajes de información');
console.warn('Mensajes de warning');
console.error('Mensaje de error');
```

### Pintar una alerta al usuario, en forma de popup

```js
alert('Mensaje del popup para el usuario');
```

### Pintar HTML en bloque

```js
// mando al documento HTML que pinte un párrafo. Este se escribirá como hijo del body
document.write('<p>hola</p>');

// otro ejemplo con un div que tenga un hijo
document.write('<div style="color:white; width:100px; height: 100px; background-color: violet"> <p>Esto está en un div</p> </div>');
```

Warning: Cuando hacemos document.write la primera vez, este elimina todo el contenido que haya en el body!

### Solicitar al usuario información

```js
// muestra al usuario un alert con un cuadro para que el usuario meta información y devuelve lo que el usuario ha introducido para que podamos guardarlo
prompt('Introduzca un número');
```

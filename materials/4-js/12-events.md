# Eventos

Los eventos nos ayudan a capturar y escuchar las interacciones del usuario y reaccionar a ellas.

Además de las interacciones del usuario tambien tenemos eventos de la propia página web.

Para poder reaccionar a un evento, necesitamos asignar una función, que llamaremos handler.

El handler es una función que se conoce como callback.

Para escuchar el evento usaremos la función `addEventListener`. Esta funcion añade un handler para un evento concreto dentro de nuestra página.

```js
// añadir un escuchador de click a todo el documento
document.addEventListener('click', () => { /*
    FUNCION HANDLER === LA función que se ejecuta cuando se produzca un evento.
*/});

```

# Storage

Nos indica las formas que tiene el navegador de persistir la información.

## Cookies

Nos ayudan a persistir la información dentro del navegador. Se gestionan con el objeto `document.cookies`.

## Session/local storage

Son almacenamientos donde podemos guardar pares clave/valor. 
Guardo un valor (string, array, boolean, number, object) asociándolo a una clave 
que es un identificador.

Session y local son dos cajones de almacenamiento independientes.

Podemos almacenar tantas claves/valor como nos deje el ordenador.

La información que guardamos solo es visible para páginas del mismo dominio o ip.

Podemos realizar 4 operaciones ==> (CRUD)

La diferencia entre session y local son dos:

1. Se usan objetos del window diferentes. (`window.sessionStorage` y `window.localStorage`).
2. Cuanto tiempo persiste la información:
    - sessionStorage: La información dura hasta que se cierre la **PESTAÑA**.
    - localStorage: La información dura hasta que el usuario la borre conscientemente. Aunque se apague el ordenador sigue estando ahi. Además se actualiza entre pestañas del mismo dominio.
        - NO ALMACENAR NUNCA EN LOCAL SESIONES E INFORMACIÓN SENSIBLE

El **tipo de datos que soporta tanto local como session son strings**.

¿Como hago el CRUD?

```js

// esto será equivalente para localStorage

/* CREATE */
sessionStorage.setItem('numTasks', 55); // creamos una clave llamada 'numTasks' con valor '55';

/* READ */
sessionStorage.getItem('numTasks'); // esto devuelve el valor de la clave 'numTasks' --> '55'; SI NO EXISTE DEVUELVE NULL

/* UPDATE */
sessionStorage.setItem('numTasks', 30); // modifica 'numTasks' al valor '30'

/* DELETE */
sessionStorage.removeItem('numTasks'); // elimina del session la clave 'numTasks'

```

Podemos ver estos storages como variable que persisten

### ¿Como soluciono los problemas de elementos que NO sean strings?

Utilizaremos `JSON.stringify()` para pasar a string cualquier variable que queramos meter en el storage `JSON.parse` para recuperar el tipo original de lo que guardamos en el storage.

```js

sessionStorage.setItem('KEY', JSON.stringify(_valor_));
JSON.parse(sessionStorage.getItem('KEY'));

```

NO SE PUEDEN GUARDAR ELEMENTOS DEL DOM EN EL STORAGE.
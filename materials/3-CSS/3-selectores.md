# Selectores

<<<<<<< HEAD
Son elementos del CSS que nos permite indicarle al navegador a que elementos HTML pertenecen las siguientes propiedades CSS.
=======
Son elementos del CSS que nos permite indicarle al navegador a qué elementos HTML pertenecen las siguientes propiedades CSS.
>>>>>>> e0ed1f85201760cae229507ead3092fc01098229

## Estructura

```css

_selectores_ {
<<<<<<< HEAD

    prop1: valor_1;
    prop2: valor_2;
    prop3: valor_3;
=======
    prop_1: valor_1;
    prop_2: valor_2;
>>>>>>> e0ed1f85201760cae229507ead3092fc01098229
    ...
}

/* Indico dentro del bloque las propiedades/valores del CSS que quiero que apliquen a los elementos HTML que cumplan con el selector */

<<<<<<< HEAD

=======
>>>>>>> e0ed1f85201760cae229507ead3092fc01098229
```

## ¿Que tipos de selectores hay?

<<<<<<< HEAD
- Universal: se representa con un `*` y hace match con TODOS los elementos HTML. Se utiliza mucho para los resets pero o se utiliza mucho mas.

    ```css
        /* Todos los elementos HTML de mi pagina web tendran margin 0 */
=======
- **Universal**: se representa con un `*` y hace match con TODOS los elementos HTML. Se utiliza mucho para los resets, pero no se usa mucho más.

    ```css
        /* Todos los elementos HTML de mi página web tendrán margin 0 */
>>>>>>> e0ed1f85201760cae229507ead3092fc01098229
        * {
            margin:0;
        }

    ```

<<<<<<< HEAD
- Etiqueta: para usarlo, ponemos el nombre de la etiqueta HTML a la que queremos hacer match, y las propiedades que pongamos afectarán a todos los elementos HTML de esa etiqueta.

    ```css
        /* Todos los divs de mi web tengan un color de fondo rojo */
=======
- **Etiqueta**: para usarlo, ponemos el nombre de la etiqueta HTML a la que queremos hacer match, y las propiedades que pongamos afectarán a todos los elementos HTML de esa etiqueta.

    ```css
        /* TODOS los divs de mi web tengan un color de fondo rojo */
>>>>>>> e0ed1f85201760cae229507ead3092fc01098229
        div {
            background-color: red;
        }

    ```

- **id**: sirve para darle CSS a un elemento HTML cuyo atributo id tenga el mismo valor que pongamos en el selector. Es un atributo para un UNICO elemento HTML dentro de nuestra web. Para usarlo utilizaremos el caracter `#` seguido del id.

    ```css
<<<<<<< HEAD
        /* El elemento HTML cuyo id sea igual a `hola` tendra el color del text verde */
        #hola {
            color: green;
        }
    ```

- **clases**: sirve para darle propiedades CSS a un conjunto de elementos HTML, sin importar que etiqueta sean. Para ello nos inventaremos un `alias` que referencia a ese grupo. Ese alias se añade en el atributo `class` del elemento HTML que deba permanecer a ese grupo y se referencia en el css con el caracter `.` seguido del alias.

    ```html
        <p class="green">primero</p>
        <p>segundo</p>
        <p class="green">tercero</p>
    ``` 
    
=======
      /* El elemento HTML cuyo id sea igual a `hola` tendrá el color del text verde */
      #hola {
          color: green;
      }
    ```

- **clases**: sirve para darle propiedades CSS a un conjunto de elementos HTML, sin importar que etiqueta sean. Para ello nos inventaremos un `alias` que referencia a ese grupo. Ese alias se añade en el atributo `class` del elemento HTML que deba pertenecer a ese grupo y se referencia en el css con el caracter `.` seguido del alias.

    ```html
      <p class="green">primero</p>
      <p>segundo</p>
      <p class="green">tercero</p>
    ```

>>>>>>> e0ed1f85201760cae229507ead3092fc01098229
    ```css
        /* Solo primero y tercero tienen el color de texto verde */
        .green {
            color: green;
        }
    ```

<<<<<<< HEAD
¿Solo puedo pertenecer a una clase CSS? NO

    ```html
        <p class="green">primero</p>
        <p class="big">segundo</p>
        <p class="green big">tercero</p>
    ``` 
    
=======
    ¿Solo puedo pertenecer a una clase CSS? NO

    ```html
      <p class="green">primero</p>
      <p class="big">segundo</p>
      <p class="green big">tercero</p>
    ```

>>>>>>> e0ed1f85201760cae229507ead3092fc01098229
    ```css
        /* Solo primero y tercero tienen el color de texto verde */
        .green {
            color: green;
        }

<<<<<<< HEAD
        /*  */ 
=======
        /* Esto aplica a segundo y tercero*/
>>>>>>> e0ed1f85201760cae229507ead3092fc01098229
        .big {
            font-size: 20px;
        }
    ```
<<<<<<< HEAD
=======

[Ref](https://web.dev/learn/css/selectors/)
>>>>>>> e0ed1f85201760cae229507ead3092fc01098229

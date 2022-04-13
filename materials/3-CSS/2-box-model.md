# Box Model

<<<<<<< HEAD
El modelo de caja, te indica que todo elemento HTML se representa en un navegador como una caja.

Esa caja se divide en varias areas, que serian (De dentro hacia fuera):

- **Contenido**: Es el texto/imagenes/cualquier elemento visual del elemento HTML. Por ejemplo en un p, el contenido es lo que ocupa el texto. En la devtools se muestra de color **azul**.

- **Padding Box**: Es un area que nos permite añadir espacio interno al elemento HTML. En las devtools se representa con el color **verde**.

- **Boder**: ES un área que representa los "límites" del contenido de la caja. En las devtools se representa con el color **amarillo**.

- **Margin Box**: Es un área que nos permite añadir espacio entre elementos HTML. En las devtools se representa con el color **naranja**.
=======
El modelo de caja, te indica que todo elemento HTML se representa en un navegador como
una caja.

Esa caja se divide en varias areas, que serían (De dentro hacia fuera):

- **Contenido**: Es el texto/imagenes/cualquier elemento visual del elemento HTML. Por ejemplo en un p, el contenido es lo que ocupa el texto. En la devtools se muestra de color **azul**.
- **Padding Box**: Es un área que nos permite añadir espacio interno al elemento HTML. En las devtools se representa con el color **verde**
- **Border Box**: Es un área que representa los "límites" del contenido de la caja. En las devtools se representa con el color **amarillo**
- **Magin Box**: Es un área que nos permite añadir espacio entre elementos HTML. En las devtools se representa con el color **naranja**

![Diagrama](https://web-dev.imgix.net/image/VbAJIREinuYvovrBzzvEyZOpw5w1/ECuEOJEGnudhXW5JEFih.svg)
>>>>>>> e0ed1f85201760cae229507ead3092fc01098229

## ¿Como controlo los tamaños de las diferentes cajas?

- Para el margin box, tengo la propiedad CSS `margin`, que a su vez tiene 4 subpropiedades:
<<<<<<< HEAD
    - margin-top: Representa el margen superior
    - margin-bottom: Representa el margen inferior
    - margin-right: Representa el margen de la derecha
    - margin-left: Representa el margen de la izquierda

    ```css
        div {
            margin-top: 3px;
            margin-bottom: 2px;
            margin-right: 5px;
            margin-left: 4px;
        }

        /* Acortala */
        div {
            margin: 3px 5px 2px 4px;
        }

    ```
- Padding Box: es exactamente igual que el margin, pero poniendo **padding**.
- Border Box: tiene una shortand property que se llama `border`. 
- Para el tamaño total (content-Box o Content-Box+Padding-Box+Border-Box) se utilizan las propiedades `width`y `height`.

## ¿Cuando el tamaño de una caja es Content-Box o la suma de Padding-Box+Content+border)

Esto depende de una propiedad CSS llamada `box-sizing` que acepta principalmente dos valores:
=======
  - margin-top: Representa el margen superior
  - margin-bottom: Representa el margen inferior
  - margin-right: Representa el margen de la derecha
  - margin-left: Representa el margen de la izquierda

    ```css
      div {
          margin-top: 3px;
          margin-bottom: 2px;
          margin-right: 5px;
          margin-left: 4px;
      }

      /* Acortarla, dirección de las agujas del reloj! */
      div{
          margin: 3px 5px 2px 4px;
      }

    ```

- Padding Box: es exactamente igual que el margin, pero poniendo **padding**.
- Border Box tiene una shortand property que se llama `border`.
- Para el tamaño total (Content-Box o Content-Box+Padding-Box+Border-Box) se utilizan las propiedades `width` y `height`.

## ¿Cuando el tamaño de una caja es Content-Box o la suma de Padding-Box+Content+border)?

Esto depende de una propiedad CSS llamada `box-sizing` que acepta principalemente dos valores:
>>>>>>> e0ed1f85201760cae229507ead3092fc01098229
    - content-box
    - border-box (incluye Padding+Content+Border)

## ¿Que son los resets?

<<<<<<< HEAD
Son unas propiedades CSS que nos permiten eliminar el comportamiento que tiene el navegador por defecto.

```css
/* Elimina los margenes, paddings y le añade un tamaño por defecto a TODOS los elementos HTML dentro de su BOX MODEL */

*{
=======
Son unas propiedades CSS que nos permiten eliminar el comportamiento CSS que tiene el navegador por defecto.

```css
/* Elimina los margenes, paddings y le añade un tamaño por defecto a TODOS los elementos HTML dentro de su BOX MODEL */
* {
>>>>>>> e0ed1f85201760cae229507ead3092fc01098229
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
<<<<<<< HEAD
```
=======
```

[Ref](https://web.dev/learn/css/box-model/)
>>>>>>> e0ed1f85201760cae229507ead3092fc01098229

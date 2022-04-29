# BOM (No confundir con BOOM, eso es para las bombas) and DOM

BOM es el modelo de objetos del navegador. El navegador y la pestaña consta de ciertas características (idioma del usuario, tamaño actual, la web cam, etc).

Para poder acceder a ellas desde JavaScript, necesitamos objetos y funciones que nos permitan realizar operaciones con esos elementos.

Esto es lo que sería el BOM.

Una de las cosas que quiero hacer con la página web es gestionar el HTML y el CSS, además de escuchar las interacciones del usuario con la página.

Para realizar esto necesito algo en JS que me permita operar. A esto se le conoce como DOM, document object model y es una parte del BOM.

![BOM ref](https://www.arkaitzgarro.com/javascript/images/cap06/jerarquia.png)

## DOM

Toda la parte del DOM, se gestiona a través del objeto `document`. Este objeto tiene atributos y sobre métodos (funciones que pertenecen a un objeto) para ayudarme a gestionar el HTML, CSS y la interacción del usuario.

Hasta ahora solo hemos utilizado un método de dócument, `document.write`. El problema de este método es que NO podemos gestionar el HTML una vez que ya está pintado.

Vamos a ver otros métodos del document, que nos ayudan a hacer el CRUD en el HTML:

### Metodos para seleccionar elementos existentes en el HTML. (Read)

- `getElementById`: Recibe un string con el id del elemento que quiero recuperar y devuelve un objeto, de tipo HTMLElement, con el elemento HTML encontrado o `null` si no existe.

- `querySelector`: Recibe un string con el selector CSS de lo que quiero buscar y devuelve un objeto, de tipo HTMLElement, con **el primer elemento** del DOM que haga match con el selector. Si no hay elementos que cumplan el selector, devuelve `null`.

- `querySelectorAll`: Recibe un string con el selector CSS de lo que quiero buscar y devuelve un **Pseudo-Array de objetos, de tipo HTMLElement,** con TODOS los elementos del DOM que cumplen el selector. Si no hay nadie que cumpla el selector, `[]`

    *Si Necesitamos las funciones de los arrays, podemos convertir el querySelectorAll a un Array real de la siguiente manera (utilizando la función Array.from())*:

    ```js
       const arrNodes = Array.from(document.querySelectorAll('p'));
    ```

Una vez que tengo el elemento puedo utilizar sus propiedades (atributos HTML) y sus métodos para actual el elemento (**Update**)

- style = modifica el estilo en linea del elemento HTML
- classList = modifica la lista de clases CSS
- textContent = modifico el contenido de texto de un elemento HTML
- removeAttribute = elimina un atributo del elemento DOM
- setAttribute = añade un atributo al elemento DOM

Además de los métodos y atributos genéricos de HTMLElement, luego cada etiqueta tiene como extras sus propios atributos y métodos.

Por ejemplo las imágenes, además de ser HTMLElement, tambien son `HTMLImageElement` y por tanto tienen propiedades especiales:

- src: poner la url de la imagen
- alt: dar un texto alternativo

Para **borrar** un elemento del DOM, usaremos el método `remove()`, que elimina el elemento y **TODOS** sus descendientes del DOM.

### Como creo elementos del DOM dinámicamente (CREATE)

Para crear un elemento realizaré los siguientes pasos:

1. Ejecutar el método `createElement` del document, indicando como primer parámetro el nombre de la etiqueta del elemento que quiero crear. Create element devuelve un objeto de este tipo, pero que todavía no está en el DOM
    ej: const section = document.createElement('section').

2. Buscar el elemento del DOM real donde quiero poner el elemento creado
3. Ejecutar el método `appendChild` del elemento del paso 2, pasando como parámetro el elemento del paso 1.

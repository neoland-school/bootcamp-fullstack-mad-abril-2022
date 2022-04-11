<<<<<<< HEAD
## ¿Como puedo introducri CSS en una pagina web?

Tenemos 3 formas:

1. A traves del atributo `style` de los elementos HTML. todos los elementos visuales tienen este atributo y vamos añadiendo a este atributo las diferentes propiedades CSS 

```HTML
    <!-- Estamos indicando al navegador, que el text del `p` tiene un color rojo -->

    <p style="color:red;">Hola</p>
```



2. A través de una etiqueta `<style>`. Esta etiqueta puede ir tanto en el `head`como en el `body`y lo que contiene son lo que se conoce como **selectores** que veremos más adelante.

```html
    <head>
        <style>
            p{
                color:red;
            }
        </style>
    </head>
    <body>
        <p>Hola</p>
    </body>
```

    Problema: ¿Que ocurre si tengo 10k paginas en un mismo sitio web que utilizan las mismas reglas?

3. A traves de un fichero con extensión `.css`. Este fichero contiene la misma estructura que la etiqueta `style` pero lo externalizamos en un archivo `.css`.  ¿Como sabe la pagina web que tiene asociado un archivo .css? 

    Para enlazar un archivo css a una pagina html, debo utilizar la etiqueta `<link />`.

    ```html
        <head>
            <!-- Enlazamos un archivo llamado styles.css-->
=======
# Introducción a CSS

CSS nos ayuda a estilizar los componentes, es decir, a darle personalidad y poder diferenciarnos de la competencia. Surge en 1996.

Básicamente existen una serie de propiedas que nos permiten modicar un elemento HTML.

¿Qué podemos modificar?

Colores, Tipografías, Tamaños, Formas, Espaciados, Posicionamiento, Animaciones ...

Nuestro objetivo es **poder indicarle al navegador cómo podemos visualizar una etiqueta HTML**

## ¿Como puedo introducir CSS en una página web?

Tenemos 3 formas:

1. A través del atributo `style` de los elementos HTML. Todos los elementos visuales tienen este atributo y vamos añadiendo a este atributo las diferentes propiedades CSS

    ```HTML
        <!-- Estamos indicando al navegador, que el text del `p` tiene un color rojo -->
        <p style="color:red;">Hola</p>
    ```

    Problema: ¿Que pasa si tengo 10000 párrafos iguales?

2. A través de una etiqueta `<style>`. Esta etiqueta puede ir tanto en el `head` como en el `body` y lo que contiene son lo que se conoce como **selectores** que veremos más adelante.

    ```html
        <head>
            <style>
                p {
                    color:red;
                }
            </style>
        </head>
        <body>
            <p>Hola</p>
        </body>

    ```

    Problema: ¿Que ocurre si tengo 10.000 páginas en un mismo sitio web que utilizan las mismas reglas?

3. A través de un fichero con extensión `.css`. Este fichero continen la misma estructura que la etiqueta `style`, pero lo externalizamos en un archivo `.css`. ¿Cómo sabe la página web que tiene asociada un archivo .css?

    Para enlazar un archivo css a una página html, debo utilizar la etiqueta `<link />`.
    Esta etiqueta link, puede llegar a ponerse tanto en el head como en el body

    ```html
        <head>
            <!-- Enlazamos un archivo llamado styles.css -->
>>>>>>> e0ed1f85201760cae229507ead3092fc01098229
            <link rel="stylesheet" href="styles.css">
        </head>
    ```

    ```css
<<<<<<< HEAD
        p{
=======
        p {
>>>>>>> e0ed1f85201760cae229507ead3092fc01098229
            color:red;
        }
    ```

<<<<<<< HEAD
## ¿Que es una propiedad CSS? 

Es un elemento dentro del mundo de la web que permite cambiar una propiedad de visualizacion de un elemento html.

Tiene la siguiente estructura: 

```css
 _nombre-prop_ : _valor_:

```







=======
## ¿Que es una propiedad CSS?

Es un elemento dentro del mundo de la web, que permite cambiar un propiedad de visualización de un elemento HTML.

Tiene la siguiente estructura:

```css
_nombre-prop_ : _valor_;
```

[Ref Sintaxis](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax)
[Lista propiedades](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
[Ref](https://web.dev/learn/css/)
>>>>>>> e0ed1f85201760cae229507ead3092fc01098229

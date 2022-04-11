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
            <link rel="stylesheet" href="styles.css">
        </head>
    ```

    ```css
        p{
            color:red;
        }
    ```

## ¿Que es una propiedad CSS? 

Es un elemento dentro del mundo de la web que permite cambiar una propiedad de visualizacion de un elemento html.

Tiene la siguiente estructura: 

```css
 _nombre-prop_ : _valor_:

```








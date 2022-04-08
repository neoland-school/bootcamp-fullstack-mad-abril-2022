# HTML

HTML son las siglas de Hyper-Text Markup Language.

¿Para que sirve HTML?

Nos ayuda a definir varias cosas:

- Los componentes de Interfaz de Usuario que queremos que se pinten en la Web. Nuestro objetivo es estructurar los componentes visuales que queremos mostrar en la web (botones, enlaces, textos, listas, tablas, formularios, etc).

- Enlazar con la página web las hojas de estilo (CSS) y la lógica de la página (JavaScript). Define que JS y que CSS tiene que ejecutar una página web

- Definir la meta-información de una página web

## ¿Como se escribe el HTML?

1. crear un archivo con extenión HTML. Ejemplo `index.html`. Dentro de este archivo escribimos texto con una estructura muy concreta.
2. La estructra del archivo es a base de `etiquetas`.

## ¿Que es una etiqueta?

Es un elemento con la siguiente estructura:

```xml
<!--APERTURA DE LA ETIQUETA-->
<nombre prop="valor"> <!-- LAS ETIQUETAS PUEDEN TENER ATRIBUTOS o PROPIEDADES con su VALOR -->
<!-- ENTRE ETIQUETAS PUEDE IR o TEXTO o OTRAS ETIQUETAS -->
</nombre> <!-- CIERRE DE UNA ETIQUETA -->

<!-- SI LA ETIQUETA NO TIENE CONTENIDO -->
<nombre prop="valor" />
```

## ¿Que etiquetas hay en HTML?

Hay muchas etiquetas, os pongo unas cuantas:

```html
<!--Etiquetas para textos -->
<p>Esto es le texto del párrafo</p> <!-- Esta es una etiqueta para poner párrafos -->
<h1>Esto es un encabezado</h1> <!-- Esta es una etiqueta para poner Encabezados. Hay 6 niveles -->
<span>Aqui hay text</span> <!-- Se utiliza para estilizar partes de un parrafo -->
<p>Esto es un párrafo con <span style="color:red;">este texto</span> en rojo</p>
<!-- Etiquetas similares al span -->
<b></b> <!-- Negrita -->
<i></i> <!-- Cursiva -->
<strong></strong> <!-- Resaltado Fuerte -->

<!-- Etiquetas de bloque o contenedores -->
<div></div>
<header></header>
<footer></footer>
<main></main>
<article></article>
<aside></aside>
<section></section>
<nav></nav>

<!-- Etiquetas de formulario -->
<form></form> <!-- Contenedor de un formulario -->
<!-- Types: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input -->
<input> <!-- Todas las entradas del formulario son inputs que cambian su type -->
<label></label>
<select></select> + <option></option> <!-- Crear Dropdown -->
<textarea></textarea> <!-- Texto de larga longitud -->


<!-- Otros -->
<button></button>
<a href="" target="_blank">Enlaces</a>
<img src="URL de la imagen" />
<ul>
<ol>
<li>
<table>
<tr>
<td>

<!-- Etiquetas no visuales, son de configuración -->
<html></html> <!-- Etiqueta principal que define que esto es un doc HTML. Solo tiene dos etiquetas hijas -->
<head></head> <!-- Etiqueta donde ponemos meta's link's y scripts's, es decir, configuramos la página, no visual -->
<body></body> <!-- Se escribe todo lo que vamos a ver en la página, todas las que hemos visto antes. Tambien puede haber <link> y <script> -->
<meta>
<link>
<script></script>

```

[Todas las etiquetas HTML](https://developer.mozilla.org/es/docs/Web/HTML/Element)

## ¿Como se estructura un documento HTML?

```html
<!DOCTYPE html> <!-- Siempre al principio del archivo HTML -->
<html>
    <head>
        <!-- Configuración de la página no visual -->
    </head>
    <body>
        <!-- ponemos toda nuestra estructura VISUAL de la página web -->
    </body>
</html>
```

## Emmet Snippets VSCode

[Tutorial](https://www.freecodecamp.org/espanol/news/untitled-11/)

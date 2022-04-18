# Especificidad, Cascada y Herencia

Problema: ¿Que ocurre cuando dos propiedades entran en conflicto?

```html

<p>hola</p>
<p id="demo">adios</p>

```

```css

p {
    color: red !important;
}

p {
    color: green;
}

#demo {
    color: blue;
}

```

## Especificidad

Es una característica de los selectores, en la cual, el navegador proporciona a un selector un valor numérico, en función de unas regla.
A mayor valor numérico, el selector se considera más específico y por tanto tiene prioridad a la hora de un conflicto.

- Selector universal (*): 0 puntos
- Selector de etiqueta y pseudo-elementos: 1 punto
- clases, atributos, pseudo-clases: 10 puntos
- id -> 100 puntos
- estilo en línea (atributo style): 1000 puntos
- important: 10.000 puntos

El navegador para cada propiedad CSS de un elemento HTML calcula la especificidad sumando los puntos. **La propiedad que mas puntos tenga es la que gana y por tanto es la que visualizará el usuario en la web**

Ejemplos:

```css

p {
    color: red; /* 1 */
    width: 100px !important; /* 10001 */
}

p > * + * {
    color: white; /* 1+0+0 */
}

input:hover .demo[type='radio']{
    color: green; /* 1+10+10+10 = 31 */
}

```

```html

<!-- color ==> 1000  -->
<!-- font-size ==> 1000+10.000 = 11.000 --> 
<p style="color:red; font-size:10px !important;">hola</p>

```

[Calculadora de selectores](https://polypane.app/css-specificity-calculator/)

¿Que valor se va a quedar en el siguiente conflicto?

```html

<p class="first" style="color:red;">Primero</p> <!-- color: red; y font-size:14px;  -->
<p class="demo" id="DEMO" style="font-size:25px;">Segundo</p> <!-- color: red; font-size:25px; -->
<p>Tercero</p>

```

```css

p {
    font-size: 14px; /* 1 punto */
    color: green; /* 1punto */
}

#DEMO {
    color: red; /* 100 puntos*/
    font-size: 10px; /* 100 puntos */
}


.first {
    color: yellow; /* 10puntos */
}

```

¿Que valor se pone en el siguiente conflicto?

```html
<p class="other demo">hola</p> <!-- color?? -->
```

```css

.other {
    color: green; /* 10 puntos */
}

.demo {
    color: red; /* 10puntos */
}


```

No podemos utilizar la especificidad, necesitamos algo más ==> La Cascada

[Ref](https://web.dev/learn/css/specificity/)

## Cascada

Cuando tenemos la misma especificidad, el criterio que utliza el navegador para seleccionar la propiedad ganadora es el orden en el que aparece en el HTML+CSS, lo que se denomina cascada.

Ganara **la última aparición de la propiedad**

[Ref](https://web.dev/learn/css/the-cascade/)

## Herencia

Existen ciertas propiedades que los hijos herendan el valor de sus ascendientes, incluso aunque no haya ningún selector que les de valor a ellos mismos.

- font-size
- font-family
- font*
- color
- text-align
- ...

[Listado](https://gist.github.com/dcneiner/1137601)
[Ref](https://web.dev/learn/css/inheritance/)

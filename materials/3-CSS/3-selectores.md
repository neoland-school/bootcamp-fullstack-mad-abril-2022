# Selectores

Son elementos del CSS que nos permite indicarle al navegador a qué elementos HTML pertenecen las siguientes propiedades CSS.

## Estructura

```css
_selectores_ {
  prop_1: valor_1;
  prop_2: valor_2;
  ...;
}

/* Indico dentro del bloque las propiedades/valores del CSS que quiero que apliquen a los elementos HTML que cumplan con el selector */
```

## ¿Que tipos de selectores hay?

- **Universal**: se representa con un `*` y hace match con TODOS los elementos HTML. Se utiliza mucho para los resets, pero no se usa mucho más.

  ```css
  /* Todos los elementos HTML de mi página web tendrán margin 0 */
  * {
    margin: 0;
  }
  ```

- **Etiqueta**: para usarlo, ponemos el nombre de la etiqueta HTML a la que queremos hacer match, y las propiedades que pongamos afectarán a todos los elementos HTML de esa etiqueta.

  ```css
  /* TODOS los divs de mi web tengan un color de fondo rojo */
  div {
    background-color: red;
  }
  ```

- **id**: sirve para darle CSS a un elemento HTML cuyo atributo id tenga el mismo valor que pongamos en el selector. Es un atributo para un UNICO elemento HTML dentro de nuestra web. Para usarlo utilizaremos el caracter `#` seguido del id.

  ```css
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

  ```css
  /* Solo primero y tercero tienen el color de texto verde */
  .green {
    color: green;
  }
  ```

  ¿Solo puedo pertenecer a una clase CSS? NO

  ```html
  <p class="green">primero</p>
  <p class="big">segundo</p>
  <p class="green big">tercero</p>
  ```

  ```css
  /* Solo primero y tercero tienen el color de texto verde */
  .green {
    color: green;
  }

  /* Esto aplica a segundo y tercero*/
  .big {
    font-size: 20px;
  }
  ```

- **atributos**: Nos permite seleccionar elementos en función sus atributos incluso diferenciando valores de esos atributos

  ```html
  <div data-age="18"></div>
  <div data-age="8"></div>
  <div id="HOLA"></div>
  ```

  ```css
  [data-age] {
    /* Esto aplica propiedades al primer div y al segundo */
  }

  [data-age="18"] {
    /* Esto aplica propiedades al primer div solo */
  }

  [data-age*="8"] {
    /* Esto aplica a los dos primeros divs, ya que el * significa contiene */
  }

  [id="hola" i] {
    /* Esto aplica al ultimo div, ya que la `i` signica que ignore mayúsculas y minúsulas */
  }
  ```

- **Agrupación de selectores**: Podemos agrupar varios selectores bajo un mismo bloque y aplicarle a ambos selectores las mismas propiedades CSS. Para ello tengo que poner la lista de selectores separándolas por `,`.

  ```css
  /* La agrupación me ayuda a reutilizar CSS. En este caso
      tanto los elementos con la clase .square como los de la clase .circle
      tendrán el width de 100px. tambien el del id="hola" o todos los p's */
  .square,
  .circle,
  #hola,
  p {
    width: 100px;
  }

  .square {
    background-color: red;
  }

  .circle {
    background-color: green;
  }
  ```

## pseudoclases y pseudoelementos

[Ref pseudo-elementos](https://web.dev/learn/css/pseudo-elements/)
[Ref pseudo-clases](https://web.dev/learn/css/pseudo-classes/)

Los **pseudo-elementos** permiten estilizar partes visuales del navegador que pertenecen a un elemento HTML, pero no tienen etiqueta propia. Ejemplos:

- marker de una lista (::marker)
- placeholder de un input (::placeholder)
- la selección de texto de un usuario (::selection)
- la primera letra o línea de un parrafo (::first-letter o ::first-line)
- subcontenido antes y despues de cualquier etiqueta HTML (menos img, video e inputs [menos checkbox]) (::before o ::after)
- backdrop de un video o un dialog (::backdrop)

```css

input::placeholder {
    color: red; /* afecta a todos los placeholders de los inputs de la página */
}

.demo::placeholder {
    color: blue; /* solo afecta a los inputs que tengan la clase css demo */
}

p::placeholder{
    color: green; /* Esto no afectará a ningún elemento, ya que los p's no tiene  placeholder */
}

```

Las **pseudo-clases** nos ayudan a estilizar los diferentes ESTADOS de los elementos HTML. algunas importantes:

- hover del usuario (:hover)
- checkbox marcado (:checked)
- input válido o inválido (:valid o :invalid o :in-range)
- deshabilitados (:disabled o :enabled)
- elección de hijos concretos (:first-child o :last-child o :nth-child(), ...)
- negación de una condicion (:not())
- histórico de enlaces (:link o :visited)
- muchos más...

## Selectores complejos y combinados

Todos estos selectores que hemos visto se pueden combinar para formas selectores más completos.

Responderemos a las siguientes preguntas:

¿Como selecciono un elemento que tiene dos clases css?
¿Como selecciono solo los enlaces que tengan cierta clase css?

¿Como selecciono algún hijo directo de un elemento que tenga cierta clase?
¿Como puedo seleccionar cualquier descendiente (hijos o nietos o bisnietos, ....)

¿Como puedo seleccionar hermanos?

### Combinaciones en 1 mismo elemento

Respondemos a preguntas de este estilo

¿Como selecciono un elemento que tiene dos clases css?
¿Como selecciono solo los enlaces que tengan cierta clase css?

Para ello debemos juntar los selectores que queramos (que pertenezcan a 1 mismo elemento HTML) **SIN ESPACIOS**

```html

<a class="demo other" href=""></a>
<a class="demo" href=""></a>
<a class="other" href=""></a>
<div class="demo other"></div>

```

```css
/*¿Como selecciono un elemento que tiene dos clases css?*/
.demo.other{
    /* Hace Match con Cualquier elemento HTML que tenga las dos clases.
       En el ejemplo es el primer `a` y el `div` */
}

/*¿Como selecciono solo los enlaces que tengan cierta clase css?*/
a.demo.other{
    /* Hace match con los elementos de tipo `a` que tengan esas dos clases.
        En el ejemplo es el primer `a`. OJO que primero va el selector de tipo */
}

```

### Elementos combinadores

¿Como selecciono algún hijo directo de un elemento que tenga cierta clase?

Para seleccionar hijos directos a un determinado elemento HTML usaremos el caracter `>`

```html
<div class="hello">
    <p>hola</p>
    <div>
        <p>Nieto (Descendiente)</p>
    </div>
    <p>Other hijo</p>
</div>
<div>
    <p>adios</p>
</div>
```

```css
/* Quiero seleccionar cualquier `p` hijo directo de un elemnto con la clase hello */
.hello > p {
    /* Esto afectaría al p con texto hola y al p con texto Other hijo*/
}
```

¿Como puedo seleccionar cualquier descendiente (hijos o nietos o bisnietos, ....)?

Para ello NO usaría el  `>` sino que separaría los selectores por un espacio

En el ejemplo anterior

```css
/* cualquier p descendiente de un elemento con la clase hola*/
.hello p{
    /* Esto afectaría a los siguientes p (hola,Other hijo,Nieto (Descendiente)) */
}

```

¿Como puedo seleccionar hermanos?

Tenemos dos formas de seleccionar hermanos en función de lo que queramos:

- Si solo queremos el siguiente, lo que se conoce como adjacente, utilizamos el caracter `+`
- Si queremos TODOS los hermanos que haya a continuación utilizamos `~`

```html
<section></section>
<a class="demo"></a>
<p class="demo">primero</p>
<section></section>
<p class="demo">segundo</p>
<section class="demo"></section>
<p>tercero</p>
<p class="demo">cuarto</p>

```

```css
/*Elemento hermano (adjacente) de section que además tenga clase demo*/
section + .demo {
    /* Selecciona el primar a y el segundo p hacen match  */
}

/*TODOS los hermanos de section que tengan la clase demo*/
section ~ .demo {
    /* Primer a, primer p, segundo p y ultimo section y cuarto p hacen match  */
}

```

[Ref](https://web.dev/learn/css/selectors/)

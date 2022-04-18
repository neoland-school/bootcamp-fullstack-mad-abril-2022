# Variables y tipos de datos

## Variables

Es un espacio (En al memoria RAM del ordenador) donde puedo almacenar información y luego acceder y operar con ella en el resto del programa.

Como a nosotr@s nos costaría mucho saber qué dirección de memoria tenemos libre para almacenar el valor utilizamos un `alias` que el ordenador sabe traducir.

La variable es un `alias` a la dirección de memoria donde queremos almacenar/operar la información.

![Img memoria RAM](https://www.monografias.com/trabajos104/datos-y-variables-fundamentos-programacion/img8.png)

### Formas de crear una variable

Tenemos 2 formas de crear variables, una es utilizando `let` y otra es utilizando `const`

```js
let _nombreCamelCase_ = "valor de la información"; // definir e inicializar en la misma instrucción

const _NOMBRE_SNAKE_CASE_ = "valor de la información";

let noInit; // los let permiten declarar e inicializar por separado
noInit = "Ahora si inicializo";
```

¿Que diferencia hay entre `let` y `const`?

Let define una variable que **puede cambiar su valor** a lo largo del programa.

Const **NO puede cambiar su valor**, es constante, una vez que lo has definido e inicializado no puede cambiar.

### ¿Qué puedo hacer con una variable?

1. Definirla. Se trata de declarar la variable e indicarle al lenguaje de programación que existe.
2. Inicializarla. Se trata de darle un valor inicial a esa variable con el símbolo `=`.
   **Esta fase con los `const` se tiene que hacer en la misma instrucción.**
3. Reasignar. Cambiarle el valor (solo en let). podemos hacerlo con el nombre de la variable, un igual y el nuevo valor. (NO PONEMOS LET DE NUEVO)

   ```js
   let a = "hola"; // aqui `a` vale 'hola'
   a = "adios"; // a partir de aqui `a` vale 'adios'
   ```

4. Acceder a su información. Simplemente poniendo el nombre de la variable accedemos a la información

   ```js
   let output = "<p>Esto va paa el usuario</p>";

   // en algún momento quiero por ejemplo pintarlo utiliando document.write
   document.write(output);
   ```

## Guardar el valor de un prompt

```js
let input = prompt("Introduzca una frase");
// a partir de aqui la variable input contiene lo que el usuario introdujo
```

## Tipos de datos

Nos ayudan a identificar la `forma` que tiene una variable, sobre todo la información que contine.

Hay dos grupos de tipos de datos:

- `primitivos`: Son los que vienen con el lenguaje de programación
  - number: para representar número
  - string: para representar cadenas de caracteres.
  - boolean: para representar estados de VERDADERO o FALSE
  - ...

- `no primitivos`: Son los datos que estructuramos nosotros según nuestra aplicación y necesidades. Representar una Persona, un Coche, etc...

En la mayoría de los lenguajes de programación hay que especificar a la hora de `definir` una variable, el tipo de datos que es. A estos lenguajes se les llama `fuertemente tipados`.

En JavaScript, no hace falta poner el tipo de datos, incluso se puede modidificar el tipo de dato en otras instrucciones (COSA QUE OS PROHIBO DESDE YA!!!). A este tipo de lenguajes se les conoce como `débilmente tipados`

Por tanto JS es un lenguaje interpretado secuencial y débilmente tipado.

```js

let str = 'Hola que tal'; // str es de tipo de datos `string`
let strNum = '123'; // El tipo de datos de esta variable es un string

let num = 123; // num tiene el tipo de datos `number` en base decimal
let numOctal = 0o123; // Número en base octal. es de tipo `number` y sería el 83 en decimal
let numHex = 0x123FA; // Nñumero en base hexadecimal. Es de tipo `number` y sería 74746
let infinite = Infinity; // número que representa el infinito

let yes = true; // tipo boolean que representa verdadero
let no = false; // tipo boolean que representa falso

let noValue; // Cuando el valor no está definido, la variable tiene un tipo de datos `undefined`

let nullValue = null; // es un tipo de datos que representa la dirección 0x0 de la memoria RAM

typeof _nombreVar_; // me devuelve un string con el típo de datos de la variable que hemos puesto

```

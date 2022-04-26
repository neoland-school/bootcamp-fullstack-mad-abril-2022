# Expresiones y operadores

Nos ayudan a realizar operaciones con los tipos de datos produciendo una salida.

La estructura general de un operador es:

```js

_expresion_ _operador_ _expresion_;

```

Una expresion puede ser:

- Una variable o un valor
- Otro operador

## Operadores aritméticos

Son operadores que nos ayudar a realizar operaciones matemáticas básicas.

```js

3 + 4; // Operador de suma, el resultado de esta expresión es 7
3 - 4; // Operador de resta, el resultado de esta expresión es -1
3 * 4; // Operador de multiplicación, el resultado de esta expresión es 12
3 / 3; // Operador de división, el resultado de esta expresión es 1
3 ** 3; // Operador de potencia, el resultado es 27 (3*3*3)
3 % 4; // Operador de módulo, Este operador devuelve el RESTO de la división entera. Esta operación devolvería 3

let num = 10;

num++; // suma 1 a la variable num. Num valdrá a partir de aqui 11; En una expresión primero se realiza la expresión y luego suma
++num; // suma 1 a la variable num. Si lo metemos en otra expresión primero suma y luego opera la otra expresion
num--; // resta uno igual que la de suma
--num; // resta uno igual que la de suma

let a = 5;
let b = 2;

a%b; // Devuelve 1, que es el resto de la division

```

[Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)

## Operadores de asignación

Nos ayudan a realizar una operación y una asignación de valor a una variable a la vez

```js
let a = 4;
let b = 2;
let result = 0;

// 4**2
result = a**b; // result tendrá como valor 16 (4*4)

result += 4; // es lo mismo que hacer result = result + 4; suma 4 a la variable result
// para el resto de operaciones es igual
result -= 4;
result *= 4;
result /= 4;
result **=4;
result %=4;

// logicos (más adelante)
result &&=false;
result ||=true;

// nullish (más adelante)
result ??= 5;
```

[Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators)

## Operadores de comparación

Nos ayudan a comparar dos valores o expresiones, es decir, nos indica si algo es mayor o menor o igual o distinto, etc.

¿Qué resultado va a dar?

Solo tenemos dos posibles valor Si cumple la comparación o NO cumple la comparación, por ello, para representar el resultado de la operación de comparación utilizaremos el tipo de datos `boolean`.

```js

3 === 3; // esto devuelve true
const a = 4;
const b = 5;
a === b; // esto devuelve false 4 NO es igual a 5
a === 6; // false

a>b; // false. Mayor estricto
a<b; // true. Menor estricto

a>=4; // true. Mayor o Igual
a<=4; // true. Menor o igual

a!==5; // true. 4 es distinto a 5

```

[Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators)

## Operadores Lógicos

Operación AND

Solo cuando las dos entradas son verdaderas la operación devuelve `true`

![Tabla AND](https://dyclassroom.com/image/topic/logic-gate/and-table.png)

```js
let a = true;
let b = false;

a && b; // Esta operación devuelve false

let c = 2;
let d = 4;

c <= d && c > 1; // true && true ==> true

```

Operador OR

Solo es false cuando las dos entradas son falsas

![Tabla OR](https://dyclassroom.com/image/topic/logic-gate/or-table.png)

```js

false || false; // el resultado es false

let c = 2;
let d = 4;

c <= d || c > 1; // true || true ==> true

```

Operacion NOT

Es la negación de un booleano. Si la entrada es true, devuelve false y si es false devuelve true.

![Tabla NOT](https://www.dyclassroom.com/image/topic/logic-gate/not-table.png)

```js

let a = true;

!a; // devolver false;

let c = 2;
let d = 4;

!c <= d && c < 1; // !(true && false) ==> !(false) ==> true

```

[Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators)

## Operadores de string

Son los operadores que nos ayudan a manejar cadenas de caracteres.

Solo hay 1.

```js
'hola' + ' ' + 'adios'; // el más en strings sirve para juntar las cadenas de caracteres, es decir, concatenar. El resultado de este ejemplo es 'hola adios';

let a = 'bootcamp';

a+='fs'; // a tendrá 'bootcampfs'; equivalente a la siguiente expresion a=a+'fs';

'hola' + 3; // ?? ==> 'hola3';
3 + '3'; // '33'. Cuidado NO realizar operaciones con tipos de datos mezclados

```

## Operador ternario

Nos ayuda a establecer el valor de una variable en función de una condición (expresion booleana)

> _condicion_ ? _expresion_si_true_ : _expresion_si_false_;

```js
const a=4;
//  Si a es mayor o igual a 3, entonces result tendrá a^3. Sino result tendrá a div 3
let result = a>3 ? 1 : 0; // result valdría 1
let result = a>=3 ? a**3 : a/3; // result será igual a 27

```

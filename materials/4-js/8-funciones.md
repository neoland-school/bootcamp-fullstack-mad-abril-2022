# Funciones

Es un elemento de la programación o técnica, que nos ayuda a reutilizar una acción u operación de nuestro código.

Podemos verlo como una plantilla en el código, son un bloque de instrucciones a los que le doy un alias (nombre) y que cada vez que quiera ejecutar esas instrucciones simplemente llamo al alias.

## ¿Como se crean funciones?

Hay varios tipos de funciones

```js

// creación
function _alias_(_param_1_, _param_2_, ...){
    /* BLOQUE DE CODIGO QUE EJECUTA LA FUNCION */
}

const _alias_ = function(_param_1_, _param_2_){
    /* BLOQUE DE CODIGO QUE EJECUTA LA FUNCION */
}

// funciones anónimas ==> que no la puedo llamar en ningún otro lado. 
// Es muy util para funciones que son parámetros de entrada de otra funcion
function(_param_1_, _param_2_){
    /* BLOQUE DE CODIGO QUE EJECUTA LA FUNCION */
}


// IIFE ==> funciones autollamadas
(function (_param_1_, _param_2_) {
  /* BLOQUE DE CODIGO QUE EJECUTA LA FUNCION */
})(_valor_1, _valor_2);


/* ARROW FUNCTION */
// son equivalentes salvo por un concepto que veremos en el futuro (this)
const _alias_ = (_param_1_, _param_2_) => {
    /* BLOQUE DE CODIGO QUE EJECUTA LA FUNCION */
}

(_param_1_, _param_2_) => {
    /* BLOQUE DE CODIGO QUE EJECUTA LA FUNCION */
}

// Si el numero de parámetros de entrada es === 1 entonces se puede eliminar los paréntesis
_param_1_ => {
    /* BLOQUE DE CODIGO QUE EJECUTA LA FUNCION */
}

// Si el bloque de código solo tiene instrucción entonces podemos eliminar las llaves
_param_1_ => _instruccion_1;
// o sin parámetros
() => _instruccion_1;
```

Los parámetros de entrada pueden ser de cualquier tipo de datos que hemos visto o de los que veremos en el futuro

Ejemplos

```js

function suma(a,b) { // defino las variables que quiero sumar, que las tiene que meter quien USE la función
    return a+b; // esta función estaría devolvien la suma de lo que val a + lo que valga b
}

function greeting(name){
    return `Hello ${name}`;
}

greeting('Alex'); // devuelve 'Hello Alex'
greeting('Bootcamp'); // devuelve 'Hello Bootcamp'
const r = greeting('Luis'); // 

const greeting = name => `Hello ${name}`; // sin llaves la instrucción que pongamos es la que devuelve la función
greeting('Marco'); // devuelve 'Hello Marco'

```

## ¿Como se llama a la función?

Tenemos que utilizar su alias, abriendo paréntesis y separando por , los VALORES de los parámetros de entrada

```js

const n = parseInt('1231231');

isNaN(127321); // boolean

suma(4,7); // number --> 11
suma(4,10); // number --> 14
suma(4+5,9); // number --> 18

const pepito = 10%5; // ¿Cuanto vale a? --> 0
suma(8,pepito); // number --> 8

suma(8/0,33); // number --> Infinity

const msg = 'hello';

suma(msg*3, 6); // number --> NaN
suma(msg*3, msg+6); // string --> 'NaNhello6';

```

# Métodos de arrays  &   forEach, map, reduce, sort

Podemos hacer operaciones con listas como por ejemplo buscar un elemento en un array.

[Ref](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

```js
const arr = [5, 2, 33, 1, 2, 3];

/**
 * Entrada: 1 array de números y un numéro a encontrar dentro el array
 * Salida: booleano dicieno true si lo ha encontrado y false si no lo ha hecho
 */
function some(arr, n) {
  let found = false; // inicialmente supongo que NO he encontrado el elemento
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      found = true;
    } // siempre es true si ha sido true en algún momento
    /*
        * Opcion con ternario: found = arr[i] === n ? true : found;
        * Optimización con expresiones booleanas y de asignación. Nos ahorramos la expresion condicional
            found ||= arr[i] === n;
        */
  }
  return found;
}

some(arr, 5); // true, ya que 5 existe en el arr
some(arr, 9); // false, ya que 9 existe en el arr

/**
 * Entrada: 1 Array de números
 * Salida: 1 array con solo los números pares
 */
function filterEven(arr) {
  const arrFiltered = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      // si encuentro el número par
      arrFiltered[arrFiltered.length] = arr[i];
    }
  }
  return arrFiltered;
}

// arr = [5,2,33,1,2,3]
filterEven(arr); // devuelve [2,2]
```

Existen unas funciones predefinidas que te ayudan a trabajar con listas de datos:

Estas modifican el array sobre el que estoy ejecutando la operación

- **push(elemento, ...)**: Añade al final del array el elemento que pasamos como parámetro de entrada. Devuelve la nueva longitud del array
- **pop()**: Elimina el último elemento del array, devolviendo ese elemento
- **shift()**: Elimina el primer elemento del array, devolviendo ese elemento
- **unshift(elemento, ...)**: añade el elemento al principio del array. Devuelve la nueva longitud del array

Otras:

- concat: junta dos arrays generando un nuevo array (no modifica el array original), con la union de los dos arrays
- join: Permite generar un string con la union de los elementos de una array. Además permite especificar el caracter separador de esa unión.

## Functiones con predicados

Todas las funciones que vamos a ver ahora tienen como característica que su parámetro de entrada es de tipo función y representa un predicado.

¿Que estructura general tienen los predicados?

Es una función que recibe 3 parámetros de entrada:

- **value**: Representa el elemento actual que esta recorriendo el array, nuestro arr[i] en el for
- **index**: Representa la posición del array que se está recorriendo, nuestra i en el for
- **arr**: Representa todo el array que estamos recorriendo

El objetivo de estas funciones es eliminar los bucles que haríamos nosotros a mano. Esos bucles lo harán internamente las funciones de los arrays por nosotros.

Estas funciones lo que hacen es recorrer el array posicion por posicion, ejecutando una operacion.

- function `some`: devuelve true si hay algún elemento que cumple el predicado

```js
const arr = ["hola", "adios"];
const isBye = (v) => v === "adios";
arr.some(isBye); // devuelve true

arr.some((v) => v === "adios"); // devuelve true. Porque hay un elemento que es igual a 'adios'
arr.some((v) => v.length > 5); // devuelve false, porque no hay ningun elemento en la lista que tiene una longitud mayor estricto que 5
arr.some((v) => v.length % 2 === 0); // devuelve true, porque la longitud de 'hola' es par
```

- function `every`: todos los elementos del array deben cumplir la condicion. sino devuelve false

```js
const arr = [4, 6, 8, 10];

arr.every((v) => v > 2); // true, ya que todos los elementos del array son mayores que 2
arr.every((v) => v < 8); // false, ya que 8 y 10 no cumplen la condicion

arr.every((v) => v % 2 === 0); // true, ya que todos los elementos son pares

//¿Todos los elementos de mi array que estén en una posición par son mayores o iguales que 4?
arr.every((v, i) => i % 2 === 1 || (i % 2 === 0 && v >= 4)); // true. en las posiciones pares todos son mayores o iguales que 4. Tenemos que devolver true tambien en la posiciones impares
// optimización utilizando Algebra de Boole = arr.every((v,i) => i%2===1 || v>=4);

/**
 * Como lo haríamos sin la funcion. Por ejemplo: arr.every(v => v<8);
 */
let allLessEight = true;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 8) {
    allLessEight = false;
  }
  // optimización allLessEight &&= arr[i]<8
}
```
///////////
Mañana veremos forEach, map, reduce, sort
//////////


- El `forEach` es la sustitución de un for. Basicamente recorre cada elemento del for y nos lo da en una función con su v,i,arr para que podamos modificarlo.

Devuelve siempre **undefined**

```js
[1, 2, 3].forEach((v, i, arr) => {
  console.log(v); // pintamos por consola cada elemento
});

// quiero pintar la potencia de dos de cada elemento de un array
const arr = [1, 4, 2, 7];
/* version for
for(let i =0; i<arr.length; i++){
    console.log(arr[i]**2);
}
*/
arr.forEach((v) => console.log(v ** 2)); // no devuelve nada
```

- El `map` es como un forEach pero genera un nuevo array con lo que devolvamos en la función.
 Este array no ES el original pero si tiene la MISMA length que el original

El caso de uso es la transformación de todos los elementos de una array en un nuevo array

```js
/** DADO UN ARRAY DE NUMEROS GENERAR UN NUEVO ARRAY CON LA POTENCIA DE 2 DE CADA ELEMENTO */
const arr = [1, 4, 2, 7];
const newArr = arr.map((v) => v ** 2); // newArray = [1,16,4,49]; arr se queda como estaba
```

- `sort` ordena los elementos de un array utilizando una función de comparación.

  Esta función recibe dos elementos del array que llamaremos `a` y `b`. El objetivo es:

  - Si queremos que el elemento `a` esté despues que `b` devolveremos un número positivo.
  - Si queremos que el elemento `a` esté antes que `b` devolveremos un número negativo
  - Si queremos que `a` mantenga el orden original con `b` devolvemos un 0

MODIFICA EL ARRAY ORIGINAL

```js

// si quisiesemos ordenar un array de números ascendente (de menor a mayor), nuestra funcion de comparación tendrá que ser la siguiente:

[1,20,2,10,4,3].sort((a,b) => {
    if(a>b) return 1; // queremos que a esté desùes que b, ya que es mayor
    if(a<b) return -1; // queremos que a esté antes que b, ya que es menor
    return 0; // a===b entonces que mantenga el orden original
});

// esto realmente se puede optimizar. 
[1,20,2,10,4,3].sort((a,b) => a-b);


// si quisiesemos ordenar un array de números descendente (de mayor a menor), nuestra funcion de comparación tendrá que ser la siguiente:

[1,20,2,10,4,3].sort((a,b) => {
    if(a>b) return -1; // queremos que a esté antes que b, ya que es mayor
    if(a<b) return 1; // queremos que a esté despues que b, ya que es menor
    return 0; // a===b entonces que mantenga el orden original
});

// esto realmente se puede optimizar. 
[1,20,2,10,4,3].sort((a,b) => b-a);

// ejemplo de boolean. Priemro quiero los true y luego los false
const arr = [true,false, false, true, true, false, true];
arr.sort((a,b) => {
    if(a && !b) return -1;
    if((a && b) || (!a && !b)) return 0;
    return 1;
});

// optimizando
arr.sort((a,b) => b-a);


// ejemplo con strings ordentando por longitud de string
const arr = ['hola', 'adios', 'bootcamp', 'demo']
arr.sort((a,b) => {
    if(a.length > b.length) return 1;
    if(a.length < b.length) return -1;
    return 0
});

// optimizando
arr.sort((a,b) => a.length - b.length);


// podemos combinar varios criterios de ordenación. Por ejemplo si los strings tienen igual longitud, ordenarlos alfabéticamente
['hola', 'adios', 'bootcamp', 'demo'].sort((a,b) => {
    // comparación de longitudes (1er criterio)
    if(a.length-b.length !== 0) return a.length-b.length;
    // si las longitudes son iguales utilizo el segundo criterio
    // que es orden alfabético
    if(a<b) return -1;
    if(a>b) return 1;
    return 0;
});
```
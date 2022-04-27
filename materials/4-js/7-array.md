# Array

Los arrays nos ayudan a representar una lista de datos o de información.

Vamos a aprender las operaciones básicas de los arrays:

- Crear un array. (Vacia o con elementos) (Create)
- Obtener un elemento que se encuentre en una `posición` de la lista (Read)
- Añadir un nuevo elemento a la lista (Create)
- Modificar un elemento ya existente en al lista (Update)
- Borrar un elemento ya existente (Delete)

En la informática este conjunto de operaciones se llama `CRUD`

## Creación array

```js

const helloList = []; // esto representa un array vacio

const helloList = [5,9,1,20,3]; // esto es una lista de números con 5 elementos
const helloList = [true, false, true]; // esto es una lista de 3 booleanos
const helloList = ['hola', 'adios']; // esto es una lista de 2 strings

//puedo consultar la longitud ACTUAL de la lista
helloList.length; // devuelve un number con el número de elementos de la lista

const helloList = Array(100).fill(0); // esto crea una lista de números de 100 elementos con valor 0

// más avanzado

const helloComplexList = [[1,4,3],[8,2,9]]; // se pueden meter listas como elementos de listas

/** LAS LISTAS TIENEN QUE SER DEL MISMO TIPO DE DATOS **/
```

## Acceso

```js
//-----------pos:0,1,2
const numList = [5,2,8];

numList[1]; // Esto devuelve el número 2, ya que accedemos a la posición 1 de la lista

//-----------pos:   0     1    2      3          4          5
const strList = ['hola', 'a', 'b', 'Adios', 'boot, camp', 'nada'];

strList[3]; // Esto devuelve: 'Adios'; Estoy accediendo al 4º elemento de la lista

// ¿Como consulto el valor de la posición final de la lista?
// ej: en strList => ¿Cual es la posición final? --> 5. length: 6
strList[strList.length-1]; // devuelve el elemento de la última posición
```

## Añadir/modifico un nuevo elemento en una posición conocida

```js
//--------- pos:0 1 2
const exList = [7,1,9];

exList[3] = 44; // exList = [7,1,9,44]

exList[6] = 33; // exList = [7,1,9,44,undefined,undefined, 33]
exList.length; // será 7 porque se cuentan los huecos entre medias que no tienen valor

// ¿Como puedo añadir un elemento al final de la lista?
// exList = [7,1,9,44,undefined,undefined, 33] 
// --> ulima posición: 6, posición que quiero: 7. longitud actual: 7
exList[exList.length] = 22; // añade 22 al final de la lista

// ¿Que pasa si creo en una posición  que ya existe?
exList[6] = 1; // el array sería [7,1,9,44,undefined,undefined, 1, 22]

// tambien podemos operar a la vez que actualizamos
exList[3] = exList[3]*10 + 1; // el array sería [7,1,9,44,undefined,undefined, 1, 22]
```

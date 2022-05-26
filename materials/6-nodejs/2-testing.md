# Testing

Poner una porcion de código o una aplicación a prueba. Comprobar si nuestra aplicación realiza lo que dice que hace., es decir, cumple con lo que se espera de ella.

- **Testing Manual**: Una persona la encargada de ejecutar la prueba.
- **Testing automático**: Un código que prueba otro código

Nosotros vamos a aprender el Testing automático.

Dentro del testing automático hay muchisimos tipos de test:

- **Testing unitario**: prueba los elementos más básicos de una aplicación, es decir, las funciones.
- **Testing Componentes**: Esta prueba es para los componentes UI, por ejemplo un componente de react. Es como un test unitario para componentes con DOM.
- **Testing integrado**: prueba partes completas de nuestra aplicación, integradas. En el caso de front no incluiría el backend. No entra la integración con otros sistemas. Por ejemplo podemos probar una página con varios componentes
- **Testing e2e**: prueba de la aplicación con todos los sistemas reales, es decir, integrados. Aqui probaríamos un flujo completo de la aplicación que incluye operaciones con la BBDD real.
- **Testing Seguridad**: Nos permite probar cuanto de seguro es nuestra aplicación
- **Testing de performance**: Nos permite probar lo rápido o lento que va nuestra aplicación
- **Testing de escalado**: Nos permite probar como la aplicación reacciona cuando hay muchos usuarios en ella.
- **Testing visual**: Nos permite validar la diferencia de pixeles entre una version del código y otra
- ...

## ¿Para qué sirve el testing y porqué es importante?

- Ahorra mucho tiempo
- Ahorra mucho dinero
- Te hace mejor desarrollador/a
- Te permite anticipar los bugs y sobre todo lo que se conocen como hidden bugs
- Te permite probar casos extremos facilmente
- Hace que una aplicación sea más escalable (que crezca mejor)
- Te permite dormir mejor

## Testing unitario automático

Consiste en probar la unidad más indivisible de una aplicación. NO es la instrucción de código, sino la `función`.

El testing unitario consiste en ejecutar la función dando valor a los parámetros de entrada y esperar que para esos parámetros se devuelve cierta salida concreta.

Para cada archivo de código crearemos un archivo asociado llamado `_nombre_.spec.js` siendo _nombre_ el nombre del archivo original.

Si quiero probar un archivo que se llama `hello.js` crearé otro archivo que se llama `hello.spec.js`.

### ¿Como se estructura el archivo de test?

El archivo estará dividido en casos de prueba (que tendremos que definir como desarrolladores)

Un caso de prueba se especifica con una función llamada `it` que acepta dos parámetros:

1. string, describe el caso de prueba
2. function, el código del caso de prueba. Este código tendrá la preparación de los valores de la función que hay que probar, la llamada a la función y los `expect` para validar el resultado

** En algunas librerías tambien se puede llamara `test` a la función.

Es posible también organizar varios `it` en un mismo grupo. Para ello envuelvo los `it` en una función `describe`.
Acepta dos parámetros

1. string, describe el grupo de casos de prueba
2. función, donde voy a pegar todos los it

Además existen 4 funciones especiales:

- beforeAll: Es una función que se ejecuta ANTES de todos los casos de prueba. Solo se ejecuta una vez
- beforeEach: Es una función que se ejecuta ANTES de CADA caso de prueba. Se ejecuta tantas veces como `it` tenga
- afterEach: igual que beforeEach pero DESPUES
- afterAll: igual que beforeAll pero DESPUES

## ¿Que librería ne ayuda a hacer testing?

Necesitamos dos tipos de librerías:

- La que nos ayuda a construir los test: `Test Framework`
- La que nos ayuda a ejecutar los test: `Test Runner`

Angular utiliza `Jasmine` como test framework y `Karma` como test Runner
Otro tándem conocido serían `Chai` y `Mocha`

Nosotros en clase vamos a utilizar UNA librería que tiene todo llamada `Jest`

[Documentacion](https://jestjs.io/es-ES/)
[Instalación](https://jestjs.io/es-ES/docs/getting-started)

## User Jest con ESM

Por ahora Jest solo funciona con CJS. Para poder tener compatibilidad con ESM hay que hacer los siguientes pasos.

1. Instalar una librería de variables de entorno:
    > npm i -D cross-env

2. Cambiar el script de test en el package.json a lo siguiente:

    ```json
        "scripts": {
            "test": "cross-env NODE_OPTIONS=--experimental-vm-modules jest --watch --coverage"
        }

    ```

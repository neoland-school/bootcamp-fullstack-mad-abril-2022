# IO

IO significa Input/Output, es decir, entrada/salida.

El SO tiene 3 ficheros que son:
    - Entrada Estandar (**stdin**): Donde se escribe el input del usuario en el ordenador
    - Salida Estandar (**stdout**): Donde el SO escribe la salida de una operación
    - Salida de Error (**stderr**): Donde el SO escribe los errores de un programa

Todas las aplicaciones suelen utilizar estos 3 ficheros, que sa vienen por defecto en el SO.

Ya hemos utilizado la Salida estandar y la Salida de error:

- console.log() --> stdout
- console.error() --> stderr
- throw no capturado --> stderr
- process.exit(1) --> stderr

Para poder acceder a esos archivos tenemos 3 objetos dentro del modulo `process`:

- process.stdout: La salida estandar. Este objeto lo utiliza por dentro el console.log
- process.stdin: La entrada estandar
- process.stderr: La salida de error. Este objeto lo utiliza por dentro el console.error

## ¿En que situación utilizamos la entrada estandar?

La entrada estandar nos da la posibilidad de preguntar al usuario y capturar su respuesta mientras el programa está en ejecución.

¿Como leo la entrada estandar?

Existen varias formas:

1. Utilizando directamente el objeto `process.stdin` [Doc](https://nodejs.org/dist/latest-v16.x/docs/api/process.html#processstdin)
2. (La que vamos a usar) utilizar un módulo de nodejs llamado `readline` [Doc](https://nodejs.org/dist/latest-v16.x/docs/api/readline.html)
3. Utilizando otras librerías

[Tutorial Readline](https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs)

## ¿Como se hace testing de stdin?



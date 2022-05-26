# Introducción NodeJS

![SO y Apps](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWzbPTs6LUEmCDwPRdQBJGwoVMjZ7Us_oBkke-zM3AkUnrKuM7eDNGbXxI7HYzF3BRQwA&usqp=CAU).

Nosotros desarrollaremos aplicaciones NodeJS para el sistema operativo

## Proceso

Un proceso es una aplicación en ejecución. Cualquier cosa que se ejecute en un SO tiene que tener un proceso asociado.

Cuando una aplicación se lanza, el SO le da un identificador de proceso (PID)

Este PID puede crear procesos hijos (Child Process).

El que creo el proceso se le llama Padre y su identificador se le conoce como PPID.

NodeJS tiene un módulo core llamado `Process` que nos permite gestionar y operar el proceso del SO.

[Docu](https://nodejs.org/dist/latest-v16.x/docs/api/process.html).

## ¿Como se ejecuta un programa en nodejs?

Necesidades:

1. archivo con extensión `.js`
2. terminal y ejecutar el comando:
    > node _nombre_archivo_.js

Podemos pasar parámetros de entrada al programa separando sus valores por espacios.

> node _nombre_archivo_.js _param1_ _param2_ ...

Podemos recibirlos en nuestro programa nodeJS utilizando `process.argv`

[Ejemplo](https://nodejs.org/dist/latest-v16.x/docs/api/process.html#processargv)

## Otros módulos del Core de NodeJS

- [os Module](https://nodejs.org/dist/latest-v16.x/docs/api/os.html)
- [path Module] => utilidades a gestionar rutas del sistema operativo
- [url Module] => utilidades para gestionar una URL
- [fs Module] => File System Module, para gestionar el sistema de archivos y directorios del os
- [dns Module] => Modulo para la gestión de los DNS
...

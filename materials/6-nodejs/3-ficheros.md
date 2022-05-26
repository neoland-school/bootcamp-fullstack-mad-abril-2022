# Ficheros y Directorios

Los ficheros nos ayudan a almacenar la información dentro de nuestro sistema operativo.

Los directorios nos ayudan a organizar esos ficheros.

## Ficheros

Un fichero consta de las siguientes propiedades:

- `nombre`: El nombre que le damos al fichero.
- `extensión`: Indica el formato en el que está estructurada la información del fichero. se puede reconocer por el string que hay despues del último punto ('.'). Ejemplo .pdf, .png, .txt, .json, .md
    *El .txt es un texto sin formato, que se conoce como `texto plano`*

- `ruta` o `path`: El lugar donde se encuentra el fichero dentro del sistema operativo.
- `datos`: Es la información que almacena el fichero.
- `Owner`: Indica el nombre del usuario dueño del archivo
- `permisos`: Indica quien (usuario o usuarios) puede acceder al archivo y operar con el.

**NO puede existir dos archivos con el mismo `path`, `nombre` y `extensión`**.

## Directorios

Un directorio nos ayuda a organizar la información. ¿Que propiedades tiene?

- `nombre`: alias de lo que significa el directorio.
- `path`: la ruta donde se encuentra el directorio dentro del SO (sin incluir el nombre)
- `contenido`: Una lista de ficheros y subdirectorios (directorios hijos)
- `permisos`: Indica quien (usuario o usuarios) puede acceder al directorio y operar con el.
- `directorio padre`: Es la carpeta contenedora

**No puede existir dos directorios con el mismo `path` y el mismo `nombre`**

**TODOS los directorios tienen directorio padre, menos 1, el llamado `directorio raíz`**

Windows --> C: o D: o G:
MacOS --> /
Linux --> /

**TODAS las rutas globales empiezan por el `directorio raíz`**

**Existen dos rutas de directorios especiales `.` y `..`**

`.` -> Representa el directorio actual, nosotros mismo como directorios.
`..` -> Representa el directorio padre.

**Todas las rutas que empiezan por `.` o `..` son rutas relativas**

## Permisos

Tienen 3 bloques de tipos de usuario y a cada bloque se le especifica 3 posibles operaciones que se pueden o no realizar por ese tipo de usuario.

Los grupos de usuarios son:

1. Owner
2. Grupo del directorio
3. El resto de usuarios

Para cada grupo hay que especificar, en este orden:

1. Lectura (r)
2. Escritura (w)
3. Ejecución (x)

USR  GRP  OTHER
rwx  rwx  rwx
101  001  010

¿Que pasa si soy el creador del archivo y ejecuto un programa NodeJS que tiene `fs.writeFile` en un archivo que tiene los permisos de arriba?

NodeJS lanza un excepcion que no tienes permisos

¿Que pasa si soy un usuario que no es el owner ni pertenece al grupo y ejecuto un programa NodeJS que tiene `fs.writeFile` en un archivo que tiene los permisos de arriba?

Puedo escribir perfectamente.

### ¿Como se representan los permisos para una fácil lectura?

Los permisos se representan en base Octal, por cada tipo de usuario

000 --> 0
001 --> 1
010 --> 2
011 --> 3
100 --> 4
101 --> 5
110 --> 6
111 --> 7

Tenien el siguiente juego de permisos

USR  GRP  OTHER
rwx  rwx  rwx
101  001  010

¿Cual sería su representación octal?

0o512

Dada esta representación en octal: 0o743 + 0o100 = 0o1043. ¿Cual es su reprentacion en binario?

USR  GRP  OTHER
rwx  rwx  rwx
111  100  011

# Introducción a GIT

Git es una herramienta para poder gestionar las versiones de código y las evoluciones de código dentro de un proyecto y colaborativamente, es decir, en un equipo.

## ¿Como se estructura GIT?

En git un proyecto se le llama `repositorio`. Un proyecto es una carpeta donde guardo todos los archivos del mismo.

En git tenemos, para cada repositorio, 2 repositorios en si mismo:

- **El repositorio local**: La versión del proyecto que tenemos descargada en nuestro ordenador.
- **El repositorio remoto**: Una versión del proyecto enlazada con el repositorio local pero accesible en Internet

### ¿Cómo se divide el repositorio local?

1. **Area de trabajo** o **working directory**: Es el lugar o la zona donde tengo cambios del código que todavía no los he registrado en GIT.
2. **Area de staging**: Es el área donde registramos los cambios en GIT, pero no de manera permanente. Los archivos que se encuentren en esa zona, ya se registran en GIT, pero no están para publicar.
3. **Area del repositorio local**: En esta zona git ya graba los cambios de manera permanente y asigna a los cambios un identificador, llamado `commit`. Una vez nuestros cambios están en esta zona, ya se pueden publicar al repositorio remoto.

![Comandos y diagrama GIT](https://i.stack.imgur.com/eRjU6.png)

## ¿Como creo el repositorio por primera vez?

1. **Crear un repositorio remoto** y descargarlo por primera vez: Esta es la mas facil y la que vamos a trabajar. Esta creación **SOLO se hace vez** en la vida del proyecto. La operación de descargar por primera vez en un ordenador un repositorio remoto se llama **Clonar**. Esta operación se hace cada vez que queramos crear por primera vez el repositorio en nuestro ordenador, es decir, en local.

2. **Crear un repo local y subirlo generando un repo remoto**: Esta no la vemos en el bootcamp.

# ExpressJS

Express es una librería npm, que nos ayuda a crear servidores HTTP y gestionar las respuestas a las solicitudes de los clientes.

Estos servidores se alojan en cualquier ordenador en intener que tenga NodeJS instalado, ya que el servidor es una app nodeJS.

Para crear ese ordenador se suelen utilizar o Hostings o Clouds. Nosotros lo vamos a desplegar en Heroku.

## ¿Como creo el hello world de un servidor HTTP?

1. Crear un proyecto NPM para una app NodeJS, de tipo module
2. Instalar la librería express [Tutorial](http://expressjs.com/en/starter/installing.html)
    > npm i express
3. Crear un archivo app.js
4. Crear el servidor [Tutorial](http://expressjs.com/en/starter/hello-world.html)
    1. Importar express
    2. Crear la app llamando a la función express()
    3. Definir las rutas y sus respuestas
    4. Poner a escuchar la app en un puerto

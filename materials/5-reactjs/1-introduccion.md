# Introducción

ReactJS es una librería para construir interfaces de usuario (front-end de una web en el navegador). Lo crea Facebook y lo libera en el año 2009.

Uno de sus competidores más fuertes es Angular, mantenida por Google y tambien sale en el año 2009.

Angular es un framework y reactJS es una librería.

- Un framework es un conjunto de utilizades que te permiten construir una aplicación sin necesidad de añadir nada más, es decir, con lo que el framework proporciona tu puedes construir toda la app.

- Una librería son una utilidades para solucionar un problema concreto dentro de una app.

¿Como puedo entonces construir aplicaciones con reactJS?

Podemos porque realmente lo que aprenderemos son varias librerías que juntas forman un "framework":

- **ReacJS**: librería base con funciones y gestión del estado de la aplicación
- **ReactDOM**: librería que gestiona el arbol DOM de una manera muy eficiente
- **React Router**: librería que nos permite crear páginas dentro de una aplicación web
- **npm**: gestor de librerías/paquetes. nos permite instalar, utilizar o desinstalar librerías en nuestro proyecto.
- **JSX**: librería que nos ayuda a escribir y enlazar el HTML, CSS con JavaScript. Nos ayuda a eliminar (createElement, appendChild, addEventListener, etc)
- **create-react-app**: librería que nos ayuda a construir el esqueleto base para empezar a desarrollar. CLI con las operaciones para levantantar servidor, parar, construir la app para desplegar, texting, etc...

## ¿Como se estructura reactjs?

ReactJS construye las aplicaciones componeniendo la interfaz con `subcomponentes`, juntando estos componentes se forma la página web.

El component principal padre es el `App.js` y el que sería como el tag `html` es el `Index.js`

## ¿Como creo una aplicación reactJS?

Tenemos que tener instalado `npm`, que se instala automáticamente con `nodejs`

1. Sacar un terminal en el directorio donde queramos crear la app.
2. Ejecutar el siguiente comando:
    > npx create-react-app _nombre-app_

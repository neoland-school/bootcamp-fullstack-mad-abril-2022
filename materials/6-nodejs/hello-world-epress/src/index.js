import {app} from './app.js';


// paso 4: iniciar el servidor
app.listen(4563, () => {
    // esta es la función que se ejecuta cuando se inicia el servidor
    console.log('Server on port 4563');
});
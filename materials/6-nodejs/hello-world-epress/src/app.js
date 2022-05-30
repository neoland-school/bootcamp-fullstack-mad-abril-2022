import express from 'express'; // paso 1

const app = express(); // paso 2

// http://expressjs.com/en/4x/api.html#req.body
app.use(express.json()) // for parsing application/json

// paso 3: definir rutas
app.get('/', (req, res) => {
    // esta es la función que se ejecuta cuando se hace una petición GET a la ruta raíz
    res.send('Hello World Cambiado y a tope');
});

app.get('/bootcamp', (req, res) => {
    // esta es la función que se ejecuta cuando se hace una petición GET a la ruta raíz
    res.send('Esto es una respuesta dentro de una ruta');
});

app.get('/example-json', (req, res) => {
    // este metodo (.json()) es para enviar un json a un cliente
    res.json({ demo:'hello JSON'}); 
});

app.get('/example-status', (req, res) => {
    // status() es para enviar un codigo de estado antes de enviar una respuesta
    res.status(412);
    res.send('Esto ha sido un error 412'); 
});

app.get('/example-headers', (req, res) => {
    // set() es para enviar una cabecera antes de enviar una respuesta
    res.set('x-custom-header', 'hello world custom header');
    res.send('Esto ha sido una respuesta con una cabecera custom'); 
});


app.post('/example-post', (req, res) => {
    console.log(req.body); // esto es para obtener el body de la petición
    res.send('Esto es lo que estoy devolviendo en el post'); 
});

// paso 4: iniciar el servidor
app.listen(4563, () => {
    // esta es la función que se ejecuta cuando se inicia el servidor
    console.log('Server on port 4563');
});
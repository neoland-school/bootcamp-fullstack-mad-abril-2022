import express from 'express'; // paso 1

export const app = express(); // paso 2

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

/**
 * Cuando necesitamos una ruta variable, para operar con una elemento
 * concreto de una lista, utilizamos path params, es decir,
 * una variable definida en la ruta y que podemos obtener su valor 
 * en el manejador de la ruta de expressjs
 */
app.get('/example-path-params/:id', (req, res) => {
    console.log(req.params); // esto es para obtener los path params de la petición
    res.send('Has solicitado información sobre el id: ' + req.params.id);
});

app.get('/example-path-params-double/:id/other/:name', (req, res) => {
    console.log(req.params); // esto es para obtener los path params de la petición
    const {id, name} = req.params; // esto es una deconstrucción del objeto params
    res.send(`Has solicitado información sobre el id: ${id}
              Has solicitado información sobre el name: ${name}`);
});
// esto sería en una delete
app.delete('/example-path-params/:id', (req, res) => {
    console.log(req.params); // esto es para obtener los path params de la petición
    res.send('Has solicitado borrar sobre el id: ' + req.params.id);
});



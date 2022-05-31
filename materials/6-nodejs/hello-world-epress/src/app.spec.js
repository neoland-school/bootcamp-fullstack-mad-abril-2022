import supertest from 'supertest';
import {app} from './app.js';

/**
 * 1. Exportar la variable app (app.js)
 * 2. Llevar el listen a un archivo aparte (index.js)
 * 3. Importar la variable app y supertest en el archivo de pruebas (app.spec.js)
 * 4. Agrupar por describes cada entidad/collection
 * 6. Realizar los it necesarios.
 */

// Como no tengo concepto funcional en esta app, solo haré los it

it('When GET on example-json path is called it should return "hello JSON"', done => {
    supertest(app)
        .get('/example-json')
        .expect(200)
        .expect('Content-Type', /json/) // expresion regular para verificar que el content-type sea json
        .expect({demo:'hello JSON'})
        .end(done);
});

it('When GET on example-status path is called it should return 412', done => {
    supertest(app)
        .get('/example-status')
        .expect(412)
        .expect('Content-Type', /text/) // expresion regular para verificar que el content-type sea text
        .expect('Esto ha sido un error 412')
        .end(done);
});

it('When GET on example-headers path is called it should return "hello world custom header"', done => {
    supertest(app)
        .get('/example-headers')
        .expect(200)
        .expect('x-custom-header', 'hello world custom header')
        .expect('Content-Type', /text/) // expresion regular para verificar que el content-type sea text
        .expect('Esto ha sido una respuesta con una cabecera custom')
        .end(done);
});

it('When POST on example-post path is called it should return "Esto es lo que estoy devolviendo en el post"', done => {
    supertest(app)
        .post('/example-post')
        .send({demo:'hello POST'})
        .expect(200)
        .expect('Content-Type', /text/) // expresion regular para verificar que el content-type sea text
        .expect('Esto es lo que estoy devolviendo en el post')
        .end(done);
});

it('When GET on /example-path-params/:id path is called with an id it should return "Has solicitado información sobre el id: :id"', done => {
    supertest(app)
        .get('/example-path-params/1')
        .expect(200)
        .expect('Content-Type', /text/) // expresion regular para verificar que el content-type sea text
        .expect('Has solicitado información sobre el id: 1')
        .end(done);
});

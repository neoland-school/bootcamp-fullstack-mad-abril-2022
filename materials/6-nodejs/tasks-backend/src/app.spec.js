import supertest from 'supertest';
import {app} from './app.js';

const demoTaks = {
    title: 'Task 1',
    description: 'Description 1',
    isCompleted: false
}

describe('Tasks GET All', () => {

    it('When there are no tasks it should return an empty array', (done) => {
        supertest(app)
            .get('/tasks')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, [], done);
    });


    it('When we have some tasks it should return an array with all tasks', (done) => {
        // primero un post para crear una tarea
        supertest(app)
            .post('/tasks')
            .send(demoTaks)
            .end(() => {
                // después un get para ver si se creó
                supertest(app)
                    .get('/tasks')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end((_err, res) => {
                        expect(res.body.length).toBe(1);
                        expect(res.body[0].title).toBe('Task 1');
                        expect(res.body[0].description).toBe('Description 1');
                        expect(res.body[0].isCompleted).toBe(false);
                        done(); // le indico a jest que hemos terminado
                    });
            });
    });    
});

describe('tasks POST ', () => {

    it('When you create a tasks, it should return the id and exists in the list', done => {
        supertest(app)
            .post('/tasks')
            .send(demoTaks)
            .expect('Content-Type', /json/)
            .expect(201) // created
            .end(done)
    });


    it('When you create a bad task, it should return un Bad Request', done => {
        supertest(app)
            .post('/tasks')
            .send({title: 'Demo', isCompleted: true}) // missing description
            .expect('Content-Type', /json/)
            .expect(400) // bad request
            .end(done)
    });
})


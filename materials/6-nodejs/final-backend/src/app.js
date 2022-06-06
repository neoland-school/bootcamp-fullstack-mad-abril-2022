import express from 'express';
import studentRouter from './students/students.router.js';

export const app = express();

app.use(express.json()); // permitimos que el app procese JSON en el body de la request

app.get('/ping', (_req,res) => res.send('pong'));

app.use('/students', studentRouter); // ahora en /students se encuentran TODAS las rutas y subrutas definidas por studentRouter
import express from 'express';
import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import {FILE_PATH, readTasks} from './file.utils.js';

export const app  = express();

app.use(express.json()); // para que body pueda leer JSON

// Se puede tambien definir una ruta para el path y añadir los métodos HTTP ahi
app.route('/tasks')
    .get(async (_req,res) => res.json(await readTasks()))
    .post(async (req,res) => {
        /**
         * 1. Leer la información del fichero para poder tener la lista de tareas
         * 2. Generamos un id para la tarea
         * 3. Añadimos la tarea del body al array
         * 4. Sobreescribimos el archivo para actualizar
         */
         const tasks = await readTasks();
         const id = uuidv4(); // paso 2. generamos un uuid
         tasks.push({
            id,
            ...req.body
         }); // paso 3
         await fs.writeFile(FILE_PATH, JSON.stringify(tasks)); // paso 4
         res.status(201).json({id}); // los post siempre devuelven el id para que el cliente sepa que ID de entidad se ha generado
    });


    app.route('/tasks/:id')
        .get(async (req,res) => {
            /**
             * 1. Recuperar el id de la tarea del path param
             * 2. recuperar la lista de tareas
             * 3. Buscar la tarea que tenga ese id dentro de la lista
             * 4. Si no existe devuelvo 404
             * 5. Si existe devuelvo la tarea
             */
            const {id} = req.params; // paso 1
            const tasks = await readTasks(); // paso 2
            const task = tasks.find(t => t.id === id); // paso 3
            if(task === undefined) res.status(404).json({ "error": `La tarea ${id} no existe` }) // paso 4
            else res.json(task); // paso 5
            
        })
        .delete(async (req,res) => {
            /**
             * 1. Recuperar el id de la tarea del path param
             * 2. recuperar la lista de tareas
             * 3. Buscar la index tarea que tenga ese id dentro de la lista
             * 4. Si no existe devuelvo 404
             * 5. Si existe Eliminar ese index y devolver un 200
             */
             const {id} = req.params; // paso 1
             const tasks = await readTasks(); // paso 2
             const taskIndex = tasks.findIndex(t => t.id === id); // paso 3
             if(taskIndex === -1) res.status(404).json({ "error": `La tarea ${id} no existe` }) // paso 4
             else {
                 tasks.splice(taskIndex,1); // elimino la tarea
                 await fs.writeFile(FILE_PATH, JSON.stringify(tasks)); // Sobreescribo el fichero para actualizar
                 res.json(); // paso 5
             }
        })
        .patch(async (req,res) => {
            /**
             * 1. Recuperar el id de la tarea del path param
             * 2. recuperar la lista de tareas
             * 3. Buscar la index tarea que tenga ese id dentro de la lista
             * 4. Si no existe devuelvo 404
             * 5. Si existe devuelvo hago merge del body con la tarea actual y sobreescribo la tarea en el array
             */
             const {id} = req.params; // paso 1
             const tasks = await readTasks(); // paso 2
             const taskIndex = tasks.findIndex(t => t.id === id); // paso 3
             if(taskIndex === -1) res.status(404).json({ "error": `La tarea ${id} no existe` }) // paso 4
             else {
                tasks[taskIndex] = {...tasks[taskIndex], ...req.body}; // merge sobreescribiendo lo que haya en body dentro del array
                await fs.writeFile(FILE_PATH, JSON.stringify(tasks)); // Sobreescribo el fichero para actualizar
                 res.json(tasks[taskIndex]); // paso 5
             }
        });


/*
*
* Cosas que faltan:
*   1. Validar el body del post
    2. Validar el body del patch
    3. Terminar el testing. ¿Que pasa con el archivo durante el testing? --> Tendremos que hacer alguna modificacion (BeforeAll??)
*
*/



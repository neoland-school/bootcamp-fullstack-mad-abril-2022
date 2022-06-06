import express from 'express';
import { getAllStudentsCtrl, createStudentCtrl, getStudentByIdCtrl } from './students.controller.js';

const router = express.Router(); // asi creo un router en una variable

// defino las rutas dentro del router

router.route('/')
    .get(getAllStudentsCtrl) // Obtener TODOS los estudiantes (R)
    .post(createStudentCtrl); // crear 1 estudiante (C)

router.route('/:id')
    .get(getStudentByIdCtrl) // Obtener UN estudiante con un ID concreto (R)
    .patch(() => {}) // Actualizar UN estudiante (U)
    .put(() => {}) // Actualizar UN estudiante (U)
    .delete(() => {}) // Borrar UN estudiante (D)


export default router; // y lo exporto para que lo use el app u otro router
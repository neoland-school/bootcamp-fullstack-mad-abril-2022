import { ObjectId } from "mongodb";

// GET ALL
export const getAllStudentsCtrl = async (req,res) => {
    // ir a BBDD y devolver TODOS los estudiantes
    const db = req.app.locals.ddbbClient.db('demo'); // cojo la BBDD
    const col = db.collection('students'); // cojo la collection
    const students = await col.find().toArray(); // busco TODOS y lo paso a array
    res.json(students); // devuelvo el resultado al cliente
}

export const createStudentCtrl = async (req,res) => {
    const db = req.app.locals.ddbbClient.db('demo'); // cojo la BBDD
    const col = db.collection('students'); // cojo la collection
    const r = await col.insertOne(req.body); // aqui falta VALIDAR el body
    res.json({id: r.insertedId}); // devuelvo el ID insertado para que el cliente sepa
}

export const getStudentByIdCtrl = async (req,res) => {
    const {id} = req.params;
    const db = req.app.locals.ddbbClient.db('demo'); // cojo la BBDD
    const col = db.collection('students'); // cojo la collection
    const o_id = ObjectId(id); // genero un ObjectId de MongoDB. Controlar el pete del ID
    const student = await col.findOne(o_id);
    if(student === null ){
        res.status(404).json({error: 'No existe ese usuario'});
    }else{
        res.json(student);
    }
}

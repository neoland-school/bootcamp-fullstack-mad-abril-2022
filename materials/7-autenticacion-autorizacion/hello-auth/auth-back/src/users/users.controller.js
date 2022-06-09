import { retrieveUserInfoByEmail } from './users.model.js';

export const getUserInfo = async (req, res) => {
    // llamo al usuario
    try {
        const user = await retrieveUserInfoByEmail(req.email); // ¿Esto sale de una cosa que se llama Middleware?
        res.json(user); // deveulvo la info del usuario
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
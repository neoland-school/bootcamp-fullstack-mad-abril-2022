import { app } from "./app.js";
import fs from "fs";
import {FILE_PATH} from './file.utils.js';

// versión sync
// try{
//     const data = fs.readFileSync('./data/tasks.json', {encoding:'utf-8'});
// }catch(err){
//     console.log(err);
// }
// utilizo la versión de callbacks

fs.readFile(FILE_PATH, {encoding:'utf-8'}, (err, data) => {
    if (err) {
        fs.writeFileSync(FILE_PATH, '[]'); // como es sincrono puedo tener el listen abajo
    }
    app.listen(3001,() => console.log('Server is running on port 3001'));
});


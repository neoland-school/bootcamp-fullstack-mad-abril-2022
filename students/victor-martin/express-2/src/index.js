import fs from "fs";//Paso 1:importar fs
import express from 'express'
import app from "./app.js";
const port = 3005;
const FIRST_FILE_PATH = './task.json'
fs.readFile(FIRST_FILE_PATH, 'utf-8', (err,data) =>{
    if(err){
        fs.writeFile(FIRST_FILE_PATH, '[]', function(err){ //El array debe ir entre comilla sino dara un error.
            app.listen(port, () => {
                console.log(`Probando el ejemplo de Victor no había archivo ${port}`);
              });
        });
    }
    app.listen(port, () => {
        console.log(`Probando el ejemplo de Victor si había archivo ${port}`);
      })
});
// array.fill






// import fs from "fs";//Paso 1:importar fs
// import express from 'express'
// import app from "./app.js";

// const port = 3005;
// const FIRST_FILE_PATH = './task.json'

// fs.readFile(FIRST_FILE_PATH, 'utf8', (err,data) =>{
//     if(err){
//         fs.writeFile(FIRST_FILE_PATH, '[]', function(err){
//         });
//     }
//     app.listen(port, () => {
//         console.log(`Probando ele ejemplo de Jose ${port}`);
//       });
// })


        // import express from "express"
        // import fs from "fs" // paso 1 importar fs
        // import app from './app.js'

        // const FIRST_FILE_PATH = './task.json'

        // fs.readFile(FIRST_FILE_PATH, "utf-8", (err, data)=> {
        // if(err) {
        //     fs.writeFile(FIRST_FILE_PATH, '[]', function(err) {
        //     })
        // }
        // });


        // app.listen(3005, () => {
        //     console.log(`Example app PRASTINF on port ${3005}`)
        //   })


// fs.readFile("./task.json", "utf-8", (err, data) => {
//     if (err) {
    
//         fs.writeFile("task.json", "HOLA", (err) => {
//              (err)
//             console.log(err);
//         });
//     }
//     console.log(data);
//     });


    // app.listen(3005, () => {
    //     console.log(`Example app PRASTINF on port ${3005}`)
    //   })

// const app = express();

// app.set('port' , process.env.PORT || 3005)

// app.get("./ping", (req, res) => {

//     res.send("pong")
// })

// export const server = app.listen(app.get('port'), () => {
//     console.log(`Express server listening on port %d in %s mode ${app.get('port')}`);
//   })


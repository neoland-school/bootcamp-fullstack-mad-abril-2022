import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());
app.get("/task", (req, res) => {
    const data = fs.readFile("./task.json", "utf-8", (err, data) => {
        res.json(JSON.parse(data));
    })
})

app.post("/task", (req, res) => {
    let newTasks = []
    const data = fs.readFileSync("./task.json", {encoding: 'utf-8'});
    newTasks = [...JSON.parse(data), req.body]
    fs.writeFile("./task.json", JSON.stringify(newTasks), (err) => {
        console.log(err)
    })
    res.status(200).send("Ok")
    })

 export default app;







// import express from "express";
// import fs from "fs";

// const app = express();

// app.use(express.json());

// app.get("/task", (req, res) => {

//     const data = fs.readFileSync("./task.json", "utf-8")
//     res.send(data);

// });


// app.post('/task', (req,res) => {
//     let newTask = []
//     const data = fs.readFileSync('./task.json', 'utf-8')
//     newTask = [...JSON.parse(data), req.body]
//     fs.writeFile('./task.json', JSON,stringify(newTask),(err) => {
//         console.log(err)
//     })
//     res.send('BIEN')
//     console.log(newTask)
// });

//     export default app;


// app.get("/tasks", (req, res) => {
//     fs.readFile(FIRST_FILE_PATH, "utf-8", (err, data) => {
//       res.json(data);
//   });
















            // import express from "express";
            // import tasks from './index.js'
            // export const app = express();

            // const port = 3005


            // app.use(express.json())

            // app.get('/tasks', (req, res) => {
            //     res.send(tasks)
            //   })

            //   export default app;

// app.get('/', (req, res) => {
//     res.send('Hello World yds dsfjlsd!')
//   })

// const FILE_TASK_JSON = "./task.json";
// export function TaskJson (){

//     if  (fs.readfile(FILE_TASK_JSON !== fs.writefile))
//     else {

//     }



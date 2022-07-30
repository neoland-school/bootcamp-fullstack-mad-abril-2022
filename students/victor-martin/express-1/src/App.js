import express from "express";
export const app = express();
const port = 3003

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World yds dsfjlsd!')
})

// app.get('/demo-methods', (req, res) => {   // este frame de codigo es CORRECTO COMO EL DE ABAJO
//     res.send('demo methods')
//   })

app.get('/demo-methods', (req, res) => {

    // req.query
    // // req.query
    // console.log(req.query)
    // res.json({"queryvalues": req.query});
    //res.send es muy parecido a res.json
let arr = []

    for (const key in req.query) {
            // console.log(key, req.query[key])
            // const arrayQuery = [req.query[key]].push
        arr.push(req.query[key])
        console.log(arr)
      }
            //   res.json({"queryvalues": req.query});
      res.send({"queryvalues": arr})
    
  })

// app.post('/demo-methods', (req, res) => {
//     // console.log(req.body); // esto es para obtener el body de la petición
//     const {payload} = req.body
//     res.json ({ type: 'POST', payload: payload})
// })

app.post('/demo-methods', (req, res) => {
    // console.log(req.body); // esto es para obtener el body de la petición
    res.status(412);
    res.send({ error: 'La propiedad payload es obligatoria'})
    const {payload} = req.body
    res.json ({ type: 'POST', payload: payload})
})
    


// app.patch('/demo-methods', (req, res) => {
//     const {payload} = req.body
//     res.json ({ type: 'PATCH', payload: payload})
// })


app.patch('/demo-methods', (req, res) => {
    res.status(412);
    res.send({ error: 'La propiedad payload es obligatoria en PATCH'})
    const {payload} = req.body
    res.json ({ type: 'PATCH', payload: payload})
})


// app.put('/demo-methods', (req, res) => {
//     const {payload} = req.body
//     res.json ({ type: 'PUT', payload: payload})
// })

app.put('/demo-methods', (req, res) => {
    const {payload} = req.body
    if (payload !== undefined) {
    res.json ({ type: 'PUT', payload: payload})
    } else {
    res.status(400);
    res.send({ error: 'La propiedad payload es obligatoria en PUT'})
    }
})

app.delete('/demo-methods', (req, res) => {
    const {payload} = req.body
    res.json ({ type: 'DELETE', payload: payload})
})



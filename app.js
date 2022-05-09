// Usando objeto express
const express = require('express')
// App de Express
const app = express()
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//path inicial, respondera a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Respondiendo texto
//localhost:3000/launchx
app.get('/lauchx', (req, res) => {
    res.send('Bienvenidos a Lauchx')
})

//Regresando un objeto
// localhost:200/explorersInNode
app.get('/explorersInNode', (req, res) =>{
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})

// Query Params: Recibir parametros por la url
// http://localhost:3000/explorers/carlo
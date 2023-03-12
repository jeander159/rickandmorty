// const http = require('http');
// const url = require('url');
// const db = require('./data');
// const bodyParser = require('body-parser')
// const express = require('express')
// const app = express();
// const characters = require('./routes/server');
// const router = require("express").Router();

// const getCharById = require('./controllers/getCharById.js')
// const getCharDetail = require('./controllers/getCharDetail.js')

// console.log(db);

// const PORT = 3001;

// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use('/',characters)
// http.createServer((req, res) => {
//    const parsedUrl = url.parse(req.url, true);
//    console.log(parsedUrl);
// });
// app.post('/',(req,res)=>{
//    console.log(req.body)
//    res.json('hola')
// })


const express = require('express');
const server = express();
const routes = require('./routes/routes');
const cors = require('cors')
const { sequelize } = require('./DB_connection.js');
const PORT = 3001;

const saveApiData = require('./controllers/saveApiData');


server.use(express.json());
server.use(cors());

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); //Autorizo recibir solicitudes de este dominio
   res.header('Access-Control-Allow-Credentials', true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //Autorizo recibir solicitudes con dichos hedears
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
   next();
});

server.use('/',routes);

// server.listen(PORT,()=>{
//    console.log(`servidor corriendo en ${PORT}`)
// })
sequelize.sync({
   force:true
}).then(async ()=>{
   await saveApiData();
   server.listen(PORT,()=>{
      console.log(`servidor corriendo en ${PORT}`)
   })
})
var express = require('express')
const app = express()

const regularRoutes = require("./routes/main");

app.use(express.urlencoded());
app.use(express.json());
app.use(regularRoutes);

app.listen(3333,"0.0.0.0",function(){
   console.log('Hola App esta escuchando en el puerto 3333')
})
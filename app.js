const express = require('express')
const app = express()
app.get('/', function(request,result){
    result.send('Hola mundo! - Aplicacion Node JS <br>')
})
app.listen(3333,"0.0.0.0",function(){
<<<<<<< HEAD
    console.log('Hola App esta escuando en el puerto 3333')
=======
    console.log('Hola Mundo App is listening on port 3333')
>>>>>>> 3b6b789f99f799645f0226d4383403c868b12beb
})

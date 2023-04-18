var express = require('express')
const app = express()
var bodyParser = require('body-parser')
const prom = require('prom-client')
 
// Prometheus metric definitions
const todocounter = new prom.Counter({
   name: 'holaapp_number_of_hit_total',
   help: 'The number of hits, total'
});

const collectDefaultMetrics = prom.collectDefaultMetrics
collectDefaultMetrics({ prefix: 'holaapp' })


app.get('/', function(request,result){
   todocounter.inc();

   result.send('Hola mundo! - Aplicacion Node JS <br>')
})

app.listen(3333,"0.0.0.0",function(){
    console.log('Hola App esta escuando en el puerto 3333')
})

app.get('/metrics', function (req, res) {
   res.set('Content-Type', prom.register.contentType)
   res.end(prom.register.metrics())
})

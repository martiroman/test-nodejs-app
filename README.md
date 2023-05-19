# test-nodejs-app
Aplicación NodeJS - Pruebas de herramientas de Observabilidad

## Crear Imagen y subirla a repositorio docker

```
docker build -t hello-world-nodejs:latest .
docker tag hello-world-nodejs localhost:5000/hello-world-nodejs
docker push localhost:5000/mitienda --tls-verify=false
```


## Prometheus: Prom-Client

Instalar librerias "prom-client" para NodeJS
https://prometheus.io/docs/instrumenting/clientlibs/

```
 npm install prom-client --save
```
Declarar el uso de la librería en la aplicación
    
```
 const prom = require('prom-client');
```

Incluir las métricas por defecto para NodeJS

```
 const collectDefaultMetrics = prom.collectDefaultMetrics;
 collectDefaultMetrics({ prefix: 'holaapp' });
```

Exponer las métricas

```
 app.get('/metrics', function (request, result) {
   res.set('Content-Type', prom.register.contentType);
   //res.end(prom.register.metrics());
   prom.register.metrics().then(data => result.send(data));

 });
```

### Counters

Definir una métrica contador:

```
 const hitscounter = new prom.Counter({
   name: 'holaapp_number_of_hits_total',
   help: 'The number of hits, total'
 });

```
### Gauges

### Summaries and Histograms

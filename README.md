# test-nodejs-app

## Prometheus: Prom-Client

```
 npm install prom-client --save
```

```
 var express = require('express');
 var bodyParser = require('body-parser');
 var app = express();
 const prom = require('prom-client');
```
```
 const collectDefaultMetrics = prom.collectDefaultMetrics;
 collectDefaultMetrics({ prefix: 'holaapp' });
```
```
 app.get('/metrics', function (req, res) {
   res.set('Content-Type', prom.register.contentType);
   res.end(prom.register.metrics());
 });
```

### Counters

```
 // Prometheus metric definitions
 const hitscounter = new prom.Counter({
   name: 'holaapp_number_of_hits_total',
   help: 'The number of hits, total'
 });
 ```
### Gauges

### Summaries and Histograms

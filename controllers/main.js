
var path = require("path");

const axios = require("axios");

// PROMETHEUS ////////////////////////////////////////////////////////////
const prom = require('prom-client') 
const todocounter = new prom.Counter({
   name: 'holaapp_number_of_hit_total',
   help: 'The number of hits, total'
});

const collectDefaultMetrics = prom.collectDefaultMetrics
collectDefaultMetrics({ prefix: 'holaapp_' })

exports.getMetrics = async (req, res, next) => {
	res.set('Content-Type', prom.register.contentType)
	prom.register.metrics().then(data => res.send(data)); 
};

////////////////////////////////////////////////////////////////////////

exports.getData = async (req, res, next) => {
	todocounter.inc();
	res.sendFile(path.join(__dirname, "../view", "index.html"));
};

exports.postData = async (req, res, next) => {
	console.log(req.body);
	if (req.body.fromForm) {
		console.log(
			`Hola ${req.body.name} login correcto`,
		);
		res.status("200").json({ message: "Mensaje enviado a APP2" });
	}
	await axios
		.post("http://localhost:5555/", {
			body: JSON.stringify({ connected: "De APP1 a APP2" }),
		})
		.then(function (response) {
			console.log(response);
			//	res.end("connected");
		})
		.catch(function (error) {
			// throw new Error(error);
			res.status(404).json({ message: "error" });
		});
};

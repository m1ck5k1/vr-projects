// Setup localhost SSL
// https://www.kevinleary.net/self-signed-trusted-certificates-node-js-express-js/

const https = require('https');
const fs = require('fs');
//const express = require('express');

const options = {
	key: fs.readFileSync('./localhost.key'),
	cert: fs.readFileSync('./localhost.cert'),
	requestCert: false,
	rejectUnauthorized: false
};

//const app = express();
//const port = process.env.PORT || 443;
//const server = https.createServer( options, app );

//server.listen( port, function () {
//	console.log('Express Server listening on port ' + server.address().port );
//});

https.createServer(options, function (req, res) {
	res.writeHead(200);
	res.end("Hello VR Peeps\n");
}).listen(443);
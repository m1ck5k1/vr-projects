// Setup localhost SSL
// https://www.kevinleary.net/self-signed-trusted-certificates-node-js-express-js/
// https://support.apple.com/guide/keychain-access/change-the-trust-settings-of-a-certificate-kyca11871/mac

/** Const Vars */
const https = require('https');
const fs = require('fs');

const options = {
	key: fs.readFileSync('./localhost.key'),
	cert: fs.readFileSync('./localhost.cert')
	//requestCert: false,
	//rejectUnauthorized: false
};

const server = https.createServer(options, function (req, res) {
	res.writeHead(200);
	res.end("VR Peeps\n");
}).listen(443);

console.log('Server listening on port 443');
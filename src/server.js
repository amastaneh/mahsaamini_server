// 1- env file
require('dotenv').config(
	{ path: process.env?.NODE_ENV === "development" ? ".env.development" : undefined }
)

// 2- Port
const port = process.env.PORT || '80';
const app = require('./app');
app.set('port', port);
console.log("Environment:", process.env.NODE_ENV);
console.log("Port:", process.env.PORT, port);


// 3- Server creation
let server
if (process.env.NODE_ENV === "development") {
	server = require('http').createServer(app);
}
else {
	const httpsOptions = {
		key: require('fs').readFileSync('/usr/src/certs/private.key'),
		cert: require('fs').readFileSync('/usr/src/certs/certificate.crt'),
		ca: require('fs').readFileSync('/usr/src/certs/ca_bundle.crt'),
	};
	server = require('https').createServer(httpsOptions, app);
}
server.listen(port);


module.exports = server;
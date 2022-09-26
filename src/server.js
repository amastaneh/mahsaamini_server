const http = require('http')

// 1- env file
require('dotenv').config(
	{ path: process.env?.NODE_ENV === "development" ? ".env.development" : ".env" }
)

// 2- Port
const port = process.env.PORT || '80';
const app = require('./app');
app.set('port', port);
console.log("Environment:", process.env.NODE_ENV);
console.log("Port:", process.env.PORT, port);

// 3- Server creation
const server = http.createServer(app)
server.listen(port);
console.log("Server started...");


module.exports = server;
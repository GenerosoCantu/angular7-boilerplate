
var mockServer = require('node-mock-server');
var path = require('path');

// var options = require('./options');

// mockServer(options);

mockServer({
	'restPath': path.join(__dirname, '/rest'),
	'uiPath': '/',
	'title': 'Api mock server',
	'version': 1,
	'urlBase': 'http://localhost:3001',
	'urlPath': '/rest/v1',
	'port': 3001,
	'contentType': 'application/json',
	'accessControlExposeHeaders': 'X-Total-Count',
	'accessControlAllowOrigin': 'http://localhost:4200',
	'accessControlAllowMethods': 'GET, POST, PUT, OPTIONS, DELETE, PATCH, HEAD',
	'accessControlAllowHeaders': 'origin, x-requested-with, content-type',
	'accessControlAllowCredentials': 'true',
	'headers': {
		'Global-Custom-Header': 'Global-Custom-Header',
		'Accept': 'application/json'
	},
	'open': true,
	'dirName': __dirname
});

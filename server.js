var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

// app.get('/', function (req, res) {
// 	res.send('Hello Express!');
// });

// var middleware = {
// 	requireAuthentication: function (req, res, next) {
// 		console.log('private route hit!');
// 		next();
//  	},
//  	logger: function(req, res, next) {
//  		console.log('Request at ' + new Date().toString() + ': ' + req.method + ' ' + req.originalUrl);
//  		next();
//  	}
// };

middleware = require('./middleware.js');

app.use(middleware.logger);
// app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us...');
});

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});
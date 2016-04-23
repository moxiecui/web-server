var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
 	},
 	logger: function(req, res, next) {
 		console.log('Request at ' + new Date().toString() + ': ' + req.method + ' ' + req.originalUrl);
 		next();
 	}
};

method.export = middleware;
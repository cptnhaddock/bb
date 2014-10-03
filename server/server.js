var express = require('express');
var app = express();

app.use(express.static('app'));

var server = app.listen(3000, 'localhost', function() {
	console.log('Listening on address %s on port %d', server.address().address, server.address().port);
});

module.exports = app;
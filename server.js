var express = require('express');
var app = express();
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;
var knex = require('./db/knex');
var bodyParser = require('body-parser');

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
	res.render('index');
});

app.get('/portfolio', function(req, res) {
	res.render('portfolio');
});

app.get('/flybuy', function(req, res) {
	res.render('flybuy');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});

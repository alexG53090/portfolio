var express = require('express');
var app = express();
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var cors = require('cors');
var knex = require('knex')({
  client: 'pg',
  connection: 'postgres://yetpmeohcsomtg:Hnx270n32fWXXOYKScGvbTRt_i@ec2-54-221-201-165.compute-1.amazonaws.com:5432/d30t2g1brgvttb?ssl=true'
});

app.use(express.static('./views'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index');
})

app.get('/about', function(req, res, next){
  res.render('about');
})

app.get('/portfolio', function(req, res) {
	res.render('portfolio');
})

app.get('/contact', function(req, res, next){
  res.render('contact')
})

app.get('/blog', function(req, res) {
	res.render('blog');
})

app.get('/thankyou', function(req, res, next){
  res.render('thankyou')
})

app.get('/flybuy', function(req, res) {
	res.render('flybuy');
})

app.post('/sendmessage', function(req, res, next){
	var username = req.body.name;
	var message = req.body.message;
  console.log(req.body);
  if(message != null){
    knex('messages').insert({
      username: username,
      message: message
    }).then(function(){
      console.log('added ' + username + ' to db');
    })
  }
  res.redirect('thankyou')
})

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});

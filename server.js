// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'index.html'));
})
// sends user to reserve HTML
app.get('/reserve', function(req, res){
	res.sendFile(path.join(__dirname, 'reserve.html'));
})
// Sends user to the table html
app.get('/table', function(req, res){
	res.sendFile(path.join(__dirname, 'table.html'));
})
app.get('/api/tables', function(req, res){

});
app.get('/api/waitlist',function(req, res){

});

// Create reservation - takes in JSON input
app.post('/api/new', function(req, res){

	var newcharacter = req.body;
	newcharacter.routeName = newcharacter.name.replace(/\s+/g, '').toLowerCase()

	console.log(newcharacter);

	characters.push(newcharacter);

	res.json(newcharacter);
})

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})
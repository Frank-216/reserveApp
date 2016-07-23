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
// =============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// create arrays to hold data 
var reservation = [
	{
		customerName: "eli",
		phoneNumber: 888888888,
		customerEmail: "eli@fakemail.com",
		customerID: "BlindRanger",
	}
];
var waitlist = [];
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

	var newReservation= req.body;
	newReservation.routeName = newReservation.customerName.replace(/\s+/g, '').toLowerCase()

	console.log(newReservation);
	if(reservation.length < 5){
			reservation.push(newReservation);
			console.log("reservation")
			console.log(reservation);
				res.json(newReservation);

	}else{
		waitlist.push(newReservation);
		res.json(newReservation);

	}
})

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})
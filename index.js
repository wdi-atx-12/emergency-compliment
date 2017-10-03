// Requirements
const express = require('express');
const app = express();


var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Chris thinks you\'re wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Nicole would totally hire you.",
  "It\'s almost beer o\'clock!",
  "You\'re a full-stack unicorn! 🦄"
];

colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];

// Views

app.set('views', './views');
app.set('view engine', 'ejs');



// Routes

app.get('/:name', function(request, response) {
	var compliment = compliments[Math.floor(Math.random()*compliments.length)];
	response.send(request.params.name + ", " + compliment);
});


// Server Start
app.listen(3000, function() {
	console.log("HTTP server listening on 3000");
});
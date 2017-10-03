// dependencies/requirements for server to do server stuff
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
]
var complimentIndex = Math.floor(Math.random()*compliments.length);
var compliment = compliments[complimentIndex];

// app code
app.get('/', function(req, res){
  res.send('<h1>Hey, squirrel.</h1>' + compliment + ' <a href=#>Another?</a>');
})

// customize with name
app.get('/:name', function(req, res){
  console.log('name entered');
  var name = req.params.name;
  res.send('<h1>Hey, ' + name + '.</h1>' + compliment + ' <a href=#>Another?</a>');
})

// random background change
colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];

// app start
app.listen(3000, function(){
  console.log('http server ready for client vessel in port 3000');
});

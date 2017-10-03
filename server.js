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

app.listen(3000, function(){
  console.log('HTTP server listening on 3000');
});

app.get('/', function(req, res) {
  var rand = compliments[Math.floor(Math.random() * compliments.length)];
  res.send(rand);
});

app.get('/:name', function(req, res) {
  var name = req.params.name;
  var compliments = [
  "Your instructors love you, " + name + ".",
  "High five = ^5",
  "Chris thinks you\'re wicked smart, " + name + ".",
  "Britney Jo is sooo proud of you, " + name + ". :)",
  "Nicole would totally hire you, " + name + ".",
  "It\'s almost beer o\'clock, " + name + ".",
  "You\'re a full-stack unicorn, " + name + ". 🦄"
];
  var rand = compliments[Math.floor(Math.random() * compliments.length)];
  res.send(rand);
})

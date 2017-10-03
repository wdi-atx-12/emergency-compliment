//Establish Dependencies
const express = require('express');
const app = express();

// View engine setup
app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/', express.static('public'));


// Call routes
app.get('/', function(req, res){
  var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Chris thinks you\'re wicked smart!",
    "Britney Jo is sooo proud of you! :)",
    "Nicole would totally hire you.",
    "It\'s almost beer o\'clock!",
    "You\'re a full-stack unicorn! 🦄"
    ];
  var randcompliment = compliments[Math.floor(Math.random()*compliments.length)];
  res.render('index', { passcompliment: randcompliment});
});

app.get('/:name', function(req, res){
  var name = req.params.name;
  var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Chris thinks you\'re wicked smart!",
    "Britney Jo is sooo proud of you! :)",
    "Nicole would totally hire you.",
    "It\'s almost beer o\'clock!",
    "You\'re a full-stack unicorn! 🦄"
    ];
  var randcompliment = compliments[Math.floor(Math.random()*compliments.length)];
  res.render('personal', { name: name, passcompliment: randcompliment });
});

// Start server
app.listen(3000, function(){
  console.log("Server active, listening on Port 3000.");
});

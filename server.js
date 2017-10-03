// Dependenceies
const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

// compliments and colors
var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Chris thinks you\'re wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Nicole would totally hire you.",
  "It\'s almost beer o\'clock!",
  "You\'re a full-stack unicorn! 🦄"
]

colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];

function getRandomCompliments() {
  return compliments[Math.floor(Math.random()*compliments.length)];
}

function getColors() {
  return colors[Math.floor(Math.random()*colors.length)];
}


// routes and getting data onto website
// app.get('/', function(req, res) {
//   res.send(getRandomCompliments);
// });
//
// app.get('/:name', function(req, res) {
//   res.send('Hi ' + req.params.name);
// });

app.get('/:name', function(req, res){
  // var getRandomCompliments = compliments[Math.floor(Math.random()*compliments.length)];
  var personal = ('Hi ' + req.params.name);
  res.render('index', {compliment: getRandomCompliments(), personalMessage: personal, getColor: getColors()});
});

// app.get('/:name', function(req, res) {
//   var personal = ('Hi ' + req.params.name);
//   res.render('index', {personalMessage: personal});
// });

//server start
app.listen(3000, function() {
  console.log('HTTP SERVER IS LISTENING ON 3000');
});

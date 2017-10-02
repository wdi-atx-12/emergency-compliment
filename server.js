// Dependencies
const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Variables
var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Chris thinks you\'re wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Nicole would totally hire you.",
  "It\'s almost beer o\'clock!",
  "You\'re a full-stack unicorn! 🦄"
]

var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];

// Routes
app.get('/', function(req, res) {
  var randomQuote = compliments[Math.floor(Math.random() * compliments.length)];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  res.render('index', {randomQuote: randomQuote, randomColor: randomColor});
});

app.post('/', function(req, res) {
  var addedQuote = req.body.name;
  compliments.push(addedQuote);
  res.redirect('/');
});

// Server start
app.listen(3000, function() {
  console.log('Server is listening on 3000');
});

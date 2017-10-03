//requirements
const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

//variables
compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Chris thinks you\'re wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Nicole would totally hire you.",
  "It\'s almost beer o\'clock!",
  "You\'re a full-stack unicorn! 🦄"
];

function newCompliment(){
return compliments[Math.floor(Math.random()*compliments.length)];
}

// var randomColor = Math.floor(Math.random()*16777215).toString(16);
colors =  ["#fad8d2", "#ffe34c", "#c7dba7", "#ff7f50", "#6495ed", "#c0c0c0", "#bba7db", "#eead0e", "#008080", "#ffa400", "#61175e", "#c7e0e0", ];
function getColor(){
  return colors[Math.floor(Math.random()*colors.length)];
}

//routes
app.get('/', function(req, res){
  res.redirect('/:name');
});

app.get('/:name', function(req, res){
  var name = req.params.name;
  // var another = newCompliment
  res.render('index', {nameOfperson: name, nextCompliment: newCompliment(), getColors: getColor()});
});



// app.get('/', function(req, res){
//   var name = req.params.name;
//   var next = compliment;
//   res.render('index', {nameOfperson: name, nextCompliment: next});
// })


//server start
app.listen(3000, function(){
  console.log("HTTP server listening on 3000!");
});

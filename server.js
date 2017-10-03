//requirements
const express = require('express');
const app = express();


//view engine setup
app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', function(req, res){
  res.redirect('Welcome! Click, you\'ll be glad you did!' + ' <a href="">Do it, click me!</a>' + typeOfCompliment);
});



app.get('/:compliment', function(req, res){

function getRandomCompliments(){
  var compliments  = [
    "Your instructors love you",
    "High five = ^5",
    "Chris thinks you\'re wicked smart!",
    "Britney Jo is sooo proud of you! :)",
    "Nicole would totally hire you.",
    "It\'s almost beer o\'clock!",
    "You\'re a full-stack unicorn! 🦄"
  ]
  var typeOfCompliment = req.param.compliments;
  var generator = compliments[Math.floor(Math.random()*compliments.length)];

  res.send(getRandomCompliments);
// function getRandomCompliments(){
//   var feelGood = compliments[Math.floor(Math.random()*compliments.length)]
};
})
app.get('/:name', function (req, res){


})


//
// app.get('/:compliments', function(req, res){
//   res.send(compliments, feelGood);
// })













app.listen(3000, function(){
  console.log('HTTP server listening on 3000');

})

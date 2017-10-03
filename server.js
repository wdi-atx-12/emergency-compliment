//requirements
const express = require ('express');
const app = express();

//view engin setup
app.set('views', './views');
app.set('view engine', 'ejs');

//routes
var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Chris thinks you\'re wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Nicole would totally hire you.",
  "It\'s almost beer o\'clock!",
  "You\'re a full-stack unicorn! 🦄"
];

// var randomNum = function random() {
//   return Math.floor(Math.random());
// }
colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];

app.get('/:name', function (req, res){
  var color = colors[Math.floor(Math.random()*colors.length)];
  var addName = req.params.name;
  var randomCompliment = compliments[(Math.floor(Math.random()*compliments.length))];
  res.send(addName + ', ' + randomCompliment);

})






//server start
app.listen(3000, function(){
  console.log('HTTP server listening on 3000');
})


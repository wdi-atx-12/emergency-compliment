const express = require('express');
const app = express();

// server start
app.listen(3000, function(){
  console.log("HTTP server listening to 3000");
});

var compliments = [
  "You're doing....gooooood",
  "Super neato!",
  "Can't believe you did that all on your own",
  "looks like fun-time",
  "you always got it goin' on",
  "it\'s special, that's for sure",
  "You\'re a full-stack unicorn! 🦄"
]

var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];


app.get('/:name', function(req, res){
  var name = req.params.name;
  var randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  res.send("Hello " + name + ", " + randomCompliment);
});


// function colorChange(color){
//   var randomColor = colors[Math.floor(Math.random() * colors.length)];
//   document.body.style.backgroundColor = randomColor;
// };

// colorChange();

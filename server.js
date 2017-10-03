//REQUIREMENTS
const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
//CODE STARTS HERE
var compliments = [
  "Microsoft wants to talk to you.",
  "I heard you created the internet.",
  "You just unfriended Mark Zuckerberg.",
  "You are the best Full Stack Dev",
  "Are you the guy who hacked the entire wework building using a raspberry pi without screen?",
  "Congratulations, you passed the whole course!",
  "You\'re a full-stack potato! 🍠"
]

var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];
var randomColor = colors[Math.floor(Math.random()*colors.length)]


// GET RANDOM COMPLIMENT ON HOMEPAGE
app.get("/", function getRandomCompliments(req, res){
  var givenName = "";
  var ranCompliment = compliments[Math.floor(Math.random()*compliments.length)];
  var randomColor = colors[Math.floor(Math.random()*colors.length)]


  res.render("index", {randomCompliment: ranCompliment, randomBackgroundColor: randomColor, nameGiven: givenName});
});

//GET RANDOM COMPLIMENT WITH YOUR NAME
app.get("/:name", function(req, res){
  var givenName = req.params.name;
  var ranCompliment = compliments[Math.floor(Math.random()*compliments.length)];
  var randomColor = colors[Math.floor(Math.random()*colors.length)]


  res.render("index", {randomCompliment: ranCompliment, randomBackgroundColor: randomColor, nameGiven: givenName});

});

//START MY SERVER
app.listen(3000, function(){
  console.log("HTTP server 3000");
});

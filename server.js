//Requirements
const express = require('express');
const app = express();

//View Engine setup

app.set('view', './views');
app.set('view engine', 'ejs');

//App setup

app.get('/name', function(req, res) {
  //So random compliment that is personalized by name. Okie dokie.
  //So I'm thinking we have an array, and then we multiply the index by Math.Random to get a random index.
  //Then floor it of course.
  var complimentArray = [
    [`You can do this, ${req.params.name}`],
    [`You're not alone, ${req.params.name}. We're with you all the way.`],
    [`Be the swag to my mc-${req.params.name} SWAGGAAA.`],
    [`Yo dawg, I know it's not a hot day, but ${req.params.name} has the chill to my coconut mojito`],
    [`Be the brightest Pokemon trainer out there, ${req.params.name} We'll catch the MAGI(C)KARP with you around.`],
    [`${req.params.name}, you're the pro-est coder I've met since Prototype. Why don't we catch a Date.now()?`]
    [`Are you cringing from these memes yet? If not, ${req.params.name} must be the coding God who keeps beating me in CODE WARS.`]
  ]
})

//Application Start/Test area

app.listen(3000, function() {
  console.log(`HTTP server responding on local host 3000`);
})

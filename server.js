const express = require('express');

const app = express();

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Chris thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Nicole would totally hire you.",
  "It's almost beer o'clock!",
  "You're a full-stack unicorn! 🦄"
];

var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];

function getRandomCompliments() {
	return `${compliments[Math.floor(Math.random()*compliments.length)]}`;
} // end of getRandomCompliments()


//Challenge 1: Make it Pretty
//gets script for changing background.  will change in next commit. should use CSS
function getBackgroundScript() {
	return `<script>document.querySelector('body').style['background-color']='${colors[Math.floor(Math.random()*colors.length)]}';</script>`;
} // end of getBackgroundScript()


//Part 1: Compliment Me
app.get('/', (req,res) => {
	res.send(`${getRandomCompliments()} ${getBackgroundScript()}`);
});

//Part 2: Get Personal
app.get('/:name', (req, res) => {
	res.send(`Hello ${req.params.name.toUpperCase()}!! ${getRandomCompliments()} ${getBackgroundScript()}`);
});

app.listen(3000, () => {
	console.log("HTTP Server 3000 Running");
});

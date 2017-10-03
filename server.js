/// SETUP
const express = require('express');
const app = express();

app.set('views','./views');
app.set('view engine','ejs');
app.use('/css',express.static(__dirname + '/css')); //allows views/index.ejs to use css dir


///CONSTANTS
const compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Chris thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Nicole would totally hire you.",
  "It's almost beer o'clock!",
  "You're a full-stack unicorn! 🦄"
];

const colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];


///CODE
//returns random compliment
function getRandomCompliment() {
	return `${compliments[Math.floor(Math.random()*compliments.length)]}`;
} // end of getRandomCompliment()

//Challenge 1: Make it Pretty
//gets random background color.
function getRandomColor() {
	return `${colors[Math.floor(Math.random()*colors.length)]}`;
} // end of getRandomColor()


//Part 1: Compliment Me
app.get('/', (req,res) => {
	res.render('index', {	user: "",
	 						compliment:`${getRandomCompliment()}`,
							bgcolor: `${getRandomColor()}`}
	);
});

//Part 2: Get Personal
app.get('/:name', (req, res) => {
	res.render('index', {	user: `${req.params.name.toUpperCase()}`,
	 						compliment:`${getRandomCompliment()}`,
							bgcolor: `${getRandomColor()}`}
	);
});

app.listen(3000, () => {
	console.log("HTTP Server 3000 Running");
});

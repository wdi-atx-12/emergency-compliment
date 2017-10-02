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
}

//gets script for changing background.  will change in next commit. should use CSS
function getBackgroundScript() {
	return `<script>document.querySelector('body').style['background-color']='${colors[Math.floor(Math.random()*colors.length)]}';</script>`;
}


//Part 1: Compliment Me
app.get('/', (req,res) => {
	res.send(`${getRandomCompliments()} ${getBackgroundScript()}`);
});

//Part 2: Get Personal
app.get('/:name', (req, res) => {
	res.send(`Hello ${req.params.name.toUpperCase()}!! ${getRandomCompliments()} ${getBackgroundScript()}`);
});

app.get('/color/:color', (req, resp) => {
	resp.send(`You picked the color ${req.params.color.toUpperCase()}!!`);
});


app.get('/bottles_ejs/:bottles', (req, resp) => {
	var current = parseInt(req.params.bottles);
	var next = parseInt(req.params.bottles) - 1;
	resp.render('bottles', {current: current, next: next});
});

app.get('/bottles/:bottles', (req, resp) => {
	var b = parseInt(req.params.bottles);
	var str = "";
	if(b === 0)
		str = `<p>No more bottles of beer on the wall</p><p><a href='./99'>Start again</a></p>`;
	else if (b === 1)
		str = `<p><b>${b}</b> bottle of beer on the wall, <br /> <b>${b}</b> bottle of beer <br />
				<a href='./${b-1}'>take one down</a>, pass it around ...</p>`;
	else
		str = `<p><b>${b}</b> bottles of beer on the wall, <br /> <b>${b}</b> bottles of beer <br />
				<a href='./${b-1}'>take one down</a>, pass it around ...</p>`;
	res.send(str);
});


//.params:
// - name: name of the person, place, or thing
//.query:
// - color: text color
// - bgcolor: background color
app.get('/thank/:name', (req, res) => {
	console.log(`${req.params.name}`);
	res.send(`<h1 style='color:${req.query.color};'>Thank you ${req.params.name}!</h1>
	<script>document.querySelector("body").style['background-color']='${req.query.bgcolor}';</script>`);
});


//.params:
// - operator: name of the operation (add, subtract, multiply, divide)
//.query:
// - x: operand 1
// - x: operand 2
app.get('/math/:operator', (req, res) => {
	var x = parseInt(req.query.x);
	var y = parseInt(req.query.y);
	var out = "";

	switch(req.params.operator.toLowerCase())	{
		case "add": out = `${x} + ${y} = ${x+y}`; break;
		case "subtract": out = `${x} - ${y} = ${x-y}`; break;
		case "multiply": out = `${x} * ${y} = ${x*y}`; break;
		case "divide": out = `${x} / ${y} = ${x/y}`; break;
		default: out = `INVALID OPERATION: ${req.params.operator} | Try add, subtract, multiply, divide`;
	} // end of switch

	res.send(`<h1>${out}</h1>`);
});

app.listen(3000, () => {
	console.log("HTTP Server 3000 Running");
});

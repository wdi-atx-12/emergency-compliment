//setup
const express = require('express');
const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');


var compliments = compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Chris thinks you\'re wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Nicole would totally hire you.",
  "It\'s almost beer o\'clock!",
  "You\'re a full-stack unicorn! 🦄"
];

//handle requests
app.get('/', function(req,res){
	res.redirect('/ ')
})

app.get('/:name',function(req,res){
	var randComp = compliments[randIndex(compliments)];
	var color = randColor();
	res.render('index',{compliment: randComp, name: req.params.name, color: color});

})

app.listen(3000, function(){
	console.log('http server servin up dem fresh beats at 3k yo');
})

//utility
function randIndex(arr){
	return Math.floor(Math.random()*arr.length);
}

function randColor(){
	return `rgba(${randNum(255)},${randNum(255)},${randNum(255)},${randNum()})`
}

function randNum(n){
	n = n || 1;
	return n ===1 ?  Math.random() * n :  Math.floor(Math.random() * n);
}
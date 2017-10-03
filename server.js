const express = require('express');
const app = express();

let compliments = [
"Your instructors love you",
"High five = ^5",
"Chris thinks you\'re wicked smart!",
"Britney Jo is sooo proud of you! :)",
"Nicole would totally hire you.",
"It\'s almost beer o\'clock!",
"You\'re a full-stack unicorn! 🦄"
]

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', {comp: getCompliment(), bgColor: getBGColor()});
})

app.get('/:name', function (req, res) {
  res.render('index', {comp: getCompliment(req.params.name)})
})

app.listen(3000, function () {
  console.log('listening!');
})

function getCompliment(name) {
  let str = name ? `${name}, ` : '';
  return str + compliments[Math.floor(Math.random() * compliments.length)];
}

function getBGColor() {
  let colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];
  return colors[Math.floor(Math.random() * colors.length)];
}

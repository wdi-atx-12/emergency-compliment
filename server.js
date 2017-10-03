const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

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

app.post('/', function (req, res) {
  compliments.push(req.body.newComp);
  res.render('index', {comp: req.body.newComp, bgColor: getBGColor()});
})

app.get('/:name', function (req, res) {
  res.render('index', {comp: getCompliment(req.params.name), bgColor: getBGColor()})
})

app.listen(3000, function () {
  console.log('listening!');
})

function getCompliment(name) {
  let str = name ? `${name}, ` : '';
  return str + compliments[Math.floor(Math.random() * compliments.length)];
}

function getBGColor() {
  let colors = ["red", "blue","light-blue","pink", "purple", "teal", "green", "orange"];
  return colors[Math.floor(Math.random() * colors.length)];
}

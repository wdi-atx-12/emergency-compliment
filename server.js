//Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Chris thinks you\'re wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Nicole would totally hire you.",
  "It\'s almost beer o\'clock!",
  "You\'re a full-stack unicorn! 🦄"
];

var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];

//Functions
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};


//App Setup
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', express.static('./public'));

//Routes

app.get('/add', function(req,res){
  res.render('add');
})

app.post('/add', function(req,res){
  const newCompliment = (req.body['new-compliment-text']);
  if (newCompliment && newCompliment.length > 0){
    compliments.push(newCompliment);
    res.send("added compliment");
  }else{
    res.send("nah, try adding another one.");
  };
})

app.get('/', function(req, res){
  var complimentToSend = compliments[Math.floor(Math.random()*compliments.length)];
  var backgroundColor = colors[Math.floor(Math.random()*colors.length)];
  var textColor = colors[Math.floor(Math.random()*colors.length)];
  res.render('index', {compliment: complimentToSend, color: textColor, background: backgroundColor});
})

app.get('/:name', function(req, res){
  var name = capitalizeFirstLetter(req.params.name);
  var complimentToSend = name + ", " + compliments[Math.floor(Math.random()*compliments.length)];
  var backgroundColor = colors[Math.floor(Math.random()*colors.length)];
  var textColor = colors[Math.floor(Math.random()*colors.length)];
  res.render('index', {compliment: complimentToSend, color: textColor, background: backgroundColor});
})

//Server Start
app.listen(3000, function(){
  console.log("we out here servering");
})

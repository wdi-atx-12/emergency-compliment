const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', './views');
app.set('view engine', 'ejs');

let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Chris thinks you\'re wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Nicole would totally hire you.",
  "It\'s almost beer o\'clock!",
  "You\'re a full-stack unicorn! 🦄"
];

colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];



app.get('/', function(req, res) {
    var color = colors[Math.floor(Math.random()*colors.length)];
    var compliment = compliments[Math.floor(Math.random()*compliments.length)];
    res.render('index', {color: color, compliment: compliment});
});


app.get('/:name', function(req, res) {

    let compliments = [
      "Your instructors love you",
      "High five = ^5",
      req.params.name + " thinks you\'re wicked smart!",
      req.params.name + " is sooo proud of you! :)",
      req.params.name + " would totally hire you.",
      "It\'s almost beer o\'clock!",
      "You\'re a full-stack unicorn! 🦄"
    ];
    var color = colors[Math.floor(Math.random()*colors.length)];
    var compliment = compliments[Math.floor(Math.random()*compliments.length)];
    res.render('index', {color: color, compliment: compliment});
});

app.post('/', function(req, res) {
    //console.log(req.body.compliment);
    compliments.push(req.body.compliment);
    res.redirect('/');
});

app.listen(3000, function() {
    console.log("HTTP server listening on port 3000");
})

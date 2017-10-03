// Dependencies

const express =require('express');



//App Setup
const app = express();

//views engine setup

app.set('views', './views');
app.set('view engine', 'ejs');

//compliments code

app.get('/', function(req, res){
  var compliments =[
  "Your instructors love you",
  "High five = ^5",
  "Chris thinks you\'re wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Nicole would totally hire you.",
  "It\'s almost beer o\'clock!",
  "You\'re a full-stack unicorn! 🦄"
];
    var comp = compliments[Math.floor(Math.random()*compliments.length)];
    console.log(comp);
    res.send('Compliments: '+comp+'.');

    res.render('index', {randomComp: comp});
});

app.get('/name', function(req, res){
   var name = req.query.name;
   res.render('index', {inputName: name});
 });

//App start

app.listen(3000, function(){
    console.log('http server listening on 3000');

});

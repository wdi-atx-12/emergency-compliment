const express = require('express');
const hbs = require('hbs');
const app = express();


require('./controllers/routes.js')(app);




const PORT = process.env.PORT || 3000;


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));



hbs.registerHelper('getCurrentYear', () => {
return new Date().getFullYear();
});

















app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Visit http://localhost:${PORT} in your browser`);
  }
});
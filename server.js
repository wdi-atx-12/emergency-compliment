//Requirements
const express = require('express');
const app = express();

//View Engine setup

app.set('view', './views');
app.set('view engine', 'ejs');

//App setup

app.get('/name', function(req, res) {
  //So random compliment that is personalized by name. Okie dokie.
  
})

//Application Start/Test area

app.listen(3000, function() {
  console.log('HTTP server responding on local host 3000');
})

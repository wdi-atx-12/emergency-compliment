// dependencies/requirements for server to do server stuff
const express = require('express');
const app = express();

// app code
app.get('/', function(req, res){
  rezz.send('SQUIRRELY SQUIRREL SQUANCHES SQUIRRELS');
})

// app start
app.listen(3000, function(){
  console.log('http server in bay 30000 ready for liftoff');
});

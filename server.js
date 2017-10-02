//Establish Dependencies
const express = require('express');
const app = express();

// Call routes
app.get('/', function(res, req){
  res.send("Hello from serverjs we are on port 3000.");
  console.log('i started');
});

// // get personal.
// app.get('/:name', function(res, req){
//   res.redirect('personal');
// });

// Start server
app.listen(3000, function(){
  console.log("Server active, listening on Port 3000.");
});

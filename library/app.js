var express = require('express'); // This pulls in a package called Express.
var app = express(); // This gives us an instance of express that we can do stuff with.

var port = 5000; // This is the port that Express listens on.

/**
 * function(err) is a callback.
 * Callback - a function that is executed by another function
 * in our case app.listen() will execute function(err) once it
 * is done whatever it will be doing.
 */
app.listen(port, function(err){
    console.log('Running Server on Port ' + port);
});
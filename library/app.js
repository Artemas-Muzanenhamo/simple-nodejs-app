var express = require('express'); // This pulls in a package called Express.
var app = express(); // This gives us an instance of express that we can do stuff with.

var port = process.env.PORT || 5000; // This is the port that Express listens on.

/**
 * app.use() - Use third-party middleware to add functionality to Express apps.
 */
app.use(express.static('public')); // Serves static resources in the `public` directory
app.use(express.static('src/views')); // Serves static resources in the `src/views` directory

/**
 * app.get() will allow routing by allowing requests to be able to route
 * to a desired location on the application and get a response.
 */
app.get('/', function(req, res){
    res.send('Hello World');
});

/**
 * function(err) is a callback.
 * Callback - a function that is executed by another function
 * in our case app.listen() will execute function(err) once it
 * is done whatever it will be doing.
 */
app.listen(port, function(err){
    console.log('Running Server on Port ' + port);
});
var express = require('express'); // This pulls in a package called Express.
var app = express(); // This gives us an instance of express that we can do stuff with.

var port = process.env.PORT || 5000; // This is the port that Express listens on.
var nav = [{
    Link: '/Books',
    Text: 'Book'
}, {
    Link: '/Authors',
    Text: 'Author'
}];
var bookRouter = require('./src/routes/bookRoutes')(nav);
var authorRouter = require('./src/routes/authorRoutes')(nav);

/**
 * app.use() - Use third-party middleware to add functionality to Express apps.
 */
app.use(express.static('public')); // Serves static resources in the `public` directory

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Authors', authorRouter);

/**
 * app.get() will allow routing by allowing requests to be able to route
 * to a desired location on the application and get a response.
 */
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
            Link: '/Books', Text: 'Books'
        }, {
            Link: '/Authors', Text: 'Authors'
        }]
    });
});

/**
 * function(err) is a callback.
 * Callback - a function that is executed by another function
 * in our case app.listen() will execute function(err) once it
 * is done whatever it will be doing.
 */
app.listen(port, function (err) {
    console.log('Running Server on Port ' + port);
});
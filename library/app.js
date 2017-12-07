var express = require('express'); // This pulls in a package called Express.
var app = express(); // This gives us an instance of express that we can do stuff with.

var port = process.env.PORT || 5000; // This is the port that Express listens on.
var bookRouter = express.Router();

/**
 * app.use() - Use third-party middleware to add functionality to Express apps.
 */
app.use(express.static('public')); // Serves static resources in the `public` directory

app.set('views', './src/views');
app.set('view engine', 'ejs');

var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
    },
    {
        title: 'Les Misérables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        read: false
    },
    {
        title: 'The Time Machine',
        genre: 'Science Fiction',
        author: 'H. G. Wells',
        read: false
    },
    {
        title: 'A Journey into the Center of the Earth',
        genre: 'Science Fiction',
        author: 'Jules Verne',
        read: false
    },
    {
        title: 'The Dark World',
        genre: 'Fantasy',
        author: 'Henry Kuttner',
        read: false
    },
    {
        title: 'The Wind in the Willows',
        genre: 'Fantasy',
        author: 'Kenneth Grahame',
        read: false
    },
    {
        title: 'Life On The Mississippi',
        genre: 'History',
        author: 'Mark Twain',
        read: false
    },
    {
        title: 'Childhood',
        genre: 'Biography',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
    }
];

/**
 * When we use the res.render(), it will look at the app.set('views', './src/views') and
 * find the view specified in the render() function.
 */
bookRouter.route('/')
    .get(function (req, res) {
        res.render('books', {
            title: 'Books',
            nav: [{
                Link: '/Books', Text: 'Books'
            }, {
                Link: '/Authors', Text: 'Authors'
            }],
            books: books
        });
    });

bookRouter.route('/single')
    .get(function (req, res) {
        res.send('Hello Single Book');
    });

app.use('/Books', bookRouter);

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
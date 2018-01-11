var express = require('express');

var authorRouter = express.Router();

var router = function (nav) {
    // authors data
    var authors = [
        {
            author: 'Lev Nikolayevich Tolstoy'
        },
        {
            author: 'Victor Hugo'
        },
        {
            author: 'H. G. Wells'
        },
        {
            author: 'Jules Verne'
        },
        {
            author: 'Henry Kuttner'
        },
        {
            author: 'Kenneth Grahame'
        },
        {
            author: 'Mark Twain'
        },
        {
            author: 'Lev Nikolayevich Tolstoy'
        }
    ];

    authorRouter.route('/')
        .get(function (req, res) {
            res.render('authorListView', {
                title: 'Authors',
                nav: nav,
                books: authors
            });
        });

    authorRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('authorView', {
                title: 'Authors',
                nav: nav,
                book: authors[id]
            });
        });

    return authorRouter;
};

module.exports = router;
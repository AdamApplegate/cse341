const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

//router.use();

const books = [];

//Display the input page
router.get('/', (req, res, next) => {
    res.render('pages/pr02/index.ejs', {
        path: '/pr02',
        title: 'PR02',
        books
    });
});

//Handle the user information when submit is clicked
router.post('/add-book', (req, res, next) => {
    //Create a book object for the array
    let book = {
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
        price: req.body.price
    }

    //Add the book object to the array
    books.push(book);

    //Redirect to the page for updated array
    res.redirect('/pr02');
});

module.exports = router;
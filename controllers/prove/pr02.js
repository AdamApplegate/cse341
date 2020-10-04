const books = [];

exports.getPr02 = (req, res, next) => {
    res.render('pages/pr02/index.ejs', {
        path: '/pr02',
        title: 'PR02',
        books
    });
};

exports.postPr02 = (req, res, next) => {
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
};
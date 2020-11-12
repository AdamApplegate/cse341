const fs = require('fs');
const path = require('path');

let products = [];
const ITEMS_PER_PAGE = 10;

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    '/team/ta03.json'
);

exports.getPR08 = (req, res, next) => {
    const page = +req.query.page || 1;
    let totalItems;

    fs.readFile(p, (err, fileContent) => {
        if (err) {
            console.log('Couldn\'t read JSON');
            return [];
        } else {
            products = JSON.parse(fileContent);
        }
    });

    totalItems = products.length;

    res.render('pages/provePages/pr08/index', {
        pageTitle: this.getPR08,
        path: '/pr08',
        products: products,
        currentPage: page,
        hasNextPage: ITEMS_PER_PAGE * page < totalItems,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)
    });
};
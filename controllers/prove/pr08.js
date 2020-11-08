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
        pageTitle: this.getPR09,
        path: '/pr09',
        products: products,
        currentPage: page,
        hasNextPage: ITEMS_PER_PAGE * page < totalItems,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)
    });

    // console.log('');
    // console.log('Current page: ' + page);
    // console.log('# of pages: ' + totalItems / 10);
    // console.log('# of products: ' + totalItems);
    // console.log('Has next page: ' + (ITEMS_PER_PAGE * page));
    // console.log('Last page: ' + Math.ceil(totalItems / ITEMS_PER_PAGE));
    // console.log('');
};
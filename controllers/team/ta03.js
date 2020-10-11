const fs = require('fs');
const path = require('path');
const { createBrotliCompress } = require('zlib');

const TeamProduct = require('../../models/team/product.js');
const { search } = require('../../util/path.js');

let products = [];
let searchProducts = [];
let searched = false;

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    '/team/ta03.json'
);

exports.getTA03 = (req, res, next) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            console.log('Couldn\'t read JSON');
            return [];
        } else {
            products = JSON.parse(fileContent);
            // console.log(products);
        }
    });

    res.render('pages/teamPages/ta03', {
        title: 'Team Activity 03',
        path: '/ta03',
        products: products,
        searchProducts: searchProducts,
        searched: searched
    });
    searched = false;
    searchedProducts = [];
};

exports.postTA03 = (req, res, next) => {
    products.forEach(product => {
        if (product.name.includes(req.body.search)) {
            searchProducts.push(product); 
        }
    });
    searched = true;
    res.redirect('/ta03');
};


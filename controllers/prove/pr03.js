const fs = require('fs');
const path = require('path');

const TeamProduct = require('../../models/team/product.js');

let products = [];


const p = path.join(
    path.dirname(require.main.filename),
    'data/prove',
    'products.json'
);

exports.getPR03 = (req, res, next) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            console.log(`Couldn\t read JSON at ${p}`);
            return [];
        } else {
            products = JSON.parse(fileContent);
        }
    });
    
    res.render('pages/provePages/pr03/index.ejs', {
        path: '/pr03',
        title: 'PR03',
        products: products
    });
};

exports.postPR03 = (req, res, next) => {

};

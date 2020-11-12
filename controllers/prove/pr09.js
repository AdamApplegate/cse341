const { urlencoded } = require('body-parser');
const fetch = require('node-fetch');

const ITEMS_PER_PAGE = 10;

let pokemon = [];

exports.getPR09 = (req, res, next) => {
    const page = +req.query.page || 1;
    let totalItems = 1050;

    let URL = 'https://pokeapi.co/api/v2/pokemon?offset=' + (page * 10 - 10) + '&limit=10';

    fetch(URL)
        .then(response => {
            if (response.status != 200) {
                console.log('There was a problem.  Status code: ' + response.status);
                return;
            }

            response.json().then(data => {
                for (i = 0; i < 10; i++) {
                    pokemon.push(data.results[i].name);
                }
            });
        });

    res.render('pages/provePages/pr09/index', {
        pageTitle: this.getPR09,
        path: '/pr09',
        pokemon: pokemon,
        currentPage: page,
        hasNextPage: ITEMS_PER_PAGE * page < totalItems,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)
    });

    //Reset the list
    pokemon.length = 0;
};
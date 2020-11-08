const fetch = require('node-fetch');

const ITEMS_PER_PAGE = 10;
const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10';

const pokemon = [];

exports.getPR09 = (req, res, next) => {
    pokemon.length = 0;
    const page = +req.query.page || 1;
    let totalItems;

    fetch(URL)
        .then(response => {
            if (response.status != 200) {
                console.log('There was a problem.  Status code: ' + response.status);
                return;
            }

            response.json().then(data => {
                console.log(data.results);
                for (p in data.results) {
                    pokemon.push(data.results[p]);
                }
            })
            totalItems = pokemon.length
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
};
const proveRoutes = require('express').Router();

const pr01Routes = require('./pr01');
const pr02Routes = require('./pr02');
const pr03Routes = require('./pr03');

proveRoutes
    .use('/pr01', pr01Routes) // Prove Activities
    .use('/pr02', pr02Routes)
    .use('/pr03', pr03Routes)
    .get('/', (req, res, next) => {
        res.render('pages/provePages', {
            pageTitle: 'Prove Assignments',
            path: '/'
        });
    })

module.exports = proveRoutes;
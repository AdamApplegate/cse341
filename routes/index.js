const routes = require('express').Router();

const teamRoutes = require('./teamRoutes');
const proveRoutes = require('./proveRoutes');
const commerceRoutes = require('./commerceRoutes');
const errorController = require('../controllers/error');

routes
    .use('/team', teamRoutes)
    .use('/prove', proveRoutes)
    .use('/commerce', commerceRoutes)
    .get('/', (req, res, next) => {
        res.render('pages/index', {pageTitle: 'Welcome to Adam Applegate\'s CSE341 repo', path: '/'});
       })
    .use(errorController.get404)

module.exports = routes;
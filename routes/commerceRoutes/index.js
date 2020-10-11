const commerceRoutes = require('express').Router();
const adminRoutes = require('./admin');
const shopRoutes = require('./shop');


commerceRoutes
    .get('/', (req, res, next) => {
        res.render('pages/commercePages/', {
            pageTitle: 'eCommerce Application',
            path: '/commerce'
        });
    })

    .use('/admin', adminRoutes)
    .use('/shop', shopRoutes)

module.exports = commerceRoutes;
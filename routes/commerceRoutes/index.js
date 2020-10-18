const commerceRoutes = require('express').Router();
const adminRoutes = require('./admin');
const shopRoutes = require('./shop');
const authRoutes = require('./auth');


commerceRoutes
    .get('/', (req, res, next) => {
        res.render('pages/commercePages/', {
            pageTitle: 'eCommerce Application',
            path: '/commerce'
        });
    })
    
    .use('/admin', adminRoutes)
    .use('/shop', shopRoutes)
    .use(authRoutes);

module.exports = commerceRoutes;
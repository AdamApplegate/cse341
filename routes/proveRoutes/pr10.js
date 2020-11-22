const express = require('express');
const { post } = require('request');
const router = express.Router();

// Path to your JSON file, although it can be hardcoded in this file.
const dummyData = require('../../data/prove/pr10.json');

router.get('/', (req, res, next) => {
    res.render('pages/provePages/pr10/index.ejs', {
        path: '/pr10',
    });
});

// router.get('/fetchAll', (req, res, next) => {
//     res.json(dummyData);
// });

// router.post('/insert', async (req, res, next) => {
//    .then( => {

//    })
//    .catch(err => {

// //    });
// });

module.exports = router;
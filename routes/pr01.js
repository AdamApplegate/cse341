const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/pr01/form', { 
        title: 'Prove Activity 1', 
        path: '/pr01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/submit',(req, res, next) => {
    console.log(req.body.i1);
    console.log(req.body.i2);

    res.render('pages/pr01/display_input', { 
        title: 'Prove Assignment 1', 
        path: '/pr01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        input1: req.body.i1,
        input2: req.body.i2,
    });
});

module.exports = router;
//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

const usernames = [];

router.get('/', (req, res, next) => {
    res.render('pages/team/ta02', {
        path: '/ta02',
        title: 'Team Activity 02',
        usernames: usernames,
        isNotFound: false,
        isDuplicate:false
    });
});

router.post('/addUser', (req, res, next) => {
    usernames.forEach(item => {
        if (item === req.body.usernameAdd) {
            res.render('pages/team/ta02', {
                title: 'Team Activity 02',
                path: '/ta02',
                usernames: usernames,
                isNotFound: false,
                isDuplicate: true
            });
        }
        else { 
            usernames.push(req.body.usernameAdd);
            
            res.render('pages/team/ta02', {
                title: 'Team Activity 02',
                path: '/ta02',
                usernames: usernames,
                isNotFound: false,
                isDuplicate:false
            });
        }
    });
});


router.post('/removeUser', (req, res, next) => {
    usernames.forEach(item => {
        if (item === req.body.usernameRemove) {
            let position = usernames.findIndex((item) => { item === req.body.usernameRemove });
            usernames.splice(position, 1);

            res.render('pages/team/ta02', {
                title: 'Team Activity 02',
                path: '/ta02',
                usernames: usernames,
                isNotFound: false,
                isDuplicate:false
            });
        } 
        else {
            res.render('pages/team/ta02', {
                title: 'Team Activity 02',
                path: '/ta02',
                usernames: usernames,
                isNotFound: true,
                isDuplicate:false
            });
        }

    });
});

module.exports = router;
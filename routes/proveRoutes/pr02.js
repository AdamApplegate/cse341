const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const pr02Controller = require('../../controllers/prove/pr02');

const router = express.Router();

//Display the input page
router.get('/', pr02Controller.getPr02);

//Handle the user information when submit is clicked
router.post('/add-book', pr02Controller.postPr02);

module.exports = router;
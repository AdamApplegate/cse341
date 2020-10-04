const express = require('express');
const router = express.Router();

const pr01Controller = require('../../controllers/prove/pr01');

router.get('/', pr01Controller.getPr01);

router.post('/submit', pr01Controller.postPr01);

module.exports = router;
const express = require('express');
const router = express.Router();

const pr09Controller = require('../../controllers/prove/pr09');

router.get('/', pr09Controller.getPR09);

// router.post('/submit', pr09Controller.postPR09);

module.exports = router;
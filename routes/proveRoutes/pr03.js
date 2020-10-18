const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');

const pr03Controller = require('../../controllers/prove/pr03');

const router = express.Router();

router.get('/', pr03Controller.getPR03);

module.exports = router;
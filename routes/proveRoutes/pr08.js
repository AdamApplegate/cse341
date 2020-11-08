const express = require('express');
const router = express.Router();

const pr08Controller = require('../../controllers/prove/pr08');

router.get('/', pr08Controller.getPR08);

module.exports = router;
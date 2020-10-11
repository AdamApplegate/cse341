//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const ta03Controller = require('../../controllers/team/ta03');

router.get('/', ta03Controller.getTA03);

router.post('/search-item', ta03Controller.postTA03);

module.exports = router;
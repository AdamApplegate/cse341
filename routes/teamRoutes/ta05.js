const express = require('express');
const router = express.Router();

const ta05Controller = require('../../controllers/team/ta05');

router.get('/', ta05Controller.getTA05);

router.post('/change-style', ta05Controller.postTA05);

router.post('/increment', ta05Controller.incrementCounter);

router.post('/decrement', ta05Controller.decrementCounter);

router.post('/reset', ta05Controller.resetSession);

module.exports = router;
const express = require('express');
const router = express.Router();
const knivesCtrl = require('../../controllers/api/knives');

// All paths start with '/api/knives'
router.get('/', knivesCtrl.index)

router.post('/', knivesCtrl.create)

module.exports = router;
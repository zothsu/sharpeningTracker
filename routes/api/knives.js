const express = require('express');
const router = express.Router();
const knivesCtrl = require('../../controllers/api/knives');

// All paths start with '/api/knives'
router.get('/', knivesCtrl.index)

router.post('/', knivesCtrl.create)

router.get('/:id', knivesCtrl.show)

router.post('/:id/sharpening', knivesCtrl.createSharpening )

router.post('/:id/note', knivesCtrl.createNote)

module.exports = router;
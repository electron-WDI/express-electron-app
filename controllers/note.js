const express = require('express');
const router = express.Router();

const Notes = require('../models/note');

router.get('/', Notes.findAll, 
	(req, res) => {
		res.json({
			notes: res.locals.allNotes
		});
	});

module.exports = router;
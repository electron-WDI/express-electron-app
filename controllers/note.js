const express = require('express');
const router = express.Router();

const Notes = require('../models/note');

router.get('/', Notes.findAll, 
	(req, res) => {
		res.json({
			notes: res.locals.allNotes
		});
	});

router.get('/:id', Notes.findById,
	(req, res) => {
		res.json({
			notes: res.locals.note
		});
	});

router.post('/', Notes.create,
	(req, res) => {
		res.json({
			notes: res.locals.newNotes
		});
	});








module.exports = router;
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

// router.put('/:id', Notes.update,
// 	(req, res) => {
// 		res.json({
// 			notes: res.locals.edit
// 		});
// 	});


router.delete('/:id', Notes.destroy,
	(req, res) => {
		res.send('deleted')
	});







module.exports = router;
const db = require('../db/config');
const Notes = {};

Notes.findAll = (req, res, next) => {
	db.many('SELECT * FROM saved')
	.then((allNotes) => {
		res.locals.allNotes = allNotes;
		next();
	})
	.catch(err => {
		console.log(`ERROR grabbing all notes: ${err}`)
	});
};

module.exports = Notes
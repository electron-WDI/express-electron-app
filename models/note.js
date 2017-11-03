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

Notes.findById = (req, res, next) => {
	const { id } = req.params;
	db.oneOrNone(`SELECT * FROM saved WHERE id=$1`, [id])
	.then((note) => {
		res.locals.note = note;
		next();
	})
	.catch(err => {
		console.log(`Error grabbing note by id: ${err}`);
	});
};


Notes.create = (req, res, next) => {
	const { title, description } = req.body;
	db.one(`INSERT INTO saved 
		(title, description) VALUES 
		($1, $2) RETURNING *`, [title, description])
	.then((newNotes) => {
		res.locals.newNotes = newNotes;
		next();
	})
	.catch(err => {
		console.log(`Error creating NEW - ${err}`);
	});
};


// Notes.update = (req, res, next) => {
// 	const { title, description } = req.body;
// 	const { id } = req.params;
// 	db.oneOrNone(`UPDATE saved SET 
// 		title=$1, description=$2)
// 		RETURNING *`, [title, description, id])
// 	.then(edit => {
// 		res.locals.edit = edit;
// 		next();
// 	})
// 	.catch(err => {
// 		console.log(`ERROR UPDATING: ${err}`)
// 	});
// };

Notes.destroy = (req, res, next) => {
	const { id } = req.params;
	db.none(`DELETE FROM saved WHERE id=$1`, [id])
	.then(() => next())
	.catch(err => {
		console.log(`Could not destroy note: ${err}`)
	});
};















module.exports = Notes
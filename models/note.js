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
// 	const { name, year, grapes, country, region, description, picture, price } = req.body;
// 	const { id } = req.params;
// 	console.log(req.body);
// 	console.log(req.params);
// 	db.oneOrNone(`UPDATE saved SET 
// 		name=$1, year=$2, grapes=$3, country=$4, region=$5, description=$6, picture=$7, price=$8 WHERE id=$9
// 		RETURNING *`, [name, year, grapes, country, region, description, picture, price, id])
// 	.then(edit => {
// 		res.locals.edit = edit;
// 		next();
// 	})
// 	.catch(err => {
// 		console.log(`ERROR UPDATING: ${err}`)
// 	});
// };

// Notes.destroy = (req, res, next) => {
// 	const { id } = req.params;
// 	db.none(`DELETE FROM saved WHERE id=$1`, [id])
// 	.then(() => next())
// 	.catch(err => {
// 		console.log(`Could not destroy wine: ${err}`)
// 	});
// };















module.exports = Notes
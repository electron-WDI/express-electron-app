const express   			  = require('express');
const app       			  = express();
const port       				= 3000;

const notesController 	= require('./controllers/note.js');
const bodyParser				= require('body-parser');

const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/notes', notesController)


app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})
const pgp = require('pg-promise')();


const cn = {
    host: 'localhost',
    port: 5432,
    database: 'electron_db',
    user: 'matthewkim'
}

const db = pgp(cn);


module.exports = db;
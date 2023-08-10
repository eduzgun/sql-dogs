const fs = require("fs");
require('dotenv').config();

const db = require ('./db');

const sql = fs.readFileSync('setup.sql').toString();



db.query(sql)
    .then(data => console.log('setup complete'))
    .catch(error => console.log(error));
require("dotenv").config()
const { Pool } = require("pg");

// Connect to the database - requires a DB_URL value to have been loaded into the environment
const db = new Pool({
    connectionString: process.env.DB_URL
})

// Export the connection pool so other files can access it
module.exports = db;
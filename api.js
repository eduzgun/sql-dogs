const express = require("express");
const cors = require("cors");

const db = require('./db');

const api = express();

// Add standard middleware
api.use(express.json());
api.use(cors());

// Api routes

api.get("/", (req, res) => res.send("The Wrongs API: track injustice."));

api.get("/dogs", async (req, res) => {

    // The database isn't controlled by this app, so must be async
    const data = await db.query("SELECT * FROM dogs");
    res.send(data.rows);
})

module.exports = api;
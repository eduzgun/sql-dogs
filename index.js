require('dotenv').config(); // Load environment variables

const api = require("./api");

api.listen(process.env.PORT, () => {
    console.log(`API listening on port ${process.env.PORT}...`)
});
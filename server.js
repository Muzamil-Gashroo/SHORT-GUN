const connectDB = require("./connections/connect");

require('dotenv').config();

const PORT = process.env.PORT;

const app = require("./index");

connectDB();

app.listen(PORT, () => { console.log("Server On") });
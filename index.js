
const express = require('express');

const userCreate = require('./routes/userCreate');

const userRead = require('./routes/userRead');

const app = express();

app.use(express.json());

app.use('/create', userCreate);

app.use('/read', userRead);

module.exports = app;
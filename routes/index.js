const express = require('express');
const app = express();

app.use(require('./food'))

module.exports = app;
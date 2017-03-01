'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const messages = require('./routes/performance');

app.use(bodyParser.json());
app.use('/performance', messages);

const port = process.env.PORT || 5000;

app.listen(port, ()=> {
  console.log('Listening on port', port);
});

module.exports = app;
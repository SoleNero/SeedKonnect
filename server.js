'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const variety = require('./routes/variety');
const city = require('./routes/city');

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(variety);
app.use('/city', city);



app.listen(port, ()=> {
  console.log('Listening on port', port);
});

module.exports = app;
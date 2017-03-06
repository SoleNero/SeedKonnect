'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const variety = require('./routes/variety');
const city = require('./routes/city');
const city_varieties = require('./routes/city_varieties');

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/variety', variety);
app.use('/city', city);
app.use('/city_varieties', city_varieties);



app.listen(port, ()=> {
  console.log('Listening on port', port);
});

module.exports = app;
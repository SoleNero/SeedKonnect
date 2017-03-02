'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const performance = require('./routes/performance');
const city = require('./routes/city');



app.use(bodyParser.json());

app.use('/performance', performance);
app.use('/city', city);



app.listen(port, ()=> {
  console.log('Listening on port', port);
});

module.exports = app;
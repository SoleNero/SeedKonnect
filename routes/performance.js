'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();

router.get('/', (res, req, next) => {
  knex('performance')
  
})

module.exports = router;

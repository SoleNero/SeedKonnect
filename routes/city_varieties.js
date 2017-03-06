'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();


router.get('/', (req, res, next) => {
  let cities;
  knex('city')
  .orderBy('city', 'asc')
  .join('city_varieties', 'city.id', '=', 'city_varieties.city_id')
  .join('variety', 'city_varieties.variety_id', '=', 'variety.id')
  .then(data => {
        res.send(data);
      })
    })

module.exports = router;

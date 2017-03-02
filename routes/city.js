'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();


//GET LOCALIZATION FOR MAP
//from city_name grab city_name, long&lati

//get all cities
router.get('/', (req, res, next) => {
  knex('city')
    .orderBy('id')
    .then(data => {
      const cityList = data;
      res.send(cityList);
    })
    .catch(err => {
      next(err);
    });
});

//get city by id
router.get('/:id', (req, res, next) =>{
  const id = Number.parseInt(req.params.id);
  knex('city')
    .where('id', id)
    .then((data) => {
      const city = data
      res.send(city);
  })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
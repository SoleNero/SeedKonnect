'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();


//GET VARIETY AND SPECIES LISTS
//from species get list of species_name in the location
//from variety get list of variety_name in the location
//stetch from rank grab rank and change for the best('green') 
//or worst ('red')

router.get('/variety', (req, res, next) => {
  knex('variety')
  .orderBy('variety_name')
  // .where ({
  //   'variety.species_id': 'tomato'
  // })
  .then(data => {
    const varietyList = data;
    res.send(varietyList);
  })
  .catch(err => {
    res.send(err);
  });
});


//GET VAEIRTY INFO BY ID
//from variety get variety_name; fruit_color, fruit_size, 
//maturity_days, variety_image
//from species get species_name
//from rank get rank

module.exports = router;

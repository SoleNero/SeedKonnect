'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();


//GET VARIETY AND SPECIES LISTS
//from species get list of species_name in the location
//from variety get list of variety_name in the location
//stetch from rank grab rank and change for the best('green') 
//or worst ('red')

router.get('/', (req, res, next) => {
  knex('variety')
  .orderBy('variety_name')
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
//maturity_days, variety_image, species

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    knex('variety')
        .select('id', 'variety_name', 'species', 'variety_image', 'fruit_color', 'size', 'maturity_days')
        .where('variety_name', id)
        .then((data) => {
            res.send(data[0]);
            console.log(data[0]);
        })
        .catch((err) => {
            res.send(err);
        });
});

//from rank get rank

module.exports = router;

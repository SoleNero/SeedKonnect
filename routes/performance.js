'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();

//GET LOCALIZATION FOR MAP
//from city_name grab city_name, long&lati

//GET VARIETY AND SPECIES LISTS
//from species get list of species_name in the location
//from variety get list of variety_name in the location
//from rank grab rank and change for the best('green') 
//or worst ('red')

//GET VAEIRTY INFO BY ID
//from variety get variety_name; fruit_color, fruit_size, 
//maturity_days, variety_image
//from species get species_name
//from rank get rank

module.exports = router;

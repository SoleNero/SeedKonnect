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
  // .select('join_table.variety_id', 'variety.id', 'variety_name', 'species_name')
  .then(data => {
        console.log(data);
        res.send(data);
      })
    })

module.exports = router;



// router.get('/books', function(req, res, next) {
//   var books;
//   knex.select('*').from('books').orderBy('title', 'asc')
//     .then(function(data){
//       books = data;
//       knex('authors_books')
//         .join('authors', {'authors_books.author_id': 'authors.id'})
//         .select('authors_books.book_id', 'authors.id', 'authors.firstname', 'authors.lastname')
//         .then(function(results){
//           console.log(results);
//             for (var i = 0; i < books.length; i++) {
//               books[i].author = [];
//               for (var j = 0; j < results.length; j++) {
//                 if(books[i].id === results[j].book_id)
//                   books[i].author.push(
//                     {
//                       id: results[j].id,
//                       firstname: results[j].firstname,
//                       lastname: results[j].lastname
//                     }
//                   );
//               }
//             }
//         })

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rank').del()
    .then(function () {
      // Inserts seed entries
      return knex('rank').insert([
         {id: 1, 
         rank: 0},
         {id: 2, 
         rank: 1},
         {id: 3, 
         rank: 2},
         {id: 4, 
         rank: 3},
         {id: 5, 
         rank: 4},
         {id: 6, 
         rank: 5}
      ]);
    });
};

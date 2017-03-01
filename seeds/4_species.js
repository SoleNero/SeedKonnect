exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('species').del()
    .then(function () {
      // Inserts seed entries
      return knex('species').insert([
        {id: 1, 
         species_name: 'Tomato'}
      ]);
    })
    .then(() => {
            return knex.raw(
                "SELECT setval('towns_id_seq', (SELECT MAX(id) FROM towns));"
            );
        });
};

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('performance').del()
    .then(function () {
      // Inserts seed entries
      return knex('performance').insert([
        {id: 1, 
         variety_id: 1,
         city_name_id: 1,
         rank_id: 1
        }
      ]);
    })
    .then(() => {
            return knex.raw(
                "SELECT setval('performance_id_seq', (SELECT MAX(id) FROM performance));"
            );
        });
};

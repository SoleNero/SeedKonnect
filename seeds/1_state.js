exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('state').del()
    .then(function () {
      // Inserts seed entries
      return knex('state').insert([
         {id: 1, 
         state: 'CA'},
         {id: 2, 
         state: 'CO'},
         {id: 3, 
         state: 'ID'},
         {id: 4, 
         state: 'IL'},
         {id: 5, 
         state: 'KY'},
         {id: 6, 
         state: 'MI'},
         {id: 7, 
         state: 'MN'},
         {id: 8, 
         state: 'MT'},
         {id: 9, 
         state: 'ND'},
         {id: 10, 
         state: 'NE'},
         {id: 11, 
         state: 'NM'},
         {id: 12, 
         state: 'NY'},
         {id: 13, 
         state: 'OH'},
         {id: 14, 
         state: 'OK'},
         {id: 15, 
         state: 'PA'},
         {id: 16, 
         state: 'SD'},
         {id: 17, 
         state: 'WA'},
         {id: 18, 
         state: 'WI'}
      ]);
    })
    .then(() => {
            return knex.raw(
                "SELECT setval('state_id_seq', (SELECT MAX(id) FROM state));"
            );
        });
};
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('variety').del()
    .then(function () {
      // Inserts seed entries
      return knex('variety').insert([
        {id: 1, 
         variety_name: 'Amish Gold',
         species_id: 1
        },
        {id: 2, 
         variety_name: 'Baller',
         species_id: 1
        },
        {id: 3, 
         variety_name: 'Berwick German',
         species_id: 1
        },
        {id: 4, 
         variety_name: 'Big Rainbow',
         species_id: 1
        },
        {id: 5, 
         variety_name: 'Black Ethiopian',
         species_id: 1
        },
        {id: 6, 
         variety_name: 'Black Plum',
         species_id: 1
        },
        {id: 7, 
         variety_name: 'Brandywine OTV',
         species_id: 1
        },
        {id: 8, 
         variety_name: 'Brown\'s Yellow Giant',
         species_id: 1
        },
        {id: 9, 
         variety_name: 'Cherokee Chocolate',
         species_id: 1
        },
        {id: 10, 
         variety_name: 'Costoluto Ganovesse',
         species_id: 1
        },
        {id: 11, 
         variety_name: 'Delicious',
         species_id: 1
        },
        {id: 12, 
         variety_name: 'Ed\'s Fat Plum',
         species_id: 1
        },
        {id: 13, 
         variety_name: 'Evergreen',
         species_id: 1
        },
        {id: 14, 
         variety_name: 'Fantastic',
         species_id: 1
        },
        {id: 15, 
         variety_name: 'Flamme',
         species_id: 1
        },
        {id: 16, 
         variety_name: 'Flamme',
         species_id: 1
        },
        {id: 17, 
         variety_name: 'Georgia Streak',
         species_id: 1
        },
        {id: 18, 
         variety_name: 'German Johnson',
         species_id: 1
        },
        {id: 19, 
         variety_name: 'German Strip',
         species_id: 1
        },
        {id: 20, 
         variety_name: 'Giant Belgium',
         species_id: 1
        },
        {id: 21, 
         variety_name: 'God Love',
         species_id: 1
        },
        {id: 22, 
         variety_name: 'Haidi?',
         species_id: 1
        },
        {id: 23, 
         variety_name: 'Hess',
         species_id: 1
        },
        {id: 24, 
         variety_name: 'Julia Child',
         species_id: 1
        },
        {id: 25, 
         variety_name: 'Lida Ukrainian',
         species_id: 1
        },
        {id: 26, 
         variety_name: 'Marizol BratKa',
         species_id: 1
        },
        {id: 27, 
         variety_name: 'Marizol Gold',
         species_id: 1
        },
        {id: 28, 
         variety_name: 'Marz Yellow-Red',
         species_id: 1
        },
        {id: 29, 
         variety_name: 'New Zealand Pink',
         species_id: 1
        },
        {id: 30, 
         variety_name: 'Orange Beefsteak',
         species_id: 1
        },
        {id: 31, 
         variety_name: 'Orange Russian 117',
         species_id: 1
        },
        {id: 32, 
         variety_name: 'Oxheart',
         species_id: 1
        },
        {id: 33, 
         variety_name: 'Paul Robeson',
         species_id: 1
        },
        {id: 34, 
         variety_name: 'Radiator Charlie',
         species_id: 1
        },
        {id: 35, 
         variety_name: 'Red Pear',
         species_id: 1
        },
        {id: 36, 
         variety_name: 'Rivieria',
         species_id: 1
        },
        {id: 37, 
         variety_name: 'Sunset Red Horizon',
         species_id: 1
        },
        {id: 38, 
         variety_name: 'White',
         species_id: 1
        },
        {id: 39, 
         variety_name: 'Yellow Gooseberry',
         species_id: 1
        },
        {id: 40, 
         variety_name: 'Yellow Ruffled',
         species_id: 1
        },
        {id: 41, 
         variety_name: 'Zapotec Pleated',
         species_id: 1
        }
      ]);
    })
    .then(() => {
            return knex.raw(
                "SELECT setval('towns_id_seq', (SELECT MAX(id) FROM towns));"
            );
        });
};
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('city_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('city_name').insert([
        {id: 1, 
         city_name: 'Arlington',
         long: -89.380396,
         lati: 43.338044,
         state_id: 18
        },
        {id: 2, 
         city_name: 'Artesia',
         long: -104.403296,
         lati: 32.842335,
         state_id: 11
        },
        {id: 3, 
         city_name: 'Beresford',
         long: -96.773655,
         lati: 43.080545,
         state_id: 16
        },
        {id: 4, 
         city_name: 'Bridger',
         long: -108.913754,
         lati: 45.295781,
         state_id: 8
        },
        {id: 5, 
         city_name: 'Capac',
         long: -82.934479,
         lati: 43.012551,
         state_id: 6
        },
        {id: 6, 
         city_name: 'Carrington',
         long: -99.126223,
         lati: 47.44972,
         state_id: 9
        },
        {id: 7, 
         city_name: 'Chatham',
         long: -86.929037,
         lati: 46.347723,
         state_id: 6
        },
        {id: 8, 
         city_name: 'Chazy',
         long: -73.436033,
         lati: 44.889533,
         state_id: 12
        },
        {id: 9, 
         city_name: 'Chickasha',
         long: -97.936433,
         lati: 35.052565,
         state_id: 14
        },
        {id: 10, 
         city_name: 'Chippewa Falls',
         long: -91.392935,
         lati: 44.936905,
         state_id: 18
        },
        {id: 11, 
         city_name: 'Cobleskill',
         long: -74.485417,
         lati: 42.677853,
         state_id: 12
        },
        {id: 12, 
         city_name: 'Cooperstown',
         long: -74.924321,
         lati: 42.70063,
         state_id: 12
        },
        {id: 13, 
         city_name: 'Corvallis',
         long: -114.112873,
         lati: 46.314088,
         state_id: 8
        },
        {id: 14, 
         city_name: 'East Lansing',
         long: -84.483865,
         lati: 42.736979,
         state_id: 6
        },
        {id: 15, 
         city_name: 'Fargo',
         long: -96.789803,
         lati: 46.877186,
         state_id: 9
        },
        {id: 16, 
         city_name: 'Farmington',
         long: -108.218686,
         lati: 36.728058,
         state_id: 11
        },
        {id: 17, 
         city_name: 'Havelock',
         long: -96.629075,
         lati: 40.85167,
         state_id: 10
        },
        {id: 18, 
         city_name: 'Hill City',
         long: -115.051181,
         lati: 43.300454,
         state_id: 3
        },
        {id: 19, 
         city_name: 'Huntley',
         long: -108.301517,
         lati: 45.899401,
         state_id: 8
        },
        {id: 20, 
         city_name: 'Ithaca',
         long: -76.501881,
         lati: 42.443961,
         state_id: 12
        },
        {id: 21, 
         city_name: 'Kimberly',
         long: -114.364756,
         lati: 42.533802,
         state_id: 3
        },
        {id: 22, 
         city_name: 'Lake City',
         long: -85.215045,
         lati: 44.335287,
         state_id: 6
        },
        {id: 23, 
         city_name: 'Lancaster',
         long: -90.710682,
         lati: 42.847491,
         state_id: 18
        },
        {id: 24, 
         city_name: 'Landisville',
         long: -76.410349,
         lati: 40.095287,
         state_id: 15
        },
        {id: 25, 
         city_name: 'Las Cruces',
         long: -106.763654,
         lati: 32.31994,
         state_id: 11
        },
        {id: 26, 
         city_name: 'LeRoy',
         long: -77.984178,
         lati: 42.978394,
         state_id: 12
        },
        {id: 27, 
         city_name: 'Lexington',
         long: -84.503716,
         lati: 38.040584,
         state_id: 5
        },
        {id: 28, 
         city_name: 'Los Lunas',
         long: -106.73336,
         lati: 34.806166,
         state_id: 11
        },
        {id: 30, 
         city_name: 'Marshfield',
         long: -90.171799,
         lati: 44.668852,
         state_id: 18
        },
        {id: 31, 
         city_name: 'Minot',
         long: -101.292291,
         lati: 48.232967,
         state_id: 9
        },
        {id: 32, 
         city_name: 'Moccasin',
         long: -109.910029,
         lati: 47.052774,
         state_id: 8
        },
        {id: 33, 
         city_name: 'North Baltimore',
         long: -83.678267,
         lati: 41.18283,
         state_id: 13
        },
        {id: 34, 
         city_name: 'Othello',
         long: -119.175291,
         lati: 46.825974,
         state_id: 17
        },
        {id: 35, 
         city_name: 'Pasco',
         long: -119.100566,
         lati: 46.239579,
         state_id: 17
        },
        {id: 36, 
         city_name: 'Perry',
         long: -89.322695,
         lati: 38.061202,
         state_id: 12
        },
        {id: 37, 
         city_name: 'Princeton',
         long: -87.881959,
         lati: 37.109216,
         state_id: 5
        },
        {id: 38, 
         city_name: 'Prosper',
         long: -96.80111,
         lati: 33.236228,
         state_id: 9
        },
        {id: 39, 
         city_name: 'Quicksand',
         long: -83.344901,
         lati: 37.52898,
         state_id: 5
        },
        {id: 40, 
         city_name: 'Rexburg',
         long: -111.792424,
         lati: 43.82311,
         state_id: 3
        },
        {id: 41, 
         city_name: 'Rock Springs',
         long: -74.808185,
         lati: 40.201705,
         state_id: 15
        },
        {id: 42, 
         city_name: 'Rocky Ford',
         long: -103.720227,
         lati: 38.052508,
         state_id: 2
        },
        {id: 43, 
         city_name: 'Rosemount',
         long: -93.125772,
         lati: 44.73941,
         state_id: 7
        },
        {id: 44, 
         city_name: 'Saint Martin',
         long: -94.668894,
         lati: 45.501909,
         state_id: 7
        },
        {id: 45, 
         city_name: 'South Charleston',
         long: -83.634367,
         lati: 39.825338,
         state_id: 13
        },
        {id: 46, 
         city_name: 'Streeter',
         long: -99.358218,
         lati: 46.657026,
         state_id: 9
        },
        {id: 47, 
         city_name: 'Tucumcari',
         long: -103.724966,
         lati: 35.171723,
         state_id: 11
        },
        {id: 48, 
         city_name: 'Tule Lake',
         long: -121.477492,
         lati: 41.955988,
         state_id: 1
        },
        {id: 49, 
         city_name: 'Underwood',
         long: -95.870885,
         lati: 46.285238,
         state_id: 7
        },
        {id: 50, 
         city_name: 'Urbana',
         long: -88.20727,
         lati: 40.110588,
         state_id: 4
        },
        {id: 51, 
         city_name: 'Williston',
         long: -103.617974,
         lati: 48.146968,
         state_id: 9
        },
        {id: 52, 
         city_name: 'Wooster',
         long: -81.935143,
         lati: 40.805057,
         state_id: 13
        },
        {id: 53, 
         city_name: 'Zumbro Falls',
         long: -92.422126,
         lati: 44.2833,
         state_id: 7
        }
      ]);
    })
    .then(() => {
            return knex.raw(
                "SELECT setval('city_name_id_seq', (SELECT MAX(id) FROM city_name));"
            );
        });
};

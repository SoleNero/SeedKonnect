exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('city').del()
    .then(function () {
      // Inserts seed entries
      return knex('city').insert([
        {id: 1, 
         city: 'Arlington',
         long: -89.380396,
         lati: 43.338044
        },
        {id: 2, 
         city: 'Artesia',
         long: -104.403296,
         lati: 32.842335
        },
        {id: 3, 
         city: 'Beresford',
         long: -96.773655,
         lati: 43.080545
        },
        {id: 4, 
         city: 'Bridger',
         long: -108.913754,
         lati: 45.295781
        },
        {id: 5, 
         city: 'Capac',
         long: -82.934479,
         lati: 43.012551
        },
        {id: 6, 
         city: 'Carrington',
         long: -99.126223,
         lati: 47.44972
        },
        {id: 7, 
         city: 'Chatham',
         long: -86.929037,
         lati: 46.347723
        },
        {id: 8, 
         city: 'Chazy',
         long: -73.436033,
         lati: 44.889533
        },
        {id: 9, 
         city: 'Chickasha',
         long: -97.936433,
         lati: 35.052565
        },
        {id: 10, 
         city: 'Chippewa Falls',
         long: -91.392935,
         lati: 44.936905
        },
        {id: 11, 
         city: 'Cobleskill',
         long: -74.485417,
         lati: 42.677853
        },
        {id: 12, 
         city: 'Cooperstown',
         long: -74.924321,
         lati: 42.70063
        },
        {id: 13, 
         city: 'Corvallis',
         long: -114.112873,
         lati: 46.314088
        },
        {id: 14, 
         city: 'East Lansing',
         long: -84.483865,
         lati: 42.736979
        },
        {id: 15, 
         city: 'Fargo',
         long: -96.789803,
         lati: 46.877186
        },
        {id: 16, 
         city: 'Farmington',
         long: -108.218686,
         lati: 36.728058
        },
        {id: 17, 
         city: 'Havelock',
         long: -96.629075,
         lati: 40.85167
        },
        {id: 18, 
         city: 'Hill City',
         long: -115.051181,
         lati: 43.300454
        },
        {id: 19, 
         city: 'Huntley',
         long: -108.301517,
         lati: 45.899401
        },
        {id: 20, 
         city: 'Ithaca',
         long: -76.501881,
         lati: 42.443961
        },
        {id: 21, 
         city: 'Kimberly',
         long: -114.364756,
         lati: 42.533802
        },
        {id: 22, 
         city: 'Lake City',
         long: -85.215045,
         lati: 44.335287
        },
        {id: 23, 
         city: 'Lancaster',
         long: -90.710682,
         lati: 42.847491
        },
        {id: 24, 
         city: 'Landisville',
         long: -76.410349,
         lati: 40.095287
        },
        {id: 25, 
         city: 'Las Cruces',
         long: -106.763654,
         lati: 32.31994
        },
        {id: 26, 
         city: 'LeRoy',
         long: -77.984178,
         lati: 42.978394
        },
        {id: 27, 
         city: 'Lexington',
         long: -84.503716,
         lati: 38.040584
        },
        {id: 28, 
         city: 'Los Lunas',
         long: -106.73336,
         lati: 34.806166
        },
        {id: 29, 
         city: 'Marshfield',
         long: -90.171799,
         lati: 44.668852
        },
        {id: 30, 
         city: 'Minot',
         long: -101.292291,
         lati: 48.232967
        },
        {id: 31, 
         city: 'Moccasin',
         long: -109.910029,
         lati: 47.052774
        },
        {id: 32, 
         city: 'North Baltimore',
         long: -83.678267,
         lati: 41.18283
        },
        {id: 33, 
         city: 'Othello',
         long: -119.175291,
         lati: 46.825974
        },
        {id: 34, 
         city: 'Pasco',
         long: -119.100566,
         lati: 46.239579
        },
        {id: 35, 
         city: 'Perry',
         long: -89.322695,
         lati: 38.061202
        },
        {id: 36, 
         city: 'Princeton',
         long: -87.881959,
         lati: 37.109216
        },
        {id: 37, 
         city: 'Prosper',
         long: -96.80111,
         lati: 33.236228
        },
        {id: 38, 
         city: 'Quicksand',
         long: -83.344901,
         lati: 37.52898
        },
        {id: 39, 
         city: 'Rexburg',
         long: -111.792424,
         lati: 43.82311
        },
        {id: 40, 
         city: 'Rock Springs',
         long: -74.808185,
         lati: 40.201705
        },
        {id: 41, 
         city: 'Rocky Ford',
         long: -103.720227,
         lati: 38.052508
        },
        {id: 42, 
         city: 'Rosemount',
         long: -93.125772,
         lati: 44.73941
        },
        {id: 43, 
         city: 'Saint Martin',
         long: -94.668894,
         lati: 45.501909
        },
        {id: 44, 
         city: 'South Charleston',
         long: -83.634367,
         lati: 39.825338
        },
        {id: 45, 
         city: 'Streeter',
         long: -99.358218,
         lati: 46.657026
        },
        {id: 46, 
         city: 'Tucumcari',
         long: -103.724966,
         lati: 35.171723
        },
        {id: 47, 
         city: 'Tule Lake',
         long: -121.477492,
         lati: 41.955988
        },
        {id: 48, 
         city: 'Underwood',
         long: -95.870885,
         lati: 46.285238
        },
        {id: 49, 
         city: 'Urbana',
         long: -88.20727,
         lati: 40.110588
        },
        {id: 50, 
         city: 'Williston',
         long: -103.617974,
         lati: 48.146968
        },
        {id: 51, 
         city: 'Wooster',
         long: -81.935143,
         lati: 40.805057
        },
        {id: 52, 
         city: 'Zumbro Falls',
         long: -92.422126,
         lati: 44.2833
        }
      ]);
    })
    .then(() => {
            return knex.raw(
                "SELECT setval('city_id_seq', (SELECT MAX(id) FROM city));"
            );
        });
};

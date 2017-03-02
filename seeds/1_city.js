exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('city').del()
    .then(function () {
      // Inserts seed entries
      return knex('city').insert([
        {id: 1, 
         city: 'Arlington',
         longitude: -89.380396,
         latitude: 43.338044
        },
        {id: 2, 
         city: 'Artesia',
         longitude: -104.403296,
         latitude: 32.842335
        },
        {id: 3, 
         city: 'Beresford',
         longitude: -96.773655,
         latitude: 43.080545
        },
        {id: 4, 
         city: 'Bridger',
         longitude: -108.913754,
         latitude: 45.295781
        },
        {id: 5, 
         city: 'Capac',
         longitude: -82.934479,
         latitude: 43.012551
        },
        {id: 6, 
         city: 'Carrington',
         longitude: -99.126223,
         latitude: 47.44972
        },
        {id: 7, 
         city: 'Chatham',
         longitude: -86.929037,
         latitude: 46.347723
        },
        {id: 8, 
         city: 'Chazy',
         longitude: -73.436033,
         latitude: 44.889533
        },
        {id: 9, 
         city: 'Chickasha',
         longitude: -97.936433,
         latitude: 35.052565
        },
        {id: 10, 
         city: 'Chippewa Falls',
         longitude: -91.392935,
         latitude: 44.936905
        },
        {id: 11, 
         city: 'Cobleskill',
         longitude: -74.485417,
         latitude: 42.677853
        },
        {id: 12, 
         city: 'Cooperstown',
         longitude: -74.924321,
         latitude: 42.70063
        },
        {id: 13, 
         city: 'Corvallis',
         longitude: -114.112873,
         latitude: 46.314088
        },
        {id: 14, 
         city: 'East Lansing',
         longitude: -84.483865,
         latitude: 42.736979
        },
        {id: 15, 
         city: 'Fargo',
         longitude: -96.789803,
         latitude: 46.877186
        },
        {id: 16, 
         city: 'Farmington',
         longitude: -108.218686,
         latitude: 36.728058
        },
        {id: 17, 
         city: 'Havelock',
         longitude: -96.629075,
         latitude: 40.85167
        },
        {id: 18, 
         city: 'Hill City',
         longitude: -115.051181,
         latitude: 43.300454
        },
        {id: 19, 
         city: 'Huntley',
         longitude: -108.301517,
         latitude: 45.899401
        },
        {id: 20, 
         city: 'Ithaca',
         longitude: -76.501881,
         latitude: 42.443961
        },
        {id: 21, 
         city: 'Kimberly',
         longitude: -114.364756,
         latitude: 42.533802
        },
        {id: 22, 
         city: 'Lake City',
         longitude: -85.215045,
         latitude: 44.335287
        },
        {id: 23, 
         city: 'Lancaster',
         longitude: -90.710682,
         latitude: 42.847491
        },
        {id: 24, 
         city: 'Landisville',
         longitude: -76.410349,
         latitude: 40.095287
        },
        {id: 25, 
         city: 'Las Cruces',
         longitude: -106.763654,
         latitude: 32.31994
        },
        {id: 26, 
         city: 'LeRoy',
         longitude: -77.984178,
         latitude: 42.978394
        },
        {id: 27, 
         city: 'Lexington',
         longitude: -84.503716,
         latitude: 38.040584
        },
        {id: 28, 
         city: 'Los Lunas',
         longitude: -106.73336,
         latitude: 34.806166
        },
        {id: 29, 
         city: 'Marshfield',
         longitude: -90.171799,
         latitude: 44.668852
        },
        {id: 30, 
         city: 'Minot',
         longitude: -101.292291,
         latitude: 48.232967
        },
        {id: 31, 
         city: 'Moccasin',
         longitude: -109.910029,
         latitude: 47.052774
        },
        {id: 32, 
         city: 'North Baltimore',
         longitude: -83.678267,
         latitude: 41.18283
        },
        {id: 33, 
         city: 'Othello',
         longitude: -119.175291,
         latitude: 46.825974
        },
        {id: 34, 
         city: 'Pasco',
         longitude: -119.100566,
         latitude: 46.239579
        },
        {id: 35, 
         city: 'Perry',
         longitude: -89.322695,
         latitude: 38.061202
        },
        {id: 36, 
         city: 'Princeton',
         longitude: -87.881959,
         latitude: 37.109216
        },
        {id: 37, 
         city: 'Prosper',
         longitude: -96.80111,
         latitude: 33.236228
        },
        {id: 38, 
         city: 'Quicksand',
         longitude: -83.344901,
         latitude: 37.52898
        },
        {id: 39, 
         city: 'Rexburg',
         longitude: -111.792424,
         latitude: 43.82311
        },
        {id: 40, 
         city: 'Rock Springs',
         longitude: -74.808185,
         latitude: 40.201705
        },
        {id: 41, 
         city: 'Rocky Ford',
         longitude: -103.720227,
         latitude: 38.052508
        },
        {id: 42, 
         city: 'Rosemount',
         longitude: -93.125772,
         latitude: 44.73941
        },
        {id: 43, 
         city: 'Saint Martin',
         longitude: -94.668894,
         latitude: 45.501909
        },
        {id: 44, 
         city: 'South Charleston',
         longitude: -83.634367,
         latitude: 39.825338
        },
        {id: 45, 
         city: 'Streeter',
         longitude: -99.358218,
         latitude: 46.657026
        },
        {id: 46, 
         city: 'Tucumcari',
         longitude: -103.724966,
         latitude: 35.171723
        },
        {id: 47, 
         city: 'Tule Lake',
         longitude: -121.477492,
         latitude: 41.955988
        },
        {id: 48, 
         city: 'Underwood',
         longitude: -95.870885,
         latitude: 46.285238
        },
        {id: 49, 
         city: 'Urbana',
         longitude: -88.20727,
         latitude: 40.110588
        },
        {id: 50, 
         city: 'Williston',
         longitude: -103.617974,
         latitude: 48.146968
        },
        {id: 51, 
         city: 'Wooster',
         longitude: -81.935143,
         latitude: 40.805057
        },
        {id: 52, 
         city: 'Zumbro Falls',
         longitude: -92.422126,
         latitude: 44.2833
        }
      ]);
    })
    .then(() => {
            return knex.raw(
                "SELECT setval('city_id_seq', (SELECT MAX(id) FROM city));"
            );
        });
};

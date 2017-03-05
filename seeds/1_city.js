exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('city').del()
    .then(function () {
      // Inserts seed entries
      return knex('city').insert([
        {id: 1, 
         city: 'Arlington',
         lng: -89.380396,
         lat: 43.338044
        },
        {id: 2, 
         city: 'Artesia',
         lng: -104.403296,
         lat: 32.842335
        },
        {id: 3, 
         city: 'Beresford',
         lng: -96.773655,
         lat: 43.080545
        },
        {id: 4, 
         city: 'Bridger',
         lng: -108.913754,
         lat: 45.295781
        },
        {id: 5, 
         city: 'Capac',
         lng: -82.934479,
         lat: 43.012551
        },
        {id: 6, 
         city: 'Carrington',
         lng: -99.126223,
         lat: 47.44972
        },
        {id: 7, 
         city: 'Chatham',
         lng: -86.929037,
         lat: 46.347723
        },
        {id: 8, 
         city: 'Chazy',
         lng: -73.436033,
         lat: 44.889533
        },
        {id: 9, 
         city: 'Chickasha',
         lng: -97.936433,
         lat: 35.052565
        },
        {id: 10, 
         city: 'Chippewa Falls',
         lng: -91.392935,
         lat: 44.936905
        },
        {id: 11, 
         city: 'Cobleskill',
         lng: -74.485417,
         lat: 42.677853
        },
        {id: 12, 
         city: 'Cooperstown',
         lng: -74.924321,
         lat: 42.70063
        },
        {id: 13, 
         city: 'Corvallis',
         lng: -114.112873,
         lat: 46.314088
        },
        {id: 14, 
         city: 'East Lansing',
         lng: -84.483865,
         lat: 42.736979
        },
        {id: 15, 
         city: 'Fargo',
         lng: -96.789803,
         lat: 46.877186
        },
        {id: 16, 
         city: 'Farmington',
         lng: -108.218686,
         lat: 36.728058
        },
        {id: 17, 
         city: 'Havelock',
         lng: -96.629075,
         lat: 40.85167
        },
        {id: 18, 
         city: 'Hill City',
         lng: -115.051181,
         lat: 43.300454
        },
        {id: 19, 
         city: 'Huntley',
         lng: -108.301517,
         lat: 45.899401
        },
        {id: 20, 
         city: 'Ithaca',
         lng: -76.501881,
         lat: 42.443961
        },
        {id: 21, 
         city: 'Kimberly',
         lng: -114.364756,
         lat: 42.533802
        },
        {id: 22, 
         city: 'Lake City',
         lng: -85.215045,
         lat: 44.335287
        },
        {id: 23, 
         city: 'Lancaster',
         lng: -90.710682,
         lat: 42.847491
        },
        {id: 24, 
         city: 'Landisville',
         lng: -76.410349,
         lat: 40.095287
        },
        {id: 25, 
         city: 'Las Cruces',
         lng: -106.763654,
         lat: 32.31994
        },
        {id: 26, 
         city: 'LeRoy',
         lng: -77.984178,
         lat: 42.978394
        },
        {id: 27, 
         city: 'Lexington',
         lng: -84.503716,
         lat: 38.040584
        },
        {id: 28, 
         city: 'Los Lunas',
         lng: -106.73336,
         lat: 34.806166
        },
        {id: 29, 
         city: 'Marshfield',
         lng: -90.171799,
         lat: 44.668852
        },
        {id: 30, 
         city: 'Minot',
         lng: -101.292291,
         lat: 48.232967
        },
        {id: 31, 
         city: 'Moccasin',
         lng: -109.910029,
         lat: 47.052774
        },
        {id: 32, 
         city: 'North Baltimore',
         lng: -83.678267,
         lat: 41.18283
        },
        {id: 33, 
         city: 'Othello',
         lng: -119.175291,
         lat: 46.825974
        },
        {id: 34, 
         city: 'Pasco',
         lng: -119.100566,
         lat: 46.239579
        },
        {id: 35, 
         city: 'Perry',
         lng: -89.322695,
         lat: 38.061202
        },
        {id: 36, 
         city: 'Princeton',
         lng: -87.881959,
         lat: 37.109216
        },
        {id: 37, 
         city: 'Prosper',
         lng: -96.80111,
         lat: 33.236228
        },
        {id: 38, 
         city: 'Quicksand',
         lng: -83.344901,
         lat: 37.52898
        },
        {id: 39, 
         city: 'Rexburg',
         lng: -111.792424,
         lat: 43.82311
        },
        {id: 40, 
         city: 'Rock Springs',
         lng: -74.808185,
         lat: 40.201705
        },
        {id: 41, 
         city: 'Rocky Ford',
         lng: -103.720227,
         lat: 38.052508
        },
        {id: 42, 
         city: 'Rosemount',
         lng: -93.125772,
         lat: 44.73941
        },
        {id: 43, 
         city: 'Saint Martin',
         lng: -94.668894,
         lat: 45.501909
        },
        {id: 44, 
         city: 'South Charleston',
         lng: -83.634367,
         lat: 39.825338
        },
        {id: 45, 
         city: 'Streeter',
         lng: -99.358218,
         lat: 46.657026
        },
        {id: 46, 
         city: 'Tucumcari',
         lng: -103.724966,
         lat: 35.171723
        },
        {id: 47, 
         city: 'Tule Lake',
         lng: -121.477492,
         lat: 41.955988
        },
        {id: 48, 
         city: 'Underwood',
         lng: -95.870885,
         lat: 46.285238
        },
        {id: 49, 
         city: 'Urbana',
         lng: -88.20727,
         lat: 40.110588
        },
        {id: 50, 
         city: 'Williston',
         lng: -103.617974,
         lat: 48.146968
        },
        {id: 51, 
         city: 'Wooster',
         lng: -81.935143,
         lat: 40.805057
        },
        {id: 52, 
         city: 'Zumbro Falls',
         lng: -92.422126,
         lat: 44.2833
        }
      ]);
    })
    .then(() => {
            return knex.raw(
                "SELECT setval('city_id_seq', (SELECT MAX(id) FROM city));"
            );
        });
};

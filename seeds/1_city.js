exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('city').del()
    .then(function () {
      // Inserts seed entries
      return knex('city').insert([
        {id: 1, 
         city_name: 'Arlington',
         lng: -89.380396,
         lat: 43.338044
        },
        {id: 2, 
         city_name: 'Artesia',
         lng: -104.403296,
         lat: 32.842335
        },
        {id: 3, 
         city_name: 'Beresford',
         lng: -96.773655,
         lat: 43.080545
        },
        {id: 4, 
         city_name: 'Bridger',
         lng: -108.913754,
         lat: 45.295781
        },
        {id: 5, 
         city_name: 'Capac',
         lng: -82.934479,
         lat: 43.012551
        },
        {id: 6, 
         city_name: 'Carrington',
         lng: -99.126223,
         lat: 47.44972
        },
        {id: 7, 
         city_name: 'Chatham',
         lng: -86.929037,
         lat: 46.347723
        },
        {id: 8, 
         city_name: 'Chazy',
         lng: -73.436033,
         lat: 44.889533
        },
        {id: 9, 
         city_name: 'Chickasha',
         lng: -97.936433,
         lat: 35.052565
        },
        {id: 10, 
         city_name: 'Chippewa Falls',
         lng: -91.392935,
         lat: 44.936905
        },
        {id: 11, 
         city_name: 'Cobleskill',
         lng: -74.485417,
         lat: 42.677853
        },
        {id: 12, 
         city_name: 'Cooperstown',
         lng: -74.924321,
         lat: 42.70063
        },
        {id: 13, 
         city_name: 'Corvallis',
         lng: -114.112873,
         lat: 46.314088
        },
        {id: 14, 
         city_name: 'East Lansing',
         lng: -84.483865,
         lat: 42.736979
        },
        {id: 15, 
         city_name: 'Fargo',
         lng: -96.789803,
         lat: 46.877186
        },
        {id: 16, 
         city_name: 'Farmington',
         lng: -108.218686,
         lat: 36.728058
        },
        {id: 17, 
         city_name: 'Havelock',
         lng: -96.629075,
         lat: 40.85167
        },
        {id: 18, 
         city_name: 'Hill City',
         lng: -115.051181,
         lat: 43.300454
        },
        {id: 19, 
         city_name: 'Huntley',
         lng: -108.301517,
         lat: 45.899401
        },
        {id: 20, 
         city_name: 'Ithaca',
         lng: -76.501881,
         lat: 42.443961
        },
        {id: 21, 
         city_name: 'Kimberly',
         lng: -114.364756,
         lat: 42.533802
        },
        {id: 22, 
         city_name: 'Lake City',
         lng: -85.215045,
         lat: 44.335287
        },
        {id: 23, 
         city_name: 'Lancaster',
         lng: -90.710682,
         lat: 42.847491
        },
        {id: 24, 
         city_name: 'Landisville',
         lng: -76.410349,
         lat: 40.095287
        },
        {id: 25, 
         city_name: 'Las Cruces',
         lng: -106.763654,
         lat: 32.31994
        },
        {id: 26, 
         city_name: 'LeRoy',
         lng: -77.984178,
         lat: 42.978394
        },
        {id: 27, 
         city_name: 'Lexington',
         lng: -84.503716,
         lat: 38.040584
        },
        {id: 28, 
         city_name: 'Los Lunas',
         lng: -106.73336,
         lat: 34.806166
        },
        {id: 29, 
         city_name: 'Marshfield',
         lng: -90.171799,
         lat: 44.668852
        },
        {id: 30, 
         city_name: 'Minot',
         lng: -101.292291,
         lat: 48.232967
        },
        {id: 31, 
         city_name: 'Moccasin',
         lng: -109.910029,
         lat: 47.052774
        },
        {id: 32, 
         city_name: 'North Baltimore',
         lng: -83.678267,
         lat: 41.18283
        },
        {id: 33, 
         city_name: 'Othello',
         lng: -119.175291,
         lat: 46.825974
        },
        {id: 34, 
         city_name: 'Pasco',
         lng: -119.100566,
         lat: 46.239579
        },
        {id: 35, 
         city_name: 'Perry',
         lng: -89.322695,
         lat: 38.061202
        },
        {id: 36, 
         city_name: 'Princeton',
         lng: -87.881959,
         lat: 37.109216
        },
        {id: 37, 
         city_name: 'Prosper',
         lng: -96.80111,
         lat: 33.236228
        },
        {id: 38, 
         city_name: 'Quicksand',
         lng: -83.344901,
         lat: 37.52898
        },
        {id: 39, 
         city_name: 'Rexburg',
         lng: -111.792424,
         lat: 43.82311
        },
        {id: 40, 
         city_name: 'Rock Springs',
         lng: -74.808185,
         lat: 40.201705
        },
        {id: 41, 
         city_name: 'Rocky Ford',
         lng: -103.720227,
         lat: 38.052508
        },
        {id: 42, 
         city_name: 'Rosemount',
         lng: -93.125772,
         lat: 44.73941
        },
        {id: 43, 
         city_name: 'Saint Martin',
         lng: -94.668894,
         lat: 45.501909
        },
        {id: 44, 
         city_name: 'South Charleston',
         lng: -83.634367,
         lat: 39.825338
        },
        {id: 45, 
         city_name: 'Streeter',
         lng: -99.358218,
         lat: 46.657026
        },
        {id: 46, 
         city_name: 'Tucumcari',
         lng: -103.724966,
         lat: 35.171723
        },
        {id: 47, 
         city_name: 'Tule Lake',
         lng: -121.477492,
         lat: 41.955988
        },
        {id: 48, 
         city_name: 'Underwood',
         lng: -95.870885,
         lat: 46.285238
        },
        {id: 49, 
         city_name: 'Urbana',
         lng: -88.20727,
         lat: 40.110588
        },
        {id: 50, 
         city_name: 'Williston',
         lng: -103.617974,
         lat: 48.146968
        },
        {id: 51, 
         city_name: 'Wooster',
         lng: -81.935143,
         lat: 40.805057
        },
        {id: 52, 
         city_name: 'Zumbro Falls',
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

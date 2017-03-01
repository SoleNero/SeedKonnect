const map = {
  city_name: 'Arlington',
  long: -89.380396,
  lati: 43.338044
}

const clickMarkerCity = {
  city_name: 'Arlington',
  species_name: ['tomato'],
  variety_name: [
'Amish Gold',
'Berwick German',
'Big Rainbow',
'Brandywine OTV',
'Cherokee Chocolate',
'Costoluto Ganovesse',
'Delicious',
'Ed\'s Fat Plum',
'Fantastic',
'German Johnson',
'Hess',
'Marizol Gold',
'Marz Yellow-Red',
'Orange Russian 117',
'Oxheart',
'Paul Robeson',
'Red Pear',
'Rivieria',
'Sunset Red Horizon',
'White',
'Yellow Gooseberry',
'Yellow Ruffled'
  ],
  colorRank: function(rank){
    if (rank <= 2){
      return 'red';
    } 
    else if(rank >=4){
      return 'green';
    }
  }
}

clickVariety = {
  species_name: 'tomato',
  variety_name: 'Amish Gold',
  fruit_color: 'red',
  fruit_size: 'medium/large',
  maturity_days: '85',
  variety_image: './images/BigTomTom.jpg',
  rank: 3
}
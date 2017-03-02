exports.up = function(knex, Promise) {
  // return knex.schema.createTable('rank', table => {
  //   table.increments('id');
  //   table.string('rank').notNullable();
  //   table.integer('variety_id').notNullable().references('id').inTable('variety').onDelete('CASCADE');
  //   table.integer('city_id').notNullable().references('id').inTable('city').onDelete('CASCADE');    
  // })
};

exports.down = function(knex, Promise) {
  // return knex.schema.dropTable('rank');
};
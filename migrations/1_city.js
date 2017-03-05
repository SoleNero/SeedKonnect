exports.up = function(knex, Promise) {
  return knex.schema.createTable('city', table =>{
    table.increments('id');
    table.string('city').notNullable();
    table.decimal('lng');
    table.decimal('lat');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('city');
};
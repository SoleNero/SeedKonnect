exports.up = function(knex, Promise) {
  return knex.schema.createTable('city', table =>{
    table.increments('id');
    table.string('city').notNullable();
    table.decimal('long', 9,6);
    table.decimal('lati', 9,6);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('city');
};
exports.up = function(knex, Promise) {
  return knex.schema.createTable('city_name', table =>{
    table.increments('id');
    table.string('city_name').notNullable();
    table.decimal('long', 9,6);
    table.decimal('lati', 9,6);
    table.integer('state_id').references('id').inTable('state').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('city_name');
};
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rank', table => {
    table.increments('id');
    table.decimal('rank').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rank');
};
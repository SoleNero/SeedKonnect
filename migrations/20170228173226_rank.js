exports.up = function(knex, Promise) {
  return knex.schema.createTable('rank', table => {
    table.increments();
    table.decimal('rank').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rank');
};
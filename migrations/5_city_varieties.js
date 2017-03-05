
exports.up = function(knex, Promise) {
  return knex.schema.createTable('city_varieties', table => {
    table.increments('id');
    table.integer('city_id').notNullable().references('id').inTable('city').onDelete('CASCADE');
    table.integer('variety_id').notNullable().references('id').inTable('variety').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('city_varieties');
};

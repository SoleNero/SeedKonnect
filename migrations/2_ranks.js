exports.up = function(knex, Promise) {
  return knex.schema.createTable('ranks', table => {
    table.increments('id');
    table.decimal('rank').notNullable();
    table.integer('variety_id').notNullable().references('id').inTable('varieties').onDelete('CASCADE');
    table.integer('city_id').notNullable().references('id').inTable('cities').onDelete('CASCADE');    
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ranks');
};
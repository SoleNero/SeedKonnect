exports.up = function(knex, Promise) {
   return knex.schema.createTable('performance', table =>{
    table.increments('id');
    table.integer('variety_id').notNullable().references('id').inTable('variety').onDelete('CASCADE');
    table.integer('city_name_id').notNullable().references('id').inTable('city_name').onDelete('CASCADE');
    table.integer('rank_id').notNullable().references('id').inTable('rank').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('performance');
};
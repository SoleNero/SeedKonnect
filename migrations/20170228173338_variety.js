exports.up = function(knex, Promise) {
   return knex.schema.createTable('variety', table =>{
     table.increments('id');
     table.string('variety_name').notNullable();
     table.integer('species_id').notNullable().references('id').inTable('species').onDelete('CASCADE');
     table.string('variety_image').notNullable().defaultTo('No photo available');
   })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('variety');
};
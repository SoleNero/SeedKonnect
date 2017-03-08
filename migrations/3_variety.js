exports.up = function(knex, Promise) {
   return knex.schema.createTable('variety', table =>{
     table.increments('id');
     table.string('variety_name').notNullable();
     table.string('species').notNullable();
     table.string('variety_image').notNullable().defaultTo('css/img/tom-demo.jpg');
     table.string('fruit_color').notNullable();
     table.string('size').notNullable();
     table.integer('maturity_days').notNullable();
     table.string('description').notNullable().defaultTo('Extremely delicious tomato, beautiful sauce tomato – red streaked with flames of orange. A reliable yielder, Speckled Roman is a cross of Antique Roman and Banana Legs.')
   })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('variety');
};
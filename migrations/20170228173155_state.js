'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('state', table =>{
    table.increments('id');
    table.string('state');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('state');
};

exports.up = function(knex) {
  return knex.schema.createTable('greeting', table => {
    table.increments('id'); 
    table.string('message')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist('greeting');
};

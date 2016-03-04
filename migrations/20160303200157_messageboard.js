exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('messages', function(table){
      table.increments();
      table.string('username');
      table.string('message');
      table.dateTime('datetime');
    })
  ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages')
};

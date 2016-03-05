exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('messages', function(table){
      table.increments();
      table.string('username');
      table.text('message');
      table.dateTime('datetime');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
     knex.schema.dropTable('messages')
  ])
};

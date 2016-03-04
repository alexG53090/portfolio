// Update with your config settings.

  module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://yetpmeohcsomtg:Hnx270n32fWXXOYKScGvbTRt_i@ec2-54-221-201-165.compute-1.amazonaws.com:5432/d30t2g1brgvttb?ssl=true'
    }

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },
  //
  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};

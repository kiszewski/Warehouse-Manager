// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'warehouse_manager',
      user: 'root',
      password: 'root'
    },
    migrations: {
      tableName: 'migrations',
      directory: `${__dirname}/src/database/migrations` 
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
}

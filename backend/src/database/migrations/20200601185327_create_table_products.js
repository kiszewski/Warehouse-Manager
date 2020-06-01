
exports.up = async knex => knex.schema.createTable('products', table => {
    table.increments('id')
    table.string('name', 100).unique().notNullable()
    table.float('price').notNullable()
    table.timestamp('deleted_at')
    table.timestamp('created_at').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTable('products')


exports.up = async knex => knex.schema.createTable('products', table => {
    table.increments('id')
    table.string('name', 100).unique().notNullable()
    table.float('price').notNullable()
    table.datetime('deleted_at')
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    table.timestamp('created_at').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTable('products')

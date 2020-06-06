
exports.up = async knex => knex.schema.createTable('warehouses', table => {
    table.increments('id')
    table.string('name', 100).unique().notNullable()
    table.integer('cep', 8).notNullable()
    table.string('location').notNullable()
    table.string('image_url').notNullable()
    table.datetime('deleted_at')
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    table.timestamp('created_at').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTable('warehouses')

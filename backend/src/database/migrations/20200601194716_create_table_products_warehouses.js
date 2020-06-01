
exports.up = async = knex => knex.schema.createTable('products_warehouses', table => {
    table.increments('id')
    table.integer('ns').unique().notNullable()
    table.integer('product_id').notNullable().unsigned()
    table.integer('warehouse_id').notNullable().unsigned()
    table.timestamp('created_at').defaultTo(knex.fn.now())

    table.foreign('product_id').references('id').inTable('products')
    table.foreign('warehouse_id').references('id').inTable('warehouses')
})

exports.down = async = knex => knex.schema.dropTable('products_warehouses')

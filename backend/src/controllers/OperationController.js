const knex = require('../database')

module.exports = {
    async index(req, res, next) {
        // let result = await knex('products_warehouses')
        //     .innerJoin('products', 'products_warehouses.product_id', 'products.id')
        //     // .innerJoin('warehouses', 'prodcuts_warehouses.warehouse_id', 'warehouse.id')

        let result = await knex('products_warehouses')
            .select('products_warehouses.ns', 'products_warehouses.created_at as date', 'products.name as product_name', 'warehouses.name as warehouse_name')
            .from('products')
            .joinRaw('inner join products_warehouses on products_warehouses.product_id = products.id inner join warehouses on products_warehouses.warehouse_id = warehouses.id')


        res.json(result)
    },

    async indexById() {
        
    }
}
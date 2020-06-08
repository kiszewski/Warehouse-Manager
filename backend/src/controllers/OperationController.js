const knex = require('../database')

module.exports = {
    async index(req, res, next) {
        try {
            var options = { year: 'numeric', month: 'numeric', day: 'numeric' }

            if (Object.keys(req.query).length === 0) {
                result = await knex('products_warehouses')
                    .select('products_warehouses.ns',
                        'products_warehouses.created_at as date',
                        'products.name as product_name',
                        'warehouses.name as warehouse_name')
                    .from('products')
                    .joinRaw(`inner join products_warehouses on products_warehouses.product_id = products.id 
                    inner join warehouses on products_warehouses.warehouse_id = warehouses.id`)
            } else {
                const { ns } = req.query

                result = await knex('products_warehouses')
                    .select('products_warehouses.ns',
                        'products_warehouses.created_at as date',
                        'products.name as product_name',
                        'warehouses.name as warehouse_name')
                    .from('products')
                    .joinRaw(`inner join products_warehouses on products_warehouses.product_id = products.id 
                inner join warehouses on products_warehouses.warehouse_id = warehouses.id`)
                    .where({ ns })
            }

            result.forEach(operation => {
                operation.date = operation.date.toLocaleDateString('en-US', options);
            })

            res.json(result)
        } catch (error) {
            next(error)
        }
    }
}
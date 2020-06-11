const knex = require('../database')
const { column } = require('../database')

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
                let { ns, product_name, warehouse_name } = req.query

                operation = {}

                if (ns !== 'null' && ns !== '') {
                    operation.ns = ns
                }
                if (product_name !== '') {
                    result = await knex('products').select('id').where({name: product_name})
                    operation.product_id = result[0].id
                }
                if (warehouse_name !== '') {
                    result = await knex('warehouses').select('id').where({name: warehouse_name})
                    operation.warehouse_id = result[0].id
                }

                console.log(operation);

                result = await knex('products_warehouses')
                    .select('products_warehouses.ns',
                        'products_warehouses.created_at as date',
                        'products.name as product_name',
                        'warehouses.name as warehouse_name')
                    .from('products')
                    .joinRaw(`inner join products_warehouses on products_warehouses.product_id = products.id 
                inner join warehouses on products_warehouses.warehouse_id = warehouses.id`)
                    .where(operation)
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
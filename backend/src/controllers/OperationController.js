const knex = require('../database')
const { column } = require('../database')
const { query } = require('express')

module.exports = {
    async index(req, res, next) {
        try {
            var options = { year: 'numeric', month: 'numeric', day: 'numeric' }

            let query = knex('products_warehouses')
                .select('products_warehouses.ns',
                    'products_warehouses.created_at as date',
                    'products.name as product_name',
                    'warehouses.name as warehouse_name')
                .from('products')
                .joinRaw(`inner join products_warehouses on products_warehouses.product_id = products.id 
                inner join warehouses on products_warehouses.warehouse_id = warehouses.id`)

            if (Object.keys(req.query).length !== 0) {
                
                let { ns, product_name, warehouse_name } = req.query
                
                operation = {}
                
                if (ns !== 'null' && ns !== '') {
                    operation.ns = ns
                }
                if (product_name !== '') {
                    let result = await knex('products').select('id').where({name: product_name})
                    operation.product_id = result[0].id
                }
                if (warehouse_name !== '') {
                    let result = await knex('warehouses').select('id').where({name: warehouse_name})
                    operation.warehouse_id = result[0].id
                }
                
                query.where(operation)
            }

            let result = await query

            result.forEach(operation => {
                operation.date = operation.date.toLocaleDateString('en-US', options);
            })

            res.json(result)
        } catch (error) {
            next(error)
        }
    }
}
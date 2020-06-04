const knex = require('../database')

module.exports = {
    async index(req, res, next) {
        try {
            products = await knex('products')
            res.json(products)
        } catch (error) {
            next(error)
        }
    },

    async create(req, res, next) {
        try {
            const { name, price } = req.body

            const result = await knex('products')
                .insert({name, price})

            const id = result[0]

            res.json({ id, name, price })
        } catch (error) {
            next(error)
        }
    },

    async update(req, res, next) {
        try {
            const { id } = req.params
            const { name, price } = req.body

            let result = await knex('products')
                .where('id', '=', id)
                .update({ name, price }, ['name', 'price', 'id'])

            result = result === 1 ? { id, name, price } : 'error'

            res.json(result)
            
        } catch (error) {
            next(error)
        }
    },

    delete(req, res, next) {

    }
}
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

    update(req, res, next) {

    },

    delete(req, res, next) {

    }
}
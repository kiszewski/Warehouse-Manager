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
                .insert({ name, price })

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
                .where({ id })
                .update({ name, price }, ['name', 'price', 'id'])

            if (result === 1) {
                result = { id, name, price }
            } else {
                throw 'Id inválido'
            }

            res.json(result)

        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params

            let result = await knex('products')
                .where({ id })
                .delete()

            if (result !== 1) {
                throw 'Id inválido'
            }

            res.json(result)

        } catch (error) {
            next(error)
        }
    }
}
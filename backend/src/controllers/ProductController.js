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

    create(req, res, next) {

    },

    update(req, res, next) {

    },

    delete(req, res, next) {

    }
}
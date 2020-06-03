const knex = require('../database')

module.exports = {
    async index(req, res, next) {
        try {
            warehouses = await knex('warehouses')
            res.json(warehouses)
        } catch (error) {
            
        }
    },

    create(req, res, next) {

    },

    update(req, res, next) {

    },

    delete(req, res, next) {

    }
}
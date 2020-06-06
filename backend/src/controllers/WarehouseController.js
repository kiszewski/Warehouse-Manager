const knex = require('../database')

module.exports = {
    async index(req, res, next) {
        try {
            warehouses = await knex('warehouses')
            res.json(warehouses)
        } catch (error) {
            next(error)
        }
    },

    async create(req, res, next) {
        try {
            let warehouse = { name, cep, location, image_url } = req.body

            id = await knex('warehouses')
                .insert(warehouse)

            warehouse.id = id[0]

            res.json(warehouse)
        } catch (error) {
            next(error)
        }
    },

    update(req, res, next) {

    },

    delete(req, res, next) {

    }
}
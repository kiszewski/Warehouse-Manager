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

    async update(req, res, next) {
        let warehouse = { name, cep, location, image_url } = req.body
        const { id } = req.params

        let result = await knex('warehouses')
            .update(warehouse)
            .where({ id })

        if (result === 1) {
            warehouse.id = id
            result = warehouse
        } else {
            throw "Id inválido"
        }

        res.json(result)
    },

    delete(req, res, next) {

    }
}
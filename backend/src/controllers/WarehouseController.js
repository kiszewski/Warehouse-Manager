const knex = require('../database')

module.exports = {
    async index(req, res, next) {
        try {
            let warehouses = await knex('warehouses')
                .where({ deleted_at: null })


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
        try {
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

        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params

            let result = await knex('warehouses')
                .update({ deleted_at: knex.fn.now() })
                .where({ id })

            if (result !== 1) {
                throw 'Id inválido'
            }

            res.json(result)
        } catch (error) {
            next(error)
        }
    }
}
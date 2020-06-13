const knex = require('../database')

module.exports = {
    async index(req, res, next) {
        try {
            products = await knex('products')
                .where({ deleted_at: null })
            res.json(products)
        } catch (error) {
            next(error)
        }
    },

    async indexById(req, res, next) {
        try {
            const { id } = req.params

            product = await knex('products')
                .where({ id })

            product[0] ? res.json(product[0]) : res.status('400')

            res.send({error: "Id não encontrado"})
        } catch (error) {
            next(error)
        }
    },

    async create(req, res, next) {
        try {
            const { name, price } = req.body
            console.log(isNaN(price));
            

            if(typeof name !== 'string' || !isNaN(name))  {
                res.status('400')
                res.send({error: 'Formato de nome inválido'})
            } else if(isNaN(price)) {
                res.status('400')
                res.send({error: 'Formato de preço inválido'})
            } else {
                const result = await knex('products')
                    .insert({ name, price })
                const id = result[0]
    
                res.json({ id, name, price })
            }     
        } catch (error) {
            if(error.message.match('ER_DUP_ENTRY')) {
                error.message = 'Produto com nome duplicado'
                next(error)
            } else {
                next(error)
            }
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
            if(error.message.match('ER_DUP_ENTRY')) {
                error.message = 'Produto com nome duplicado'
                next(error)
            } else {
                next(error)
            }
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params

            let result = await knex('products').where({ id })

            if (result[0]) {
                product = result[0]
                name = `_ZZ${product.name}`
                
                await knex('products')
                .update({ 
                    deleted_at: knex.fn.now(),  
                    name
                }).where({ id })
            } else {
                throw 'Id inválido'
            }
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
}
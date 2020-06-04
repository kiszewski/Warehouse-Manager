const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')
const WarehouseController = require('./controllers/WarehouseController')

routes
    .get('/products', ProductController.index )
    .post('/products', ProductController.create )
    .put('/products/:id', ProductController.update )
    .get('/warehouses', WarehouseController.index )

module.exports = routes
const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')
const WarehouseController = require('./controllers/WarehouseController')

routes
    .get('/products', ProductController.index )
    .get('/warehouses', WarehouseController.index )
    .post('/products', ProductController.create )

module.exports = routes
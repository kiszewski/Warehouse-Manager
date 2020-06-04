const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')
const WarehouseController = require('./controllers/WarehouseController')

routes
    //Produtos
    .get('/products', ProductController.index )
    .post('/products', ProductController.create )
    .put('/products/:id', ProductController.update )
    .delete('/products/:id', ProductController.delete )

    //Almoxarifados:
    .get('/warehouses', WarehouseController.index )

module.exports = routes
const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')
const WarehouseController = require('./controllers/WarehouseController')
const OperationController = require('./controllers/OperationController')

routes
    //Produtos
    .get('/products', ProductController.index )
    .get('/products/:id', ProductController.indexById )
    .post('/products', ProductController.create )
    .put('/products/:id', ProductController.update )
    .delete('/products/:id', ProductController.delete )
    
    //Almoxarifados:
    .get('/warehouses', WarehouseController.index )
    .post('/warehouses', WarehouseController.create )
    .put('/warehouses/:id', WarehouseController.update )
    .delete('/warehouses/:id', WarehouseController.delete )
    
    //Movimentações:
    .get('/operations', OperationController.index )
    .post('/operations', OperationController.create )

module.exports = routes
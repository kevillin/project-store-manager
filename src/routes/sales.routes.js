const express = require('express');

const middlewares = require('../middlewares/product.mid');
const salesController = require('../controllers/sales.controller');

const salesRouter = express.Router();

salesRouter.post('/', middlewares.validateSales,
  middlewares.validateProductId, salesController.newProduct);
salesRouter.get('/', salesController.getAll);
salesRouter.get('/:id', salesController.getById);
module.exports = salesRouter;
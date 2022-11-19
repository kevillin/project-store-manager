const express = require('express');

const middlewares = require('../middlewares/product.mid');
const salesController = require('../controllers/sales.controller');

const salesRouter = express.Router();

salesRouter.post('/', middlewares.validateSales,
  middlewares.validateProductId, salesController.newProduct);

module.exports = salesRouter;
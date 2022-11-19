const express = require('express');

const productsController = require('../controllers/products.controller');
const middlewares = require('../middlewares/product.mid');

const productRouter = express.Router();

productRouter.get('/', productsController.getAll);
productRouter.get('/:id', productsController.getById);
productRouter.post('/', middlewares.validateNameProduct, productsController.newProduct);
productRouter.delete('/:id', productsController.deleteProduct);

module.exports = productRouter;
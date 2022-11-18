const express = require('express');

const productsController = require('../controllers/products.controller');
const validateNameProduct = require('../middlewares/product.mid');

const productRouter = express.Router();

productRouter.get('/', productsController.getAll);
productRouter.get('/:id', productsController.getById);
productRouter.post('/', validateNameProduct, productsController.newProduct);
productRouter.delete('/:id', productsController.deleteProduct);

module.exports = productRouter;
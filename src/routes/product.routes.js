const express = require('express');
const getAllProducts = require('../controllers/getAllProducts');
const getProductById = require('../controllers/getProductById');
const addNewProduct = require('../controllers/addNewProduct');

const validateNameProduct = require('../middlewares/product.mid');

const productRouter = express.Router();

productRouter.get('/', getAllProducts);

productRouter.get('/:id', getProductById);

productRouter.post('/', validateNameProduct, addNewProduct);

module.exports = productRouter;
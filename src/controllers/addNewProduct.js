const products = require('../models/db/products.model');

const addNewProduct = async (req, res) => {
  const name = req.body;
  const response = await products.newProduct(name);

  return res.status(201).json(response);
};

module.exports = addNewProduct;
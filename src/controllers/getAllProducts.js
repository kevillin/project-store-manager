const products = require('../models/db/products.model');

const getAllProducts = async (_req, res) => {
  const result = await products.getAll();
  
  res.status(200).json(result);
};

module.exports = getAllProducts;
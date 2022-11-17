const products = require('../models/db/products.model');

const getProductById = async (req, res) => {
  const { id } = req.params;
  const result = await products.getById(id);

  if (!result) return res.status(404).json({ message: 'Product not found' });
  
  return res.status(200).json(result);
};

module.exports = getProductById;
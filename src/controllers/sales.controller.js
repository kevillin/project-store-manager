const salesService = require('../services/sales.service');

const newProduct = async (req, res) => {
  const product = req.body;
  const { message } = await salesService.newProduct(product);

  // if (type) return res.status(type).json(message);
  // if (!productId) return res.status(404).json({ message: 'Product not found' });

  return res.status(201).json({ id: message, itemsSold: product });
};

module.exports = {
  newProduct,
};
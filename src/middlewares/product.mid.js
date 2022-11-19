const existId = require('../models/db/products.model');

const validateNameProduct = (req, res, next) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }

  return next();
};

const validateSales = (req, res, next) => {
  const productId = req.body;

  const hasProductId = productId.every((product) => product.productId);
  const hasQuatity = productId.every((product) => product.quantity !== null
    && product.quantity !== undefined);
  const isMoreThanZero = productId.every((product) => product.quantity > 0);
  if (!hasProductId) return res.status(400).json({ message: '"productId" is required' });
  if (!hasQuatity) return res.status(400).json({ message: '"quantity" is required' });
  if (!isMoreThanZero) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  return next();
};

const validateProductId = async (req, res, next) => {
  const productId = req.body;
  const exist = await existId.getAll();

  const extractId = exist.map((ex) => ex.id);
  const hasProductId = productId.every((product) => extractId.includes(product.productId));
  if (!hasProductId) return res.status(404).json({ message: 'Product not found' });

  return next();
};
module.exports = {
  validateNameProduct,
  validateSales,
  validateProductId,
};
const productService = require('../services/product.service');

const getAll = async (_req, res) => {
  const { type, message } = await productService.getAll();

  if (type) return res.status(type).json(message);
  
  res.status(200).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getById(id);

  if (type) return res.status(type).json({ message: 'Product not found' });
  if (!message) return res.status(404).json({ message: 'Product not found' });
  
  return res.status(200).json(message);
};

const newProduct = async (req, res) => {
  const name = req.body;
  const { type, message } = await productService.newProduct(name);

  if (type) return res.status(type).json(message);

  return res.status(201).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type } = await productService.deleteProduct(id);

  if (type) return res.status(type).json({ message: 'Product not found' });

  return res.sendStatus(204);
};

module.exports = {
  getAll,
  getById,
  newProduct,
  deleteProduct,
};
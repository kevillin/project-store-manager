const salesService = require('../services/sales.service');

const getAll = async (_req, res) => {
  const { type, message } = await salesService.getAll();

  if (type) return res.status(type).json(message);
  
  res.status(200).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getById(Number(id));

  if (type) return res.status(type).json({ message });
  // if (!message) return res.status(404).json({ message: 'Sale not found' });
  
  return res.status(200).json(message);
};

const newProduct = async (req, res) => {
  const product = req.body;
  const { message } = await salesService.newProduct(product);

  return res.status(201).json({ id: message, itemsSold: product });
};

module.exports = {
  getAll,
  getById,
  newProduct,
};
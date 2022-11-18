const products = require('../models/db/products.model');

const getAll = async () => {
  const result = await products.getAll();

  return { type: null, message: result };
};

const getById = async (id) => {
  const result = await products.getById(id);

  return { type: null, message: result };
};

const newProduct = async (name) => {
  const result = await products.newProduct(name);

  return { type: null, message: result };
};

const deleteProduct = async (id) => {
  const exist = await products.getById(id);

  if (!exist) return { type: 404, message: 'Product not found' };

  await products.deleteProduct(id);

  return { type: null };
};

module.exports = {
  getAll,
  getById,
  newProduct,
  deleteProduct,
};
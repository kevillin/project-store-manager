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

module.exports = {
  getAll,
  getById,
  newProduct,
};
const sales = require('../models/db/sales.model');

const getAll = async () => {
  const result = await sales.getAll();

  return { type: null, message: result };
};

const getById = async (id) => {
  const result = await sales.getById(id);

  if (result.length === 0) return { type: 404, message: 'Sale not found' };

  return { type: null, message: result };
};

const newProduct = async (product) => {
  const { id } = await sales.insertIdSales();
  await Promise.all(product.map(async (sale) => sales.newProduct(id, sale)));

  return { type: 201, message: id };
};

module.exports = {
  getAll,
  getById,
  newProduct,
};
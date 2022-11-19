const sales = require('../models/db/sales.model');

const newProduct = async (product) => {
  const { id } = await sales.insertIdSales();
  await Promise.all(product.map(async (sale) => sales.newProduct(id, sale)));

  return { type: 201, message: id };
};

module.exports = {
  newProduct,
};
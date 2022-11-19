const camelize = require('camelize');
const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    `SELECT * FROM StoreManager.sales AS sales 
      INNER JOIN StoreManager.sales_products AS salesProducts on sales.id = salesProducts.sale_id`,
  );

  return camelize(result);
};

const getById = async (id) => {
  const [result] = await connection.execute(
    `SELECT sales.date, salesProducts.product_id, salesProducts.quantity  
      FROM StoreManager.sales AS sales 
      INNER JOIN StoreManager.sales_products AS salesProducts on sales.id = salesProducts.sale_id
      WHERE sales.id = ?`, [id],
  );

  console.log(result);
  return camelize(result);
};

const insertIdSales = async () => {
  const date = new Date();
    const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)', [date],
    );
  
  return { id: insertId };
};

const newProduct = async (saleId, { productId, quantity }) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );

  return { saleId, productId, quantity };
};

module.exports = {
  getAll,
  getById,
  insertIdSales,
  newProduct,
};
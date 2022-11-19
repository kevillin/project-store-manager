const connection = require('./connection');

const insertIdSales = async () => {
  const date = new Date();
    const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)', [date],
    );
  
  return { id: insertId };
};

const newProduct = async (saleId, { productId, quantity }) => {
  // await connection.execute(
  //   'INSERT INTO StoreManager.sales (saleId, productId, quantity) VALUES (?, ?, ?)',
  //   [saleId, productId, quantity],
  // );
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );

  return { saleId, productId, quantity };
};

module.exports = {
  insertIdSales,
  newProduct,
};
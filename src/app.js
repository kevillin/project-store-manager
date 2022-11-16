const express = require('express');
// const camelize = require('camelize');
const products = require('./models/db/products.model');
// const connection = require('./models/db/connection');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', async (_req, res) => {
  const result = await products.getAll();
  
  res.status(200).json(result);
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const result = await products.getById(id);

  if (!result) return res.status(404).json({ message: 'Product not found' });
  
  return res.status(200).json(result);
});

app.post('/products', async (req, res) => {
  const name = req.body;
  const response = await products.newProduct(name);

  return res.status(201).json(response);
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
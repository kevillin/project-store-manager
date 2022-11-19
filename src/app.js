const express = require('express');
const productRouter = require('./routes/product.routes');
const salesRouter = require('./routes/sales.routes');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productRouter);
app.use('/sales', salesRouter);

module.exports = app;
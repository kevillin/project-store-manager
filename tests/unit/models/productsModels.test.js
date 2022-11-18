const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/db/connection');

const productModels = require('../../../src/models/db/products.model');
const mockProduct = require('../../mocksProduct');

describe('Camada Models', function () {

  afterEach(function () { sinon.restore() });

  it('Verifica se os produtos retornados vem em um array', async function () {
    const getAll = await productModels.getAll();

    expect(getAll).to.be.a('array');
  });

  it('Lista todos os produtos cadastrados', async function () {
    const response = mockProduct.allProductsResponse;
    sinon.stub(connection, 'execute').resolves([response])
    
    const getAll = await productModels.getAll();
    expect(getAll).to.deep.equal(response);
  });

  it('Lista os produtos cadastrados pelo id', async function () {
    const response = mockProduct.productSearchNameResponse;
    sinon.stub(connection, 'execute').resolves([[response]]);
    
    const getById = await productModels.getById(1);
    expect(getById).to.be.equal(response);
  });

    it('Testa se adiciona um novo produto', async function () {
    const response = mockProduct.productCreateResponse;
    sinon.stub(connection, 'execute').resolves([response]);
    
    const newProduct = await productModels.newProduct(response);
    expect(newProduct).to.be.a('object');
  });
});
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/db/connection');

const salesModels = require('../../../src/models/db/sales.model');
const mockSales = require('../../mocksSales');

describe('Camada Models', function () {

  afterEach(function () { sinon.restore() });

  it('Verifica se os produtos retornados vem em um array', async function () {
    const getAll = await salesModels.getAll();

    expect(getAll).to.be.a('array');
  });

  it('Lista todos os produtos cadastrados', async function () {
    const response = mockSales.allProductsResponse;
    sinon.stub(connection, 'execute').resolves([response])
    
    const getAll = await salesModels.getAll();
    expect(getAll).to.deep.equal(response);
  });

  it('Lista os produtos cadastrados pelo id', async function () {
    const response = mockSales.saleCreateResponse;
    sinon.stub(connection, 'execute').resolves([response]);
    
    const getById = await salesModels.getById(3);
    expect(getById).to.be.equal(response);
  });

  it('Testa se adiciona um novo produto', async function () {
    const response = mockSales.productCreateResponse;
    sinon.stub(connection, 'execute').resolves([response]);
    
    const newProduct = await salesModels.newProduct(response);
    expect(newProduct).to.be.a('array');
  });
});
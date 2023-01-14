const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const salesServices = require('../../../src/services/sales.service');
const salesModels = require('../../../src/models/db/sales.model');
const mockSales = require('../../mocksSales');

describe('Testa a camada controller para a rota "/sales"', () => {

  afterEach(function () { sinon.restore() });
  
  it('Verifica se os produtos retornados vem em um array', async() => {
    const getAll = await salesServices.getAll();

    expect(getAll.message).to.be.a('array');
  });

  it('Lista todos os produtos cadastrados', async() => {
    const response = mockSales.allProductsResponse;
    sinon.stub(salesModels, 'getAll').resolves(response)
    
    
    const getAll = await salesServices.getAll();
    expect(getAll.message).to.deep.equal(response);
  });

  it('Lista os produtos cadastrados pelo id', async function () {
    const response = mockSales.productSearchNameResponse;
    sinon.stub(salesModels, 'getById').resolves(response)
    
    const getById = await salesServices.getById(1);
    expect(getById.message).to.be.equal(response);
  });

  it('Testa se adiciona um novo produto', async function () {
    const response = mockSales.productCreateResponse;
    sinon.stub(salesModels, 'newProduct').resolves(response)
    
    const newProduct = await salesServices.newProduct(response);
    expect(newProduct).to.be.a('object');
  });
});
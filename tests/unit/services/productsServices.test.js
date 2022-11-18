const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productServices = require('../../../src/services/product.service');
const productModels = require('../../../src/models/db/products.model');
const mockProduct = require('../../mocksProduct');

describe('Testa a camada controller para a rota "/product"', () => {

  afterEach(function () { sinon.restore() });
  
  it('Verifica se os produtos retornados vem em um array', async() => {
    const getAll = await productServices.getAll();

    expect(getAll.message).to.be.a('array');
  });

  it('Lista todos os produtos cadastrados', async() => {
    const response = mockProduct.allProductsResponse;
    sinon.stub(productModels, 'getAll').resolves(response)
    
    
    const getAll = await productServices.getAll();
    expect(getAll.message).to.deep.equal(response);
  });

    it('Lista os produtos cadastrados pelo id', async function () {
    const response = mockProduct.productSearchNameResponse;
    sinon.stub(productModels, 'getById').resolves(response)
    
    const getById = await productServices.getById(1);
    expect(getById.message).to.be.equal(response);
  });

    it('Testa se adiciona um novo produto', async function () {
    const response = mockProduct.productCreateResponse;
    sinon.stub(productModels, 'newProduct').resolves(response)
    
    const newProduct = await productServices.newProduct(response);
    expect(newProduct).to.be.a('object');
  });
});
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productController = require('../../../src/controllers/products.controller');
const productServices = require('../../../src/services/product.service');
const mockProduct = require('../../mocksProduct');

describe('Camada controller', function () {

  afterEach(sinon.restore);

  it('Lista todos os produtos cadastrados', async () => {
    const response = mockProduct.allProductsResponse;
    sinon.stub(productServices, 'getAll').resolves(response)
      
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.getAll(req, res);

    expect(res.status).to.have.been.calledOnceWith(200);
  });

  it('Lista os produtos cadastrados pelo id', async function () {
    const res = {};
    const req = { params: {id: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    const response = mockProduct.productSearchNameResponse;
    sinon.stub(productServices, 'getById').resolves({type: null, message: response});

    await productController.getById(req, res);
      
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(response);
  });

  it('Testa se adiciona um novo produto', async function () {
    const req = { body: mockProduct.rightProductBody };
    const res = {};
    const dataBase = mockProduct.allProductsResponse;
    const result = [...dataBase, { id: 4, ...mockProduct.rightProductBody }];
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    
    // const response = mockProduct.productCreateResponse;
    sinon.stub(productServices, 'newProduct').resolves({type: null, message: result})
    
    await productController.newProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(result);
  });
});
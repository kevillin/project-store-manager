const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const salesController = require('../../../src/controllers/sales.controller');
const salesService = require('../../../src/services/sales.service');
const mockSales = require('../../mocksSales');

describe('Camada controller', function () {

  afterEach(sinon.restore);

  it('Lista todos os produtos cadastrados', async () => {
    const response = mockSales.allProductsResponse;
    sinon.stub(salesService, 'getAll').resolves(response)
      
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesController.getAll(req, res);

    expect(res.status).to.have.been.calledOnceWith(200);
  });

  it('Lista os produtos cadastrados pelo id', async function () {
    const res = {};
    const req = { params: {id: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    const response = mockSales.productSearchNameResponse;
    sinon.stub(salesService, 'getById').resolves({type: null, message: response});

    await salesController.getById(req, res);
      
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(response);
  });

  it('Testa se adiciona um novo produto', async function () {
    const req = { body: mockSales.rightSaleBody };
    const res = {};
    const dataBase = mockSales.allProductsResponse;
    const result = [...dataBase, { id: 4, ...mockSales.rightSaleBody }];
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    
    // const response = mockProduct.productCreateResponse;
    sinon.stub(salesService, 'newProduct').resolves({type: null, message: result})
    
    await salesController.newProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(result);
  });
});
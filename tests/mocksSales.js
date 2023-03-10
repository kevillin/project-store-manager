const wrongSaleNotProductIdBody = [{quantity:1}];
const wrongSaleNotQuantityBody = [{productId:1}];
const nonexistentProductIdBody = [{productId:9999,quantity:1}];
const nonexistentProductIdBody2 = [
  {productId:1,quantity:1},
  {productId:99999,quantity:5},
];
const wrongZeroQuantityBody = [{productId:1,quantity: 0}];
const wrongZeroNegativeBody = [{productId:1,quantity:-1}];
const otherProductIdSaleBody = [
  {productId:1,quantity:1},
  {productId:3,quantity:5},
];
const rightSaleBody = [
  {productId:1,quantity:1},
  {productId:2,quantity:5},
];
const saleCreateResponse = {
  id: 3,
  itemsSold: [
    {productId:1,quantity:1},
    {productId:2,quantity:5},
  ]
}

module.exports = {
  wrongSaleNotProductIdBody,
  wrongSaleNotQuantityBody,
  nonexistentProductIdBody,
  nonexistentProductIdBody2,
  wrongZeroQuantityBody,
  wrongZeroNegativeBody,
  otherProductIdSaleBody,
  rightSaleBody,
  saleCreateResponse,
};
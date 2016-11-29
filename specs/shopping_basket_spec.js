var basket = require('../shopping_basket');
var assert = require('assert');

describe("shopping basket", function(){
  it("shppoing basket is empty", function(){
    assert.equal(0, basket.totalInBasket);
  })
})
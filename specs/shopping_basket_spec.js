var shoppingBasket = require('../shopping_basket');
var assert = require('assert');

describe("shopping basket:", function(){
  it("shopping basket is empty", function(){
    assert.equal(0, shoppingBasket.basket.length);
  });

describe("shopping basket:", function(){
  it("shopping basket added to", function(){
    shoppingBasket.addItem("milk");
    assert.equal(1, shoppingBasket.basket.length);
  })
})



})
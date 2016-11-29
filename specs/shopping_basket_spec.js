var shoppingBasket = require('../shopping_basket');
var milk = require('../milk');
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
});

describe("shopping basket:", function(){
  it("removed item from shopping basket", function(){
    shoppingBasket.removeItem("milk");
    assert.equal(0, shoppingBasket.basket.length);
  })
});

describe("shopping basket:", function(){
  it("total cost of empty shopping basket", function(){
    shoppingBasket.totalCost();
    assert.equal(0, shoppingBasket.basket);
  })
});

describe("shopping basket:", function(){
  it("total cost of items in basket", function(){
    shoppingBasket.addItem(milk);
    assert.equal( 9.95, shoppingBasket.totalCost() );
  })
});

})
var shoppingBasket = require('../shopping_basket');
var milk = require('../milk');
var bread = require('../bread');
var assert = require('assert');

describe("shopping basket:", function(){
  it("shopping basket is empty", function(){
    assert.equal(0, shoppingBasket.basket.length);
  });

describe("shopping basket:", function(){
  it("added item to basket", function(){
    shoppingBasket.addItem(milk);
    shoppingBasket.addItem(bread);
    assert.equal(2, shoppingBasket.basket.length);
    console.log(shoppingBasket.basket);
  })
});

describe("shopping basket:", function(){
  it("removed item from shopping basket", function(){
    shoppingBasket.removeItem(milk);
    shoppingBasket.removeItem(bread);
    assert.equal(0, shoppingBasket.basket.length);
    console.log(shoppingBasket.basket);
  })
});

describe("shopping basket:", function(){
  it("total cost of empty shopping basket", function(){
    assert.equal( 0, shoppingBasket.totalCost() );
  })
});

describe("shopping basket:", function(){
  it("total cost of items in basket", function(){
    shoppingBasket.addItem(milk);
    assert.equal( 9.00, shoppingBasket.totalCost() );
  })
});

describe("shopping basket:", function(){
  it("10% discount on basket", function(){
    shoppingBasket.addItem(milk);
    shoppingBasket.addItem(bread);
    assert.equal( 18.00, shoppingBasket.totalCost() );
  })
})


})
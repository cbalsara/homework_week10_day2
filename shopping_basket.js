
var milk = require('./milk');

var shoppingBasket = {

  basket: [],

  addItem: function(item){
    this.basket.unshift(item);
  },

  removeItem: function(newItem){
    this.basket.shift(newItem);
  },

  totalCost: function(){
    var total = 0;
    for(var value of shoppingBasket.basket){
      total += value.price;
    }
    return total;
  }
};

module.exports = shoppingBasket;
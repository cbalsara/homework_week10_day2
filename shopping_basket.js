
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
// not sure on what to do beyond this point for discounting method!
// -----------------------------------------------------
// if statement for discount 
    if (this.shoppingBasket.totalCost() >= 20){
       this.shoppingBasket.discount();
    }
  },
// dicount to return 10% off the basket price
  discount: function(){
    this.shoppingBasket.totalCost() * 0.5;
    return this.shoppingBasket.totalCost();
    }
};



module.exports = shoppingBasket;
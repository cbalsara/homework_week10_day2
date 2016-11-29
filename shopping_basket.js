

var shoppingBasket = {

  basket: [],
  addItem: function(item){
    this.basket.unshift(item);
  },

  removeItem: function(newItem){
    this.basket.shift(newItem);
  }

};









// basketCost: function(){
//   var total = 0;
//   for (var value of shoppingBasket){
//     total += value.cost;
//   }
// }







module.exports = shoppingBasket;
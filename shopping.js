var cart = []

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function setCart(new_cart) {
  cart = new_cart;
}

function randomPrice() {
  return Math.floor((Math.random()*100));
}

function addToCart(itemName) {
  cart.push({[itemName]: randomPrice()})
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if (cart.length == 0){
    return "Your shopping cart is empty."
  }else{
    var itemArray = []
    for (var i=0; i < cart.length; i++) {
      let item = cart[i];
      let itemName = Object.keys(item)[0];
      let itemCost = item[itemName];
      let itemString = `${itemName} at $${itemCost}`
      itemArray.push(itemString);
    }
    let itemsString = itemArray.join(", ")
    let = yourCartAsString = "In your cart, you have " + itemsString + "."
    console.log(yourCartAsString)
  }
}

function removeFromCart(itemName){
  let didNotFind = true;
  for(var i=0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(itemName)){
      cart.splice(i, 1);
      didNotFind = false;
    }
  }
  if(didNotFind){
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(creditCardNum){
  if (!creditCardNum){
    console.log("We don't have a credit card on file for you to place your order.");
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNum}.`);
    cart = [];
  }
}

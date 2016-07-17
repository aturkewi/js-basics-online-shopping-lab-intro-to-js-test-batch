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
    for (var itemName in cart) {
      let itemString = `${itemName} at $${cart[itemName]}`
      itemArray.push(itemString);
    }
    let itemsString = itemArray.join(", ")
    console.log("In your cart you have " + itemsString + ".")
  }
}

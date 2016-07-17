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

// function viewCart() {
//   const l = cart.length
//
//   if (!l) {
//     return console.log("Your shopping cart is empty.")
//   }
//
//   const itemsAndPrices = []
//
//   for (let i = 0; i < l; i++) {
//     let itemAndPrice = cart[i]
//     let item = Object.keys(itemAndPrice)[0]
//     let price = itemAndPrice[item]
//
//     itemsAndPrices.push(`${item} at \$${price}`)
//   }
//
//   console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
// }

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
    let = yourCartAsString = "In your cart you have " + itemsString + "."
    console.log(yourCartAsString)
  }
}

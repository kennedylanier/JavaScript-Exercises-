// Array to represent the shopping list
const shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

// Adding "fruit loops" to my list
shoppingList.push('fruit loops');

// Updating "coffee" to "fair trade coffee"
const coffeeIndex = shoppingList.indexOf('coffee');
if (coffeeIndex !== -1) {
  shoppingList[coffeeIndex] = 'fair trade coffee';
}

// Replacing "chips" and "salsa" with "rice" and "beans"
const chipsIndex = shoppingList.indexOf('chips');
const salsaIndex = shoppingList.indexOf('salsa');
if (chipsIndex !== -1 && salsaIndex !== -1) {
  shoppingList.splice(chipsIndex, 1, 'rice');
  shoppingList.splice(salsaIndex, 1, 'beans');
}

// Creating an empty array to represent my shopping cart
const shoppingCart = [];

// Removing the last item from my shopping list and add it to my cart
const lastItem = shoppingList.pop();
shoppingCart.push(lastItem);

// Remove the first item from my shopping list and adding it to the cart
const firstItem = shoppingList.shift();
shoppingCart.push(firstItem);

//'While' loop that takes items from my shopping list and moves them to my cart until there are no items left on the list
while (shoppingList.length > 0) {
  const item = shoppingList.shift();
  shoppingCart.push(item);
}

// Sort the items in my cart alphabetically, then backwards
shoppingCart.sort();
shoppingCart.reverse();

// Printing the list of items in my shopping cart to the console as comma separated string
const cartItemsString = shoppingCart.join(', ');
console.log(cartItemsString);

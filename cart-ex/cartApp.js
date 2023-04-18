// cartApp.js

// Initialize cart if it does not exist in localStorage
function initializeCart() {
  if (!localStorage.getItem('cart')) {
    const cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

// Add an item to the cart
function addItem(item) {
  const cart = JSON.parse(localStorage.getItem('cart'));
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Remove an item from the cart by id
function removeItem(id) {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const updatedCart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
}

// Display the cart contents
function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  console.log(cart);
}

// Add an event listener to the form to add an item to the cart
const addItemForm = document.getElementById('addItemForm');
addItemForm.addEventListener('submit', e => {
  e.preventDefault();
  const itemName = document.getElementById('itemName').value;
  const itemPrice = parseFloat(document.getElementById('itemPrice').value);
  const item = { id: Date.now(), name: itemName, price: itemPrice };
  addItem(item);
  addItemForm.reset();
});

// Add an event listener to the button to display the cart contents
const displayCartButton = document.getElementById('displayCartButton');
displayCartButton.addEventListener('click', displayCart);

// Initialize the cart
initializeCart();
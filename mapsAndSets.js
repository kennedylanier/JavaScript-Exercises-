// Creating a map called fruitInventory
const fruitInventory = new Map([
    ['apple', 10],
    ['banana', 20],
    ['orange', 30]
  ]);
  
  // Using the set method to update the inventory of 'apple' to 15
  fruitInventory.set('apple', 15);
  
  // Using the get method to retrieve the inventory of 'banana' and store it in a variable called bananaInventory
  const bananaInventory = fruitInventory.get('banana');
  
  // Creating a set called uniqueColors with the following values: 'red', 'blue', 'green'
  const uniqueColors = new Set(['red', 'blue', 'green']);
  
  // Using the add method to add the color 'yellow' to the uniqueColors set
  uniqueColors.add('yellow');
  
  // Using the has method to check if the color 'blue' is in the uniqueColors set and store the result in a variable called hasBlue
  const hasBlue = uniqueColors.has('blue');
  
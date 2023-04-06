// variable that holds the total bill amount
const bill = 111;

// function to calculate the tip
function calculateTip(amount) {
  const tipAmount = amount * 0.2;
  return tipAmount;
}

// function to get the total bill amount with tip
function getBillTotal(amount) {
  const tip = calculateTip(amount);
  const total = amount + tip;
  return total;
}

// log the results
console.log("The tip amount is: $" + calculateTip(bill));
console.log("The total bill amount with tip is: $" + getBillTotal(bill));

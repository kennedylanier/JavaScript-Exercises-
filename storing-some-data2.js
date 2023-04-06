//Breaking things down into small steps 

// Array of names
const names = ["Kennedy", "Jacob", "Kevin", "Nunu", "Lauren"];

// Log each name in the array
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// Array of foods
const foods = ["pizza", "tacos", "sushi", "pasta", "burritos", "ramen", "hamburgers", "pho", "pad thai", "falafel"];

// Log each food in the array
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

// Multidimensional array of states
const states = [  [  ["Michigan", "Lansing", "American robin"],
["Illinois", "Springfield", "Northern Cardinal"],
["California", "Sacramento", "California quail"],
["Florida", "Tallahassee", "Northern mockingbird"],
["Hawaii", "Honolulu", "nene"],
["Tennessee", "Nashville", "Northern mockingbird"],
["Oregon", "Salem", "Western meadowlark"]
]; 

// Log each state name, capital, and bird in the array
for (let i = 0; i < states.length; i++) {
  const state = states[i];
  console.log(state[0] + " - Capital: " + state[1] + ", Bird: " + state[2]);
}
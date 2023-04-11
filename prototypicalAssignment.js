

function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = favoriteFoods;
  this.family = [];
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.toString = function() {
  return `${this.fullName()}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
};

Person.prototype.addToFamily = function(person) {
  if (person instanceof Person && !this.family.includes(person)) {
    this.family.push(person);
  }
  return this.family.length;
};

let margot = new Person("Margot", "Jones", "Orange", 27);
let jason = new Person("Jason", "Peterson", "Green", 42);
let louisa = new Person("Louisa", "Overwater", "Blue", 38,);

console.log(margot.toString()); // "Margot Jones, Favorite Color: Orange, Favorite Number: 27"
console.log(jason.toString()); // "Jason Peterson, Favorite Color: Green, Favorite Number: 42"
console.log(louisa.toString()); // "Louisa Overwater, Favorite Color: Blue, Favorite Number: 38"

console.log(margot.addToFamily(jason)); // 1
console.log(margot.addToFamily(louisa)); // 2
console.log(margot.addToFamily(jason)); // 2 (duplicate, not added)


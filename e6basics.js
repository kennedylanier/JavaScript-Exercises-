// two arrays of numbers
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [4, 5, 6, 7, 8, 9, 10];

// spread operator to combine the arrays into a new array
const numbers = [...numbers1, ...numbers2];

// define arrow function to square a number
const square = (number) => number ** 2;

// map method to create a new array of squares
const squares = numbers.map(square);

// arrow function to test if a number is even
const isEven = (number) => number % 2 === 0;

// filter method to create a new array of even squares
const evenSquares = squares.filter(isEven);

// destructuring assignment to extract the first and second even squares
const [firstEvenSquare, secondEvenSquare] = evenSquares;

// template literal to log the arrays and extracted values
console.log(`numbers: ${numbers}`);
console.log(`squares: ${squares}`);
console.log(`evenSquares: ${evenSquares}`);
console.log(`firstEvenSquare: ${firstEvenSquare}, secondEvenSquare: ${secondEvenSquare}`);
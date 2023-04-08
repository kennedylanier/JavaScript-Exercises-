//console.log outside function (unclear on whether it was supposed to be inside or outside of the function based on directions)
function power(base, exponent) {
    if (exponent === 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }
  
  console.log(power(2, 5)); // Output: 32
  console.log(power(7, 3)); // Output: 343
  console.log(power(12, 2)); // Output: 144
  console.log(power(9, 4)); // Output: 6561

  function power(base, exponent) {
    if (exponent === 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }
  //console.log inside function (unclear on whether it was supposed to be inside or outside of the function based on directions)
  const result1 = power(2, 5);
  const result2 = power(7, 3);
  const result3 = power(12, 2);
  const result4 = power(9, 4);
  
  console.log(result1); // Output: 32
  console.log(result2); // Output: 343
  console.log(result3); // Output: 144
  console.log(result4); // Output: 6561
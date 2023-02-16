// // The factorial of a non-negative integer 'n', denoted n!,
//  is the product all positive integers less than or equal to 'n'.

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    // We start from 2 since if we multiply the i with the value of 1 will not change the result value.
    result = result * i;
  }
  return result;
}

console.log(factorial(10));

//the Big O for this is O(n) because we are looping once.

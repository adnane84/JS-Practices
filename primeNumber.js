// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

//isPrime(5) = true (1* 5 or 5 *1)
//isPrime(4) = false (1* 4 or 2 * 2 or 4 *1)

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    // or we can do i <= Math.sqrt(n)
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

//the Big O for this is O(n) because we are looping once.
// in the second case the Big-O = O(sqrt(n))

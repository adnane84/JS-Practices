/*********************** Permutations *************************** */

const getPermutations = (array) => {
  let foundPermutations = [];

  function perms(subArr, currentPerm) {
    if (subArr.length === 0) {
      foundPermutations.push(currentPerm);
    }

    for (let i = 0; i < subArr.length; i++) {
      const newSubArr = subArr.slice(0, i).concat(subArr.slice(i + 1));

      const newCurrentPerm = currentPerm.concat(subArr[i]);

      perms(newSubArr, newCurrentPerm);
    }
  }

  perms(array, []);
  return foundPermutations;
};
// console.log(getPermutations([1, 2, 3]))

/********************* Palindrome  ********************** */

const isPalindrome = (str) => {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1));
  }

  return false;
};

// console.log(isPalindrome('hammah'))

/********************** Power function ********************** */

const power = (base, exponent) => {
  if (exponent === 0) return 1;

  return base * power(base, exponent - 1);
};

// console.log(power(3, 3));

/***************************** Product Of Array ******************************** */

const productOfArray = (array) => {
  if (array.length === 0) return 1;

  return array[0] * productOfArray(array.slice(1));
};

// console.log(productOfArray([19, 2, 5, 6]))

/********************************* Recursive Range ********************************* */

const recursiveRange = (n) => {
  if (n === 0) return n;
  if (n === 1) return n;

  return n + recursiveRange(n - 1);
};

// console.log(recursiveRange(5));

/********************************* Reverse String ********************************* */

const reverseString = (str) => {
  if (str.length === 0) return "";
  return reverseString(str.slice(1)) + str[0];
};

// console.log(reverseString('block'))

/********************************* LongestSub ********************************* */

const longestSub = (substring) => {
  if (substring.length <= 1) return substring.length;
  let cache = {};
  let count = 0;
  let longest = 0;
  let subStringStartIndex = 0;

  for (var i = 0; i < substring.length; i++) {
    if (cache[substring[i]] === undefined) {
      cache[substring[i]] = i;
      count += 1;
    } else {
      count = substring.slice(subStringStartIndex, i).length;

      if (count > longest) {
        longest = count;
      }

      subStringStartIndex = Math.max(
        cache[substring[i]] + 1,
        subStringStartIndex
      );
      cache[substring[i]] = i;
    }
  }

  return substring.slice(subStringStartIndex, i).length > longest
    ? substring.slice(subStringStartIndex, i).length
    : longest;
};

// console.log(longestSub("adbdbuerew"));

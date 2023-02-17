// Given an array of 'n' elements and a target element 't', find the index of 't' in
// the array. Return -1 if the target element is not found.

// Example array = [-5, 3, 7, 9, 10], t = 7 => should return 2

function linearSearch(array, t) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === t ) {
      return i;
    } 
  }
  return -1;
}

//The big-O is O(n)
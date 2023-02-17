// 3.Insertion sort:
// Insertion sort works by sorting the array one element at a time.
// It starts with the second element and compares it with the first element.
// If the second element is smaller than the first, it swaps them.
// It then moves on to the third element and compares it with the first and second elements,
// swapping as necessary. This process continues until the entire array is sorted.
// Here's an example implementation using recursion:

function insertionSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let sortedArr = insertionSort(arr.slice(1));

  for (let i = 0; i < sortedArr.length; i++) {
    if (arr[0] < sortedArr[i]) {
      return [arr[0]].concat(sortedArr.slice(0, i)).concat(sortedArr.slice(i));
    }
  }

  return sortedArr.concat(arr[0]);
}

// Example usage:
insertionSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

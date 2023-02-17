// 2.Selection sort:
// Selection sort works by repeatedly finding the minimum element
// from the unsorted part of the array and putting it at the beginning.
// Here's an example implementation using recursion:

function selectionSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let minIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }

  let temp = arr[0];
  arr[0] = arr[minIndex];
  arr[minIndex] = temp;

  return [arr[0]].concat(selectionSort(arr.slice(1)));
}

// Example usage:
selectionSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

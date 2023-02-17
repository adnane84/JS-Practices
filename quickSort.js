// 5.Quick sort:
// Quick sort is another divide-and-conquer algorithm that works by selecting a "pivot" element
// from the array and partitioning the other elements into two sub-arrays,
// according to whether they are less than or greater than the pivot.
// The sub-arrays are then sorted recursively.
// Here's an example implementation using recursion:

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];

  let less = [];
  let greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }

    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return quickSort(less).concat(pivot, quickSort(greater));
}

// Example usage:
quickSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// Now, to sort an array by dividing it and merging it back,
// we can use the merge sort algorithm.
// Here's an example implementation:

function divideAndMergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  let sortedLeft = divideAndMergeSort(left);
  let sortedRight = divideAndMergeSort(right);

  return merge(sortedLeft, sortedRight);
}

// Example usage:
console.log(divideAndMergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

//  In JavaScript, there are several sorting algorithms available.
// Here are explanations of some common ones,
// along with examples of how to implement them Recursively:

// 1: Bubble sort:
// Bubble sort is a simple algorithm that repeatedly swaps adjacent elements
// if they are in the wrong order. It's called "bubble sort" because the smaller
// elements "bubble" to the top of the array. Here's an example implementation
// using recursion:

function bubbleSort(array) {
  if (array.length <= 1) {
    return array;
  }
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
  return bubbleSort(array.slice(0, -1)).concat(array.slice(-1));
}

//bubbleSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

//Here's an other example implementation of bubble sort.

function bubbSort(array) {
  let n = array.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return array;
}

//bubbSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]) ; //[1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

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

// 4.Merge sort:
// Merge sort is a divide-and-conquer algorithm that divides an array into two halves,
// sorts each half, and then merges the sorted halves back together.
// Here's an example implementation using recursion:

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
}

// Example usage:
mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

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

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

//different way to approach it, but now our Pivot will be the last index of our array.

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  let pivot = array[array.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Worst case will be Big-O = O(n^2)
// Avg case is O(nlogn) because we got 2 arrays = O(logn) plus a loop.

function quickSort(arr, s, e) {
  if (e - s + 1 <= 1) {
    return arr;
  }

  let pivot = arr[e];
  let left = s; // pointer for left side

  // Partition: elements smaller than pivot on left side
  for (let i = s; i < e; i++) {
    if (arr[i] < pivot) {
      let temp = arr[left];
      arr[left] = arr[i];
      arr[i] = temp;
      left++;
    }
  }
  // Move pivot in-between left & right sides
  arr[e] = arr[left];
  arr[left] = pivot;

  //Quick sort left side
  quickSort(arr, s, left - 1);

  //Quick sort right side
  quickSort(arr, left + 1, e);

  return arr;
}

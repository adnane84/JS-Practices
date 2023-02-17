// Given a sorted array of 'n' elements and a target element't',
// find the index of 't' in the array. Return -1 if the target elements not found.
// Binary search work in sorted array only, so you need to sort the array first or use the linear search.

function recursiveBinarySearch(array, t) {
  return search(array, t, 0, array.length - 1);
}

function search(array, t, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (t === array[middleIndex]) {
    return middleIndex;
  }

  if (t < array[middleIndex]) {
    return search(array, t, leftIndex, middleIndex - 1);
  } else {
    return search(array, t, middleIndex + 1, rightIndex);
  }
}

//The time complexity for this function will be Big-O = O(logn)

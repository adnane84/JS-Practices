// Given a sorted array of 'n' elements and a target element't',
// find the index of 't' in the array. Return -1 if the target elements not found.
// Binary search work in sorted array only, so you need to sort the array first or use the linear search.

// If the array is empty, return -1 as the element cannot found.If
// If the array.length is greater than 2, find the middle element in the array.
// If the target is equal to the middle element, return the middle element index.
// If the target is greater than the element, binary search left half of the array.
// Do the opposite if the target is less that the middle element.

function binarySearch(array, t) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (t === array[middleIndex]) {
      return middleIndex;
    }
    if (t < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

// //   if(t < array[middleIndex]) {
//   rightIndex = middleIndex - 1;
// } else {
//   leftIndex = middleIndex + 1;
// }
// }

// When we compare the middle index with the EventTarget,
//  is to know where our target could be located,
//  and then we shrink our array to make it easy to find our target.


// The big will be O(logn)
//  In JavaScript, there are several sorting algorithms available.
// Here are explanations of some common ones,
// along with examples of how to implement them Recursively:

// 1: Bubble sort:
// Bubble sort is a simple algorithm that repeatedly swaps adjacent elements
//  if they are in the wrong order. It's called "bubble sort" because the smaller
//  elements "bubble" to the top of the array. Here's an example implementation
//   using recursion:

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

console.log(bubbleSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));

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

console.log(bubbSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));

const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

const mid = Math.floor(array.length / 2);
console.log(mid);

const rightArr = array.slice(mid);

console.log(rightArr);

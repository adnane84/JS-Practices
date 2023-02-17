function cartesianProduct(array1, array2) {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      result.push([array1[i], array2[j]]);
    }
  }
  return result;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(cartesianProduct(array1, array2)); // [[ 1, 4 ], [ 1, 5 ],[ 1, 6 ], [ 2, 4 ],[ 2, 5 ], [ 2, 6 ],[ 3, 4 ], [ 3, 5 ],[ 3, 6 ]]

// Time complexity will be Big-O = O(mn) because we do have 2 arrays,
//  maybe same length maybe not so m = arr1.length and n = arr2.length

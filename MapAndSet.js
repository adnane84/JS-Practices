// Javascript Map and Set.

const array = [1, 2, 3, 4, 5];

const mySet = new Set(array);

// Set will return an Object without duplicates

// Methods in Set
mySet.add(); // to add a new value or element to the object.
mySet.delete(); // to delete.
mySet.clear(); // to remove everything
mySet.has(); // return a boolean True or False
mySet.size; // return number of element in the set

// An example from using Map

const original = new Map([[1, "one"]]);

const clone = new Map(original);
// console.log(Array.from(clone.values()))

const array3 = [9, 7, 3, -6, -5, 4, 5];

const newArr = array3.filter((num) => num > 0).sort((a, b) => a - b);
console.log(newArr);
console.log(newArr[0] + newArr[1]);

//find letters in a string

const countVoi = (text) => {
  let count = 0;
  for (const letter of text) {
    if (letter.match(/[aeiou]/g)) {
      count++;
    }
  }
  return count;
};

console.log(countVoi("hello"));

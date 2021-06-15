// Write functions that compute the sum of the numbers in a list:
const lst = [1, 2, 3, 4, 5];
const sum = lst.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);

// Write a function that computes the running total of a list.
// Write a function that computes the running total of a list.
let arr = [1, 2, 3, 4, 5];
let result = [];
arr.reduce(function(accumulator, currentValue) {
  let totalvalue = accumulator + currentValue;
  result.push(totalvalue);
  return totalvalue;
}, 0);
console.log(result);

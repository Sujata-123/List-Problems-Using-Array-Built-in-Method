// Write a function that takes a number and returns a list of its digits. So for 2342 it should return [2,3,4,2]
const num = '2342';
let res = num.split('');
let result = res.map(a => parseInt(a));
console.log(result);

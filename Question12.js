// Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the list.
// Rotate array by k steps from begining
// let arr = [1, 2, 3, 4, 5, 6];
// let k = arr.length - 2; // Rotating by two positions from left

// for (let i = 0; i < k; i++) {
//   arr.unshift(arr.pop());
// }
// console.log(arr);

// Second method using array.shift() method
let arr = [1, 2, 3, 4, 5, 6];
let k = 2; // Rotating by two positions from left
// let k = 0;//no rotation
for (let i = 0; i < k; i++) {
  arr.push(arr.shift());
}
console.log(arr);

// Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5] → [1,2,3,4,5,6]. You can do this quicker than concatenating them followed by a sort.
const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 7, 8, 15, 19];
//in this solution why I am writing a-b , because I am arranging this merged list in asscending order
//if I am writing it b-a that means I am arranging it in descending order.
console.log(arr1.concat(arr2).sort((a, b) => a - b));

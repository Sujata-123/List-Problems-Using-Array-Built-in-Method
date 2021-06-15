// Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];
const newList = () => {
  var list = [];
  for (let i = 0; i < arr1.length; ++i) {
    list.push(arr1[i]);
    list.push(arr2[i]);
  }
  return list;
};
console.log(newList(arr1, arr2));

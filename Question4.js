// Write a function that returns the elements on odd positions in a list.
let num = [1, 2, 3, 4, 75, 9, 1];
let odd = num.filter((temp, i) => i % 2 != 0);
document.write(odd);

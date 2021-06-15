// Write a function that computes the list of the first 100 Fibonacci numbers. The first two Fibonacci numbers are 1 and 1.
let Fibonac = fib => {
  if (fib === 1) {
    return [1, 1];
  } else {
    let res = Fibonac(fib - 1);
    res.push(res[res.length - 1] + res[res.length - 2]);
    return res;
  }
};

console.log(Fibonac(100));

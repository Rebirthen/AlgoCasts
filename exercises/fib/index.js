// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

console.time("1");
function fibf(n, res = [0, 1]) {
  let length = res.length;
  if (length - 1 > n) {
    console.log(res);
    return res[n];
  } else {
    res.push(res[length - 1] + res[length - 2]);
    return fibf(n, res);
  }
}
console.log(fibf(39));
console.timeEnd("1");

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

console.time("2");
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

console.log(fib(39));

console.timeEnd("2");

// function fib(n) {
//   const res = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     res.push(res[i - 1] + res[i - 2]);
//   }

//   return res[n];
// }

module.exports = fib;

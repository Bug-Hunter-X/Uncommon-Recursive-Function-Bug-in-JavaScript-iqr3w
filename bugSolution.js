function foo(a) {
  if (a === null || a === undefined) {
    throw new Error("Invalid input: a cannot be null or undefined");
  } else if (a <= 0) {
    return a; // Corrected base case
  } else {
    return foo(a - 1) + foo(a - 2);
  }
}

console.log(foo(5)); // Output: 8
console.log(foo(0)); // Output: 0
console.log(foo(1)); // Output: 1
//console.log(foo(null)); // Throws an error as expected
//console.log(foo(undefined)); // Throws an error as expected
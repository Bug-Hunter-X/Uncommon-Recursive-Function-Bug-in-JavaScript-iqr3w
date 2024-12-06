function foo(a) {
  if (a === null) {
    return 1;
  } else if (a === 0) {
    return 0;
  } else {
    return foo(a - 1) + foo(a - 2);
  }
}

console.log(foo(5)); // Output: 8
console.log(foo(null)); //Output: 1
console.log(foo(0)); //Output: 0
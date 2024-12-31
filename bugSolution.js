function foo(a, b) {
  // Solution 1: Return 0 for null values
  a = a === null ? 0 : a; 
  b = b === null ? 0 : b; 
  return a + b; 
}

console.log(foo(null, 1)); // Output: 1
console.log(foo(1, null)); // Output: 1
console.log(foo(1, 2)); // Output: 3

// Solution 2: Using optional chaining and nullish coalescing
function foo2(a, b) {
  return (a ?? 0) + (b ?? 0);
}

console.log(foo2(null, 1)); // Output: 1
console.log(foo2(1, null)); // Output: 1
console.log(foo2(1, 2)); // Output: 3